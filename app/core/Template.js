var Template = (function ($) {

    var TEMPLATES_FOLDER = 'templates';

    var load = function(template, callback) {
        if (typeof (callback) == 'undefined') {
            callback = function() { }
        }

        $("#content").load(TEMPLATES_FOLDER + '/' + template + '.html', callback);
    };

    return {
        load: load
    }

})(jQuery);

var Aside = (function ($) {

    var TEMPLATES_FOLDER = 'templates';

    var load = function(template, callback) {
        if (typeof (callback) == 'undefined') {
            callback = function() { }
        }

        $("aside[class=menu]").load(TEMPLATES_FOLDER + '/' + template + '.html', callback);
    };

    return {
        load: load
    }

})(jQuery);

