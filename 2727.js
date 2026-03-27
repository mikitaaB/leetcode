/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
    if (obj.constructor === Array) {
        return obj.length === 0;
    }
    if (obj.constructor === Object
        && Object.getPrototypeOf(obj) === Object.prototype) {
        return Object.keys(obj).length === 0;
    }
    return false;
};