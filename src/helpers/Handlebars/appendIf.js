module.exports = function (head, tail, options) {
    if (options.hash.prepend === 'true') {
        return !head ? '' : tail + head;
    }
    return !head ? '' : head + tail;
}
