
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
export { getQueryString,debounce }
