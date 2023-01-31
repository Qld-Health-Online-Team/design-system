# Queensland Health Design System
## This is an alpha version and is not production ready

If you are using assets from this Repo, please send an email to designandcapability@chde.qld.gov.au so we can add you to our change management communications list

An attached MIT (basic) licence with “THIS REPOSITORY (SOFTWARE) IS PROVIDED AS IS WITHOUT WARRANTY”

This boilerplate is the frontend starting point for design cutups and front end component development for the Queensland Design System.

## Table of Contents
#### [Getting Started](#getting-started-1)
- [Inclusions](#inclusions)
- [Requirements](#requirements)
- [Local Development](#local-development)
- [Building for production](#building-for-production)

#### [Component Development](#component-development-1)
- [Creating a new component](#creating-a-new-component)
- [Component data](#component-data-manifestjson)
- [Handlebars template](#handlebars-template-componenthbs)
- [Styling a component](#styling-a-component-componentscss)
- [Component JavaScript](#component-javascript-globaljs)
- [Updating / Previewing a component](#updating--previewing-a-component)
- [Build / Commit / Push](#build--commit--push)
- [Importing into Matrix](#importing-into-matrix)

#### [Advanced Features](#advanced-features-1)
- [Figma colour sync](#figma-colour-sync)

#### [General Boilerplate Features](#general-boilerplate-features-1)
- [Working in HTML Files](#working-in-html-files)
- [Working in SCSS Files](#working-in-scss-files)
- [Working in JS Files](#working-in-js-files)

## Getting Started

### Inclusions
When you first clone down the Design System, you automatically get the following:
- Sass compilation + Post CSS autoprefixer
- Templated components with HandlebarsJS
- Babel ES6 conversion
- ESLint
- Hot-reload HTML, CSS and JS

### Requirements
- Node 12.6.0
- NPM 6.9.0

### Local Development

First, install all the required packages:

```
npm install
```

To preview the Design System on your local machine, run the following command:

```
npm run serve
```

This will serve the website into memory in your browser, and will also automatically reload the page after any code changes are saved.

### Building for production

There are two commands you can run when compiling your code for production environments:

```
npm run build
```
```
npm run build-min
```
Both of these commands will run through the configurations set up in `webpack.prod.js` to compile all of your HTML, CSS, and JavaScript for use on a production system.

Instead of just serving the site into memory in your browser with `npm run serve`, this will actually build your files into the /dist directory.

## Component development
### Creating a new component
All existing components are located in src/components, and you can find the base component template in src/components/_template. Run the command `npm run add-component` and follow the prompts to create a new component from this template. 

**Please note:** If you've still got `npm run serve` running in another console window, you'll need to restart that process for Webpack to recognise it.

Each new component will include the following files, which will require updating:
* js/manifest.json - Define the data structure for your component (see below)
* html/component.hbs - Define the structure of your component using HandlebarsJS templating
* css/component.scss - Style your component using SASS
* js/global.js - Frontend JavaScript for your component (eg. toggling of accordions)

At the same time, the script will also automatically create a corresponding component HTML page at src/html/component-\[component-name\], which will allow you to preview the component via `npm run serve`.

For more details on each of these, see the sections below.

### Component data (manifest.json)
Step 1 after creating your new component is to define its data structure via its *manifest.json* file.

Use the **component** object to define some global properties (Eg. name, description, version etc.).

Then, use the **metadata** object inside the **data** object to define each of the various editable fields. For each field, ensure to define the type (eg. *metadata_field_text*) and a default value (see below for examples). Also note that the field name (ie. the object key) must be in 'snake_case' (ie. lowercase with underscores).

Here is an example from the existing **Banner Home** component:

```
{
	"component": {
		"name": "Banner Home",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"version": "0",
		"status": "Released",
		"data": {
			"metadata": {
				"heading": {
					"type": "metadata_field_text",
					"description": "",
					"friendly_name": "Heading",
					"value": "Heading",
					"required": false,
					"editable": true
				},
				"background_image": {
					"type": "metadata_field_related_asset",
					"description": "",
					"friendly_name": "Background Image (Default/Responsive)",
					"value": "/mysource_files/banner-bg.png",
					"required": false,
					"editable": true
				},
				// More fields go here
			}
		}
	}
}

```

You can also use the manifest file to configure certain fields for conditional display in the Matrix editing interface. These rules can be defined for each metadata field under the **display_if** property.

Below is an example showing the *background_image_alignment* field in the Banner Advanced component. In this particular case, if *background_type* is equal to 'image' OR 'image-multi', then we show the *background_image_alignment* field. Have a look at that component for more examples.

```

"background_image_alignment": {
    "type": "metadata_field_select",
    "description": "",
    "friendly_name": "Background alignment",
    "value": "center",
    "options": {
        "left": "Left",
        "right": "Right",
        "center": "Center"
    },
    "required": false,
    "editable": true,
    "display_if": {
        "show": true,
        "operator": "OR",
        "rules": [{
            "field": "background_type",
            "operator": "equals",
            "value": "image"
        }, {
            "field": "background_type",
            "operator": "equals",
            "value": "image-multi"
        }]
    }
}

```

There are also two optional arrays available inside the component object (**children** and **assets**) that can be used for a component that lists multiple items (Eg. Cards or Tags).

To populate the **children** array, you need to create a field named **root_node** within the **metadata** object. In Matrix, the template will look for a field with this exact name. If it exists, it will automatically populate the **children** array with a JSON blob containing the ***%asset_data%*** of each ***child asset*** under that root_node.

See the Cards component for an example of this (example manifest.json below).

```

{
    "component": {
        "name": "Cards",
        "description": "The card component is used to provide a brief summary of content or a task, often with a link to more detail. Cards are frequently displayed alongside other cards to group related content or tasks.",
        "version": "1.0",
        "status": "Released",
        "data": {
            "metadata": {
                
				//... Other component metadata
                
				"root_node": {
                    "type": "metadata_field_related_asset",
                    "description": "",
                    "friendly_name": "Parent asset",
                    "value": "",
                    "required": false,
                    "editable": true
                }
            }
        },

		// Automatically populated by children of the 'root_node'
        "children": [{
            "assetid": "22724",
            "type_code": "page_redirect",
            "version": "0.0.1",
            "name": "Brand",
            "short_name": "Brand",
            "status": "2",
            "languages": "en",
            "charset": "utf-8",
            "created": "2021-07-19 10:06:21",
            "created_userid": "312",
            "updated": "2021-07-19 10:16:04",
            "updated_userid": "312",
            "published": "Never",
            "published_userid": "",
            "status_changed": "2021-07-19 10:06:21",
            "status_changed_userid": "312",
            "thumbnail": "/mysource_files/card--brand.png",
            "attributes": {
                "short_name": {
                    "attrid": "2069",
                    "type": "text",
                    "value": "Brand",
                    "is_contextable": true,
                    "use_default": true
                },
                // ... All other attributes
            },
            "metadata": {
                "description": {
                    "value": "",
                    "fieldid": "22261",
                    "type": "metadata_field_text",
                    "is_contextable": true,
                    "default_value": false,
                    "use_default": true
                },
                // ... All other metadata
            }
        },

		// ... All other child assets
        
		]
    }
}

```

The second array available is the **assets** array. Instead of picking a parent node, this one is controlled by a related metadata field named **asset_select**. In Matrix, the template will look for a field with this exact name. If it exists, it will automatically populate the **assets** array with a JSON blob containing the ***%asset_data%*** of each selected asset in the **asset_select** field.

See the Tags List Linked component for an example of this (example manifest.json below).

```
{
	"component": {
		"name": "Tag List Linked",
		"description": "Tags are a means of classifying content, typically using keywords or labels. They are added to a web page, an asset or other content to help users search for and find related content quickly and easily.",
		"version": "0",
		"status": "In Development",
		"data": {
			"metadata": {
				
				// ... Other component metadata

				"asset_select": {
					"type": "metadata_field_related_asset",
					"description": "",
					"friendly_name": "Assets to link to",
					"value": "1; 2; 3",
					"required": false,
					"editable": true
				}
			}
		},

		// Automatically populated by assets selected in 'asset_select'
		"assets": [{
            "assetid": "22724",
            "type_code": "page_redirect",
            "version": "0.0.1",
            "name": "Brand",
            "short_name": "Brand",
            "status": "2",
            "languages": "en",
            "charset": "utf-8",
            "created": "2021-07-19 10:06:21",
            "created_userid": "312",
            "updated": "2021-07-19 10:16:04",
            "updated_userid": "312",
            "published": "Never",
            "published_userid": "",
            "status_changed": "2021-07-19 10:06:21",
            "status_changed_userid": "312",
            "thumbnail": "23802",
            "attributes": {
                "short_name": {
                    "attrid": "2069",
                    "type": "text",
                    "value": "Brand",
                    "is_contextable": true,
                    "use_default": true
                },
                
				// ... All other attributes
            },
            "metadata": {
                "description": {
                    "value": "",
                    "fieldid": "22261",
                    "type": "metadata_field_text",
                    "is_contextable": true,
                    "default_value": false,
                    "use_default": true
                },
                
				// ... All other metadata
            }
        }, 
        
		// ... All other selected assets

        }]
	}
}

```

### Handlebars template (component.hbs)
Use this file to define the overall template structure of your component using [HandlebarsJS](https://handlebarsjs.com/guide/).

Every component will have access to the **data** object defined in your *manifest.json* file, as well as global data values from **site** and **current** (ie. the current page). See examples of these at *src/data/site.json* and *src/data/current.json* respectively.

Here is an example from the existing **Accordion** component:

```
{{#ifCond globals.current.data.metadata.pageType.value '==' 'landing'}}
<section class="qld__body">
    <div class="container-fluid">
{{/ifCond}}    


{{#if data.heading.value}}
<h2>{{data.heading.value}}</h2>
{{/if}}

{{#if data.intro.value}}
{{{data.intro.value}}}
{{/if}}


<ul class="qld__accordion-group">
    {{#each data}}
        {{#ifCond this.type '==' 'metadata_field_wysiwyg'}}
            {{#ifCond @key '!=' 'intro'}} 
                {{#ifCond this.value '!=' ''}}
                <li>
                    <section class="qld__accordion">
                        <button class="qld__accordion__title js-qld__accordion qld__accordion--closed" aria-controls="accordion-group-{{../containerId}}-{{this.fieldid}}" aria-expanded="false" >
                            {{#getTitle ../data @key}}{{/getTitle}}
                        </button>
            
                        <div class="qld__accordion__body qld__accordion--closed" id="accordion-group-{{../containerId}}-{{this.fieldid}}">
                            <div class="qld__accordion__body-wrapper">
                                {{{this.value}}}
                            </div>
                        </div>
                    </section>
                </li>
                {{/ifCond}}
           {{/ifCond}}
       {{/ifCond}}
    {{/each}}
</ul>

{{#ifCond globals.current.data.metadata.pageType.value '==' 'landing'}}
</div>
</section>
{{/ifCond}}

```

This example contains instances of both the **data** object, as well as the **globals** object. For example, we access the *pageType* value from the current page to determine whether to add some additional wrapping markup.

There are also some examples of custom [Handlebars Helpers](https://handlebarsjs.com/guide/#custom-helpers) being used (Eg. *ifCond* and *getTitle*). Each helper is defined in its own JS file under *src/helpers/Handlebars*. You can add your own helpers by creating additional JS files (one per helper) in this directory, and following the same code structure.

For example:

```
module.exports = function (params) {
    // Helper function goes here
};


```

### Styling a component (component.scss)
Use SASS to style your component, and follow the BEM methodology when naming your classes (Eg. `.qld__accordion--light`). To maintain consistency, look at existing components if you are unsure.

Also take care to follow a 'mobile-first' approach with your SCSS code, where styling at larger breakpoints (see *src/styles/imports/variables.scss* for breakpoint definitions) can be implemented with one of the following mixins:

```
// >sm breakpoint
@include QH-media( sm ) {}

// >md breakpoint
@include QH-media( md ) {}

// >lg breakpoint
@include QH-media( lg ) {}

// >xl breakpoint
@include QH-media( xl ) {}

// >xxl breakpoint
@include QH-media( xxl ) {}

```

These should be implemented inline for each class separately (see *banner* component for a good example)

### Component JavaScript (global.js)
This is where you should add any client side JavaScript (eg. toggling of Accordions). Ensure that all functions are documented in [Jsdoc](https://devhints.io/jsdoc) format.

### Updating / Previewing a component
To test any updates to a component, you can view it locally using `npm run serve`. A corresponding component page will be automatically created at src/html/component-\[component-name\], so that you can easily preview your component, and test the output with different input data.

### Build / Commit / Push
Once you are ready to push up any local changes to a component, you should run the `npm run build` script before you commit. This generates the compiled Handlebars template, as well as an import.xml file that can be used to automatically create all of the assets required in Matrix for your component.

### Importing into Matrix
To import your finished component, go to the Matrix Admin interface and in the 'Tools' menu select 'Import assets from XML'. Choose the 'import.xml' file generated for your component on build, and select the 'Components' folder in the 'Import Assets Under' field.

After successful import, you should have a new Content Template in Matrix with a Metadata Schema that matches your *manifest.json* file.


## Advanced Features
### Figma colour sync

The Figma script pulls in all colour variables from the Figma file via the API which can be at '.figma.js'.

By default the script points the design system file which can be updated to pull in new designs colour matrix.

To pull in a new colour matrix you will need to update line 6 with the new path.
```
/qKsxl3ogIlBp7dafgxXuCA
```
The new path can be found in the url of the figma file, simply copy the figma file id '/file/<figma-file-id>'.
e.g
```
https://www.figma.com/file/**qKsxl3ogIlBp7dafgxXuCA**/QLDH-DDS?node-id=5990%3A97450&viewport=241%2C48%2C0.5
```
Once the path has been updated and save you can now run the script with:
```
npm run get-figma
```
This will hit the figma API via a get request, process the values and save the new SASS varibles in:
```
/src/styles/imports/figma.scss
```
The figma variables can now be used by running either of the local or production scripts.

## General Boilerplate Features
This section contains some general tips for writing code using this boilerplate
### Working in HTML files
#### Including images
- Your files live in:
    - src/files/my-awesome-file.png
- And you're wanting to include an image in:
    - src/modules/header/html/index.html
- Use either reference:
    - Relative path: `<img src="../../../files/my-awesome-file.png" alt="My awesome file" >`
    - Absolute path: `<img src="~src/files/my-awesome-file.png" alt="My awesome file" >`

#### Including HTML modules
- Your awesome menu lives in:
    - src/modules/header-menu/html/index.html
- And you want to include it in:
    - src/modules/header/html/index.html
- Use either reference:
    - Relative path: `${require('../../header-menu/html/index.html')}`
    - Absolute path: `${require('src/header-menu/html/index.html')}`

### Working in SCSS files
#### Including fonts
- Your fonts live in:
    - src/styles/imports/fonts/my-awesome-font.woff
- And you want to include it in your main CSS:
    - src/styles/global.scss
- Use either reference:
    - Relative path: `url('./imports/fonts/my-awesome-font.woff') format('woff')`
    - Absolute path: `url('~src/imports/fonts/my-awesome-font.woff') format('woff')`

#### Including images
- Your files live in:
    - src/files/icon.png
- And you're wanting to include an image in:
    - src/modules/header/css/global.scss
- Use either reference:
    - Relative path: `background-image: url('../files/icon.png')`;
    - Absolute path: `background-image: url('~src/files/icon.png')`;


### Working in JS files
#### Including images
- Your files live in:
    - src/files/icon.png
- And you're wanting to include an image in:
    - src/modules/header/js/global.js
- Use either reference:
    - Relative path: `const icon = require('../../../files/icon.png');`
    - Absolute path: `const icon = require('src/files/icon.png');`

#### Including JSON
You may want to reference an external JSON file that does not need to be a part of the webpack build process. For instance, mock data returned from funnelback autocomplete. The /externals directory allows you to pop in files to ensure that they will be included in the /dist directory

- Your file lives in:
    - `src/externals/data.json`
- You can reference it by its relative path ie.
    - `fetch('./externals/data.json').then(function(response){...do stuff})`
- Or its absolute path ie.
    - `fetch('~src/externals/data.json').then(function(response){...do stuff})`
- File will be moved into the dist directory `dist/externals/data.json`


#### Maven
- To build and test all: ```mvn install```
- To build js docs ```mvn com.github.eirslett:frontend-maven-plugin:npm@jsdoc```
- To run webpack serve ```mvn com.github.eirslett:frontend-maven-plugin:npm@serve```
