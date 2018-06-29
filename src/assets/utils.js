
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var href = window.location.search
    var index = href.indexOf('?')
    var r = href.substr(index + 1).match(reg);
    if (r != null)
        return unescape(r[2]);
    return null;
}
export { getQueryString }
