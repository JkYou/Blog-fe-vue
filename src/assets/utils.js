
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var href = window.location.search
    var index = href.indexOf('?')
    var r = href.substr(index + 1).match(reg);
    if (r != null)
        return unescape(r[2]);
    return null;
}
function debounce (func, wait, immediate) {
    var timeout, args, context, timestamp, result;
    var later = function () {
        var last = +new Date() - timestamp;

        if (last < wait && last >= 0) {
            timeout = setTimeout(later, wait - last);
        } else {
            timeout = null;
            if (!immediate) {
                result = func.apply(context, args);
                if (!timeout) context = args = null;
            }
        }
    };
    return function () {
        context = this;
        args = arguments;
        timestamp = +new Date();
        var callNow = immediate && !timeout;
        if (!timeout) timeout = setTimeout(later, wait);
        if (callNow) {
            result = func.apply(context, args);
            context = args = null;
        }
        return result;
    };
};

function timerecover(unix) {
    var myDate = new Date(parseInt(unix));
    var year = myDate.getFullYear();
    var month = parseInt(myDate.getMonth()) + 1;
    if (month < 10) {
        month = "0" + month
    }
    var date = myDate.getDate();
    if (parseInt(date) < 10) {
        date = "0" + date
    }
    var hours = myDate.getHours();
    if (parseInt(hours) < 10) {
        hours = "0" + hours
    }
    var minutes = myDate.getMinutes();
    if (parseInt(minutes) < 10) {
        minutes = "0" + minutes
    }
    var seconds = myDate.getSeconds();
    if (parseInt(seconds) < 10) {
        seconds = "0" + seconds
    }
    var day = year + "-" + month + "-" + date+" "+hours+":"+minutes+":"+seconds;
    return day;
}
export { getQueryString, debounce, timerecover }
