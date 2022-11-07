/*
 * Funnelback auto-completion plugin
 * version 2.6.1
 *
 * author: Liliana Nowak
 * Copyright Funnelback, 2015-2019
 *
 * @requires jQuery https://jquery.com@1.10.2
 * @requires Typeahead https://twitter.github.io/typeahead.js@0.11.1
 * @requires Handlebars https://handlebarsjs.com@4.0.5
 */
(function($) {
    'use strict';

	var autocompletion = function(element, options) {
		// Global references
		this.$element = $(element);
		this.options  = options;

		this.init();
	}

	// Default options
	autocompletion.defaults = {
		// set configuration
		datasets : null,				// {set1: {url: ''}, set2: {...}, set3: {...}}
		/*
		defaultCall   : {				// 'string'|[]|{}; use to trigger auto-completion when input value is empty and length=0
			params    : {},						// {}; list of parameters added to request
			url       : '' 						// 'string'; URL to call request
			transform : customFunctionToMapData,// function(set, data); transform function used to map response data
		},
		defaultCall   : '',				// 'string'; query to replace empty value and call request
		defaultCall   : [],				// [{value: '', label: ''}, {value: '', label: ''}]; list of hardcoded data to fulfill dropdown menu
		defaultCall   : {
			data      : [],				// []; list of hardcoded data
			transform : function 		// function(set, data); transform function used to map hardcoded data
		},
		*/
		callback 		: null,			// function(set, suggestions); callback function applied to suggestions before returning them to typeahead plugin
		debounceDelay	: 300,	  		// integer; the debounce delay in milliseconds between the time the user stops typing a letter and the time the request is done\
		group 			: false,		// true|false; enable grouping suggestions based on parameter itemGroup
		groupOrder		: [],			// []; list of group headers used to sort grouped suggestions in that order
		facets 			: {				// {}; list of parameters applied when default search-based auto-completion is enabled
			blacklist	: [],	// []; list of facet categories names not to displayed
			whitelist	: [],	// []; list of facet categories names to display
			show		: 2,	// integer; maximum number of facets values to display per facet category; if not set will display all facet category values
			url 		: null, // string; the target URL to apply facets parameters to; By default it'll be current location
		},
		itemGroup 		: 'category',	// 'string'; the name of field used to group suggestions and display as group header in dropdown
		itemLabel 		: 'value',		// 'string'; the name of a field to be displayed in input field
		template 		: {				// {notFound: '', pending: '', header: '', footer: '', group: '', suggestion: ''}
			group: function(context) { return $('<div>').html(String(context.label)); },
			suggestion: function(context) { return $('<div>').html(String(context.label)); }
		},
		templateMerge 	: true,			// true|false; to wrap notFound and pending template with header and footer template
		transform 		: _processSetData, // function(set, suggestion, index); transform function used to map response data

		// URL settings
		collection 		: null,			// 'string'; the collection name
		dataType 		: 'json',		// 'json'|'jsonp'; the type of data returned back from the server
		alpha 			: '0.5',		// 'string'; adjust the balance between length and relevancy for spelling based suggestions
		format 			: 'extended',	// 'simple|extended'; mapping into 'json' or 'json++'
		params 			: null,			// {}; custom URL parameters
		profile 		: '_default',	// 'string'; the profile name
		program 		: '/s/suggest.json', // 'string'; program/URL used to generate auto-completion suggestions
		show 			: 10,			// integer; maximum number of suggestions to diplay in dropdown per set
		sort 			: 0,			// integer; set the auto-completion suggestions sort order when program='/s/suggest.json'
		queryKey 		: 'partial_query', // 'string'; the name of URL parameter to run search query
		queryVal 		: '%QUERY',		// 'string'; the value to be replaced in url with the URI encoded query

		// display settings
		length      	: 3,			// integer; the minimum character length to trigger query completion
		horizontal  	: false,		// true|false; if true, display datasets in columns, else one below the other
		scrollable  	: false,		// true|false; to limit height of a menu dropdown to maxheight by adding vertical scroll

		// logs
		logging 		: true,
		interactionLog 	: '/s/log',

		//typeahead settings
		typeahead: {
			classNames  : {},			// {}; to override any of default classes, more https://github.com/twitter/typeahead.js/blob/master/doc/jquery_typeahead.md#class-names
			highlight   : true,			// true|false; when suggestions are rendered, pattern matches for the current query in text nodes will be wrapped in a strong element with its class set to {{classNames.highlight}}
			hint        : false,		// true|false; to show a hint in input field,
			events      : {				// {eventName: function}; events get triggered on the input element during the life-cycle of a typeahead
				select  : function(event, suggestion) {
					_selectItem(suggestion, $(event.target));
				},
				afterselect: function(event, suggestion) {
					if (suggestion.extra.action_t == 'E') $(event.target).focus();
				}
			}
		},
	};

	/* Public methods */
	
	autocompletion.prototype.init = function() {
		this.option(this.options);

		if (_isEnabled(this.options)) this.initTypeahead();
		else this.destroy();
	}

	autocompletion.prototype.destroy = function () {
		this.destroyTypeahead;

		this.$element = null;
		this.options  = {};
	}

	autocompletion.prototype.option = function(key, val) {
		if (arguments.length === 0) {
			return this.options;
		}

		var that = this, options = $.isObject(key) ? key : {}, parts;
		if ($.isString(key)) {
			if (arguments.length === 1 || !$.isDefinied(val)) {
				return $.dataVals($.extend({}, that.options), key);
			}

			options[key] = val;
		}

		for (var k in options) _setOption(k, options[k]);

		function _setOption(key, val) {
			if (key === 'datasets') that.options[key] = _mapOptions(that.options, val);
			if (key === 'debug') _debug = val;
			if (key === 'horizontal' && val) {
				that.setTypeaheadClass('menu', 'tt-horizontal');

				that.options.typeahead.events.render = function(event) {
					_renderSetWidth(that.getTypeaheadMenu(), 'tt-horizontal', 'tt-dataset');
				};
			}
			if (key === 'scrollable' && val) that.setTypeaheadClass('menu', 'tt-scrollable');
		}
	}

	autocompletion.prototype.horizontal = function(val) {
		return this.option('horizontal', val);
	}

	autocompletion.prototype.scrollable = function(val) {
		return this.option('scrollable', val);
	}

	// Typeahead
	autocompletion.prototype.initTypeahead = function() {
		var that = this, data = [];

		$.each(that.options.datasets, function(name, set) {
			data.push(_getSetData(set, name));
		});

		that.$element.typeahead({
			minLength : parseInt(that.options.length),
			hint      : that.options.typeahead.hint,
			highlight : that.options.typeahead.highlight,
			classNames: that.options.typeahead.classNames
		}, data);

		if (that.options.typeahead.events) {
			$.each(that.options.typeahead.events, function(eventName, func) {
				that.$element.on('typeahead:' + eventName, func);
			});
		}

		if (that.options.horizontal) {
			var data = that.$element.data(), menu = that.getTypeaheadMenu();

			/* 
			 * 37 - code for left arrow key
			 * 38 - code for up arrow key
			 * 39 - code for right arrow key
			 * 40 - code for down arrow key
			 */
			data.ttTypeahead._onDownKeyed = function() {
				_navCursorUD(40, menu, that.$element);
			};
			data.ttTypeahead._onUpKeyed = function() {
				_navCursorUD(38, menu, that.$element);
			}

			var cols = menu.children('.tt-dataset');
			if (cols.size() > 1) {
				data.ttTypeahead._onLeftKeyed = function() {
					_navCursorLR(37, cols, that.$element);
				};
				data.ttTypeahead._onRightKeyed = function() {
					_navCursorLR(39, cols, that.$element);
				}
			}

			that.$element.on('keydown', function(event) {
				var code = event.keyCode || event.which;
				if (code == 38 || code == 40) return false;
				if ((code == 37 || code == 39) && $.exist(_navCols.cursor)) return false;
			});
		}

		// Log interactions
		if (!that.options.logging) return;
		that.$element.on('typeahead:select', function(event, suggestion) {
			logInteraction(that.options, suggestion, $(event.target), 'select');
		});
	}

	autocompletion.prototype.destroyTypeahead = function() {
		this.$element.typeahead('destroy');
	}

	autocompletion.prototype.getTypeaheadMenu = function() {
		return this.$element.siblings('.tt-menu');
	}

	autocompletion.prototype.setTypeaheadClass = function(name, className) {
		if (!$.exist(this.options.typeahead.classNames[name], true)) this.options.typeahead.classNames[name] = 'tt-' + name; // default class
		this.options.typeahead.classNames[name] += ' ' + className;
	}

	/* Private variables */
	var _debug = false,
	_mapKeys = ['collection', 'callback', 'dataType', 'alpha', 'facets', 'transform', 'format', 'group', 'groupOrder', 'itemGroup', 'itemLabel', 'params', 'profile', 'program', 'show', 'sort', 'queryKey', 'queryVal', 'template', 'templateMerge', 'debounceDelay'],
	_navCols = {cursor : null, query  : ''};

	/* Private methods */
	
	// Check if there is enough data to trigger auto-completion
	function _isEnabled(options) {
		var bState = false;

		if (!$.isObject(options.datasets)) return bState;

		$.each(options.datasets, function(name, set) {
			if ($.exist(set.collection, true)) bState = true;
		});

		return bState;
	}

	// Map global options per dataset
	function _mapOptions(options, datasets) {
		var map = {};
		$.each(_mapKeys, function(i, key) { map[key] = options[key] });
		$.each(datasets, function(name, set) { datasets[name] = $.extend(true, {}, map, set) });
		return datasets;
	}

	// Handle set
	function _getSetData(set, name) {
		var engine = new Bloodhound({
			datumTokenizer : Bloodhound.tokenizers.obj.whitespace('value'),
			queryTokenizer : Bloodhound.tokenizers.whitespace,
			remote         : getBloodhoundRemote()
		});
		engine.initialize();

		return {
			name 	: name,
			limit 	: 10000, // hack to display all returned data
			source 	: source,
			display : displayVal,
			templates : _renderSetTemplate(set)
		}

		function displayVal(suggestion) {
			return $.isFunction(set.itemLabel) ? set.itemLabel.call(undefined, suggestion) : $.dataVals(suggestion, set.itemLabel);
		}

		function getBloodhoundRemote() {
			var remote = {
				url    : set.url ? set.url : _getSetUrl(set),
				filter : function (response) {
					var query = getQuery($(this).get(0).transport.lastReq);
					return _handleSetData(set, $.map(response, function(suggestion, i) { return set.transform(set, suggestion, i, name, query) }));
				},
				rateLimitWait: set.debounceDelay
			};
			if (set.dataType === 'jsonp') {
				remote['prepare'] = function(query, settings) {
					settings.dataType = 'jsonp';
					settings.url = settings.url.replace(set.queryVal, query);
					return settings;
				};
			} else {
				remote['wildcard'] = set.queryVal;
			}
			return remote;
		}

		function getQuery(str) {
			if (!$.exist(str, true)) return str;
			str = decodeURIComponent(str);
			return str.substring(str.lastIndexOf(set.queryKey + '=') + (set.queryKey.length + 1), str.lastIndexOf('GET'));
		}

		function displayVal(suggestion) {
			return $.isFunction(set.itemLabel) ? set.itemLabel.call(undefined, suggestion) : $.dataVals(suggestion, set.itemLabel);
		}

		function source(query, sync, async) {
			if (query.length < 1 && set.defaultCall) {
				if ($.isString(set.defaultCall)) {
					query = set.defaultCall;
				}
				else if ($.isArray(set.defaultCall)) {
					sync(_handleSetData(set, set.defaultCall));
					return;
				}
				else if ($.exist(set.defaultCall.data)) {
					sync(_handleSetData(set, set.defaultCall.transform(set, set.defaultCall.data)));
					return;
				}
				else if ($.exist(set.defaultCall.url, true)) {
					$.get(set.defaultCall.url, set.defaultCall.params, function(data) {
						async(_handleSetData(set.defaultCall.transform(set, data)));
						return;
					});
				}
			}

			engine.search(query, sync, async);
		}
	}

	// Returned request URL based on provided parameters
	function _getSetUrl(set) {
		var params = {collection: set.collection};

		if ($.exist(set.format, true)) params['fmt'] = set.format == 'simple' ? 'json' : 'json++';
		if ($.exist(set.alpha, true)) params['alpha'] = set.alpha;
		if ($.exist(set.profile, true)) params['profile'] = set.profile;
		if ($.exist(set.show, true)) params['show'] = set.show;
		if ($.exist(set.sort, true)) params['sort'] = set.sort;
		if ($.isObject(set.param)) params = $.extend(true, {}, params, set.params);

		return set.program + '?' + $.param(params) + '&' + set.queryKey + '=' + set.queryVal;
	}

	// Group results into categories
	function _groupSetData(set, results) {
		var grouped = {'':[]}, i, len;

		if ($.exist(set.groupOrder)) {
			for (i = 0, len = set.groupOrder.length; i < len; i++) {
				grouped[set.groupOrder[i]] = [{label: set.groupOrder[i]}];
			}
		}

		for (i = 0, len = results.length; i < len; i++) {
			if (!$.exist(grouped[results[i][set.itemGroup]])) grouped[results[i][set.itemGroup]] = [{label: results[i][set.itemGroup]}];
			grouped[results[i][set.itemGroup]].push(results[i]);
		}

		results = [];
		$.each(grouped, function(groupName, group) {
			if (group.length > 1) {
				if (!$.exist(groupName, true)) group.splice(0, 1);
				$.merge(results, group);
			}
		});

		return results;
	}

	// Limit number of returned results
	// Trigger grouping them or apply custom callback
	function _handleSetData(set, results) {
		results = results.slice(0, set.show);
		if (set.callback && $.isFunction(set.callback)) results = set.callback.call(undefined, set, results) || [];
		if (!set.group) return results;
		return _groupSetData(set, results);
	}

	function _processSetData(set, suggestion, i, name, query) {
		return $.autocompletion.processSetData(set, suggestion, i, name, query);
	}

	// Adjust columns width depends on columns number
	// If column has assigned CSS "width" property with "!important" declaration, this will be respected
	function _renderSetWidth(menu, classWrapper, className) {
		var cols = 0, colsW = 0, styles, parts, menuW = menu.width();
		className 	 = '.' + className;
		classWrapper = '.' + classWrapper;

		$.each(menu.children(className), function() {
			parts  = $(this).attr('class').split(' ');
			styles = $.cssStyle(classWrapper + ' .' + parts[1]) || $.cssStyle(classWrapper + ' .' + parts.join('.'));

			if (styles.width && styles.width.indexOf('important') && styles.width.indexOf('auto') < 0 && styles.width.indexOf('initial') < 0 && styles.width.indexOf('inherit') < 0) {
				if (styles.width.indexOf('%') > 0) colsW += menuW * parseFloat(styles.width) / 100;
				else colsW += parseFloat(styles.width);
			}
			else if ($.hasContent($(this))) cols++;
		});

		if (cols) {
			menuW -= colsW + 0.5;
			var minW = parseFloat(menu.children(className).css('min-width')), colW = menuW / cols;
			if (minW <= colW) menu.children(className).css('width', colW + 'px');
		}
	}

	// Pre-compile templates using Handlebars
	function _renderSetTemplate(set) {
		_setSetTemplateHeader(set);

		if (!set.template || $.isEmptyObject(set.template)) return {};

		$.each(set.template, function(k, obj) {
			if ($.isObject(obj)) set.template[k] = obj.prop('outerHTML');
		});

		if (set.templateMerge) {
			templateMerge('notFound');
			templateMerge('pending');
		}

		$.each(set.template, function(k, obj) {
			if ($.isString(obj)) set.template[k] = Handlebars.compile(obj);
		});

		return set.template;

		function templateMerge(temp) {
			if (set.template[temp] && $.isString(set.template[temp])) {
				if (set.template.header && $.isString(set.template.header)) set.template[temp] = set.template.header + set.template[temp];
				if (set.template.footer && $.isString(set.template.footer)) set.template[temp] += set.template.footer;
			}
		}
	}

	// Set default template to display column header if column name is defined
	function _setSetTemplateHeader(set) {
		if (!set.template.header && $.exist(set.name, true)) set.template.header = '<h5 class="tt-category">' + set.name + '</h5>';
	}

	// Handle selected item based on "action_t" parameter
	function _selectItem(item, target) {
		if ($.exist(item.extra)) {
			switch(item.extra.action_t) {
				case 'C':
					eval(item.extra.action); break;
				case 'U':
					document.location = item.extra.action; break;
				case 'E':
					target.typeahead('val', item.extra.action); break;
				case undefined:
				case '':
				case 'S':
				case 'Q':
				default:
					formSend(item.value); break;
			}
		} else {
			formSend(item.value);
		}

		function formSend(val) { // Submit form on select
			target.val(val);
			target.closest('form').submit();
		}
	}

	function _getSelectableLabel(item) {
		return $.exist(item.data()) ? item.data().ttSelectableDisplay : item.text();
	}

	/* Handle Typeahead navigation */
	
	// Navigate dropdown list  left - right (switching between columns)
	function _navCursorLR(code, cols, target) {
		if (!$.exist(_navCols.cursor)) return;

		var currCol      = _navCols.cursor.parent(),
			currColIdx   = cols.index(currCol),
			delta        = code == 37 ? -1 : 1,
			nextColItems = getNextColItems(currColIdx),
			cursorIdx    = $(currCol).children('.tt-selectable').index(_navCols.cursor),
			nextCursor   = $.exist(nextColItems[cursorIdx]) ? nextColItems[cursorIdx] : nextColItems[nextColItems.length - 1];

		$(_navCols.cursor).removeClass('tt-cursor');
		_navCols.cursor = $(nextCursor).addClass('tt-cursor');
		target.data().ttTypeahead.input.setInputValue(_getSelectableLabel(_navCols.cursor));

		function getNextColItems(currColIdx) {
			var nextColIdx = code == 37
				? $.exist(cols[currColIdx - 1]) ? currColIdx - 1 : cols.length - 1
				: $.exist(cols[currColIdx + 1]) ? currColIdx + 1 : 0,
				nextColItems = $(cols[nextColIdx]).children('.tt-selectable');

			return $.exist(nextColItems) ? nextColItems : getNextColItems(nextColIdx);
		}
	}

	// Navigate dropdown list  up - down
	function _navCursorUD(code, menu, target) {
		if (!$.exist(menu.find('.tt-cursor'))) {
			_navCols.cursor = code == 38 ? menu.find('.tt-selectable').last() : menu.find('.tt-selectable').first();
			_navCols.cursor.addClass('tt-cursor');
			_navCols.query  = target.val();
			target.data().ttTypeahead.input.setInputValue(_getSelectableLabel(_navCols.cursor));
			return;
		}

		var currCol      = _navCols.cursor.parent(),
			currColItems = $(currCol).children('.tt-selectable');

		if(!$.exist(currColItems)) return;

		var cursorIdx = currColItems.index(_navCols.cursor), delta = code == 38 ? -1 : 1;

		$(_navCols.cursor).removeClass('tt-cursor');

		if (!$.exist(currColItems[cursorIdx + delta])) {
			_navCols.cursor = null;
			target.data().ttTypeahead.input.resetInputValue();
			target.data().ttTypeahead._updateHint();
		}
		else {
			_navCols.cursor = $(currColItems[cursorIdx + delta]).addClass('tt-cursor');
			target.data().ttTypeahead.input.setInputValue(_getSelectableLabel(_navCols.cursor));
		}
	}

	// Debug
	function logDebug(options, input, output, msg) {
		if (!_debug || !window.console) return;

		console.log(msg);
		console.log('Options: ', options);
		console.log('Input: ', input);
		console.log('Output: ', output);
		console.log('--------');
	}

	function logInteraction(options, input, target, event) {
		if (!options.logging || !$.exist(options.interactionLog, true)) return;
		if (!input.dataset || !options.datasets[input.dataset]) return;

		$.ajax({
			dataType: 'jsonp',
			type: 'GET',
			url:  getInteractionUrl(options.datasets[input.dataset], input),
		}).fail(function(qXHR, textStatus, errorThrown) {
			logDebug(options, input, qXHR, 'Interaction log error: ' + textStatus + ' ' + errorThrown);
		});

		function getInteractionUrl(set, suggestion) {
			var params = {
				collection: set.collection,
				type: event,
				partial_query: suggestion.query,
				client_time: new Date().getTime()
			};

			if ($.exist(set.profile, true)) params['profile'] = set.profile;
			if ($.exist(suggestion.extra)) params = $.extend(true, {}, params, suggestion.extra);

			return options.interactionLog + '?' + $.param(params);
		}
	}

	// Generate plugin
	function Plugin() {
		var args = [].slice.call(arguments), option = args.shift();

		return this.each(function () {
			var $this = $(this),
				data    = $this.data('flb.autocompletion'),
				options = $.extend(true, {}, autocompletion.defaults, data || {}, $.isObject(option) && option);

			if (!data && /destroy|hide/.test(option)) return;
			if (!data) $this.data('flb.autocompletion', (data = new autocompletion(this, options)));
			if ($.isString(option) && $.isFunction(data[option])) data[option].apply($this, args);
		});
	}

	$.fn.autocompletion             = Plugin;
	$.fn.autocompletion.Constructor = autocompletion;

	// List of predefined mapping functions
	$.autocompletion = {
		// Map /s/suggest.json output
		processSetData: function(set, suggestion, i, name, query) {
			var value = suggestion.key, label = suggestion.key;
			if (suggestion.action_t == 'Q') value = suggestion.action;
			if (suggestion.action_t == 'S') value = suggestion.disp;
			if (suggestion.disp_t == 'C') label = eval(suggestion.disp);
			else if (suggestion.disp) label = suggestion.disp;

			return {
				label    : label,
				value    : value,
				extra    : suggestion,
				category : suggestion.cat ? suggestion.cat : '',
				rank     : i + 1,
				dataset	 : name,
				query    : query
			};
		},

		// Map /s/search.json output
		processSetDataFacets: function(set, suggestion, i, name, query) {
			if (i !== 'response' || !$.exist(suggestion.facets)) return;

			var suggestions = [], rank = 1;
			for (var i = 0, leni = suggestion.facets.length; i < leni; i++) {
				var facet = suggestion.facets[i];

				if (!$.exist(facet.allValues)) continue;
				if ($.exist(set.facets.blacklist) && set.facets.blacklist.indexOf(facet.name) > -1) continue;
				if ($.exist(set.facets.whitelist) && set.facets.whitelist.indexOf(facet.name) < 0) continue;

				for (var j = 0, lenj = facet.allValues.length; j < lenj; j++) {
					if ($.exist(set.facets.show) && j > parseInt(set.facets.show) - 1) break;
					if (!facet.allValues[j].count) continue;

					suggestions.push({
						label   : facet.allValues[j].label,
						value   : facet.allValues[j].data,
						extra   : {
							action  : getUrl(facet.allValues[j]),
							action_t: 'U'
						},
						category: facet.name,
						rank    : rank++,
						dataset	: name,
						query   : query
					});
				}
			}

			return suggestions;

			function getUrl(facet) {
				return ($.exist(set.facets.url, true) ? set.facets.url : window.location.origin + window.location.pathname) + facet.toggleUrl;
			}
		}
	}

	// Helpers
	$.exist      = function(obj, bString) { if (!$.isDefinied(bString)) bString = false; var obj = bString ? obj : $(obj); return $.isDefinied(obj) && obj != null && ($.isString(obj) ? obj + '' : obj).length > 0; }
	$.hasContent = function(obj) { return obj.html().trim().length ? true : false; }
	$.isDefinied = function(obj) { return typeof(obj) !== 'undefined'; }
	$.isFunction = function(obj) { return typeof(obj) === 'function'; }
	$.isString   = function(obj) { return typeof(obj) === 'string'; }
	$.isObject   = function(obj) { return typeof(obj) === 'object'; }
	$.dataKeys   = function(obj) { return iterateKeys(obj, ''); function iterateKeys(obj, prefix) { return $.map(Object.keys(obj), function(key) { if(obj[key] && $.isObject(obj[key])) return iterateKeys(obj[key], key); else return (prefix ? prefix + '-' + key : key);}); }}
	$.dataVals   = function(obj, key) { var parts = key.split('.'), key = parts.shift(); if (parts.length) { for (var i = 0, len = parts.length; i < len; i++) { obj = obj[key] || {}; key = parts[i]; } } return obj[key]; }
	$.cssStyle	 = function(className) {
		var styleSheets = window.document.styleSheets,  styles = {};
		for(var i = 0, leni = styleSheets.length; i < leni; i++){
			if (styleSheets[i].href && styleSheets[i].href.indexOf(window.location.host) < 0) continue;

			var classes = styleSheets[i].rules || styleSheets[i].cssRules;
			if (!classes) continue;

			for (var j = 0, lenj = classes.length; j < lenj; j++) {
				if (classes[j].selectorText != className) continue;

				var properties = classes[j].style.cssText.split(';');
				for (var k = 0, lenk = properties.length; k < lenk; k++) {
					var part = properties[k].split(':');
					if (part.length == 2) styles[part[0].trim()] = part[1].trim();
				}
			}
		}
		return styles;
	}

}(jQuery));

String.prototype.capitalize = function() { return this.charAt(0).toUpperCase() + this.slice(1); }