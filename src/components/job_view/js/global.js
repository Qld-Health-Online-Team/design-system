(function () {
    'use strict';

    /**
     * @module newsArticleReadTime
     */
    var newsArticleReadTime = {};

    /**
     * @module copyToClipboard
     */
    var copyToClipBoard = {};

    var newsArticle = $('.qld__news-article');

    /**
     * Get the reading time for the current article
     * 
     * @memberof module:newsArticleReadTime
     */
    newsArticleReadTime.init = function() {
        let readTimeEl = newsArticle.find('.qld__news-article__utility .qld__tag');
        let articleBody = newsArticle.find('.qld__news-article__body');
        let articleHeading = newsArticle.find('.qld__news-article__heading');
        let wordCount = articleHeading.text().trim().split(' ').length + articleBody.text().trim().split(' ').length;
        let wpm = 200;
        let readTime = Math.ceil(wordCount / wpm);

        readTimeEl.text(`Read time: ${readTime} ${readTime > 1 ? 'minutes' : 'minute'}`);
    };

    /**
     * Copy the contents within element to the users clipboard with a fallback for IE11
     * 
     * @memberof module:copyToClipBoard
     */
    copyToClipBoard.init = function(text, $el) {

        if (navigator.clipboard) { // All popular browsers
            navigator.clipboard.writeText(text).then(function () {
                if($el) {
                    $el.find('.qld__copied-to-clipboard').toggleClass('active').text('Copied').fadeOut(1400, function() {
                        $(this).empty().show().toggleClass('active');
                    });
                } else {
                    $('.qld__copied-to-clipboard').toggleClass('active').text('Copied').fadeOut(1400, function() {
                        $(this).empty().show().toggleClass('active');
                    });
                }
            }, function (err) {
                console.log('Clipboad API not available, please upgrade your browser.')
            });
        } else if(window.clipboardData) { // IE11
            window.clipboardData.setData("Text", text);
        }
    }

    QLD.newsArticleReadTime = newsArticleReadTime;
    QLD.copyToClipBoard = copyToClipBoard;


    $(function() {

        if(newsArticle.length > 0) {
            QLD.newsArticleReadTime.init(); 
            console.log('init');
            // $('.qld__news-article__share-btn').each(function() {
            //     QLD.Modal.init(this);
            // });
    

            $('.qld__news-article__copy-link').on('click', function() {
                console.log('click');
                QLD.copyToClipBoard.init($(this).find('span').text(), $(this));
            });


            $('.qld__news-article__copy-link span[tabindex="0"]').keypress(function(e) {
                var keycode = (e.keyCode ? e.keyCode : e.which);
                console.log('click');
                if(keycode == '32' || keycode == '13') {
                    e.preventDefault();
                    QLD.copyToClipBoard.init($(this).find('span').text()); 
                }
            });
        }
    });
    
}());