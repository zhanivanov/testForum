var Ajax = (function ($) {

    var PARSE_APP_ID = "QFDHAYIxgeNrofyDI6kABUANT5QLOU0czweGbM0E";
    var PARSE_REST_KEY = "yZ9U8A0vlHViGVwmlL85cPrADPtBy3DTnuYj2VfP";

    var call = function(url, method, data, callback) {
        $.ajax({
            method: method,
            headers: {
                "X-Parse-Application-Id": PARSE_APP_ID,
                "X-Parse-REST-API-Key": PARSE_REST_KEY
            },
            data: data,
            url: url
        }).success(callback);
    }

    var pull = function(url, method, callback) {
        $.ajax({
            headers: {
                "X-Parse-Application-Id": PARSE_APP_ID,
                "X-Parse-REST-API-Key": PARSE_REST_KEY
            },
            type: method,
            contentType: "application/json; charset=utf-8",
            url: url,
            dataType: "json"
        }).success(callback);
    }

    return {
        call: call,
        pull: pull
    }

}(jQuery));
