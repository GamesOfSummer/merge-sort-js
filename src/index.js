"use strict";
exports.__esModule = true;
var helpers_1 = require("./helpers");
function merge(array, array2) {
    var total = 0;
    for (var i = 0; i < array.length; i++) {
        var currentValue = array[i];
        if (typeof currentValue !== 'number') {
            //total += merge(currentValue);
        }
        else {
            total += currentValue;
        }
    }
    return array;
}
function mergeSort(array) {
    return array;
}
(0, helpers_1.consoleStart)();
(0, helpers_1.validateFxn)(merge([1, 2, 3], [1, 6, 9]), [1, 1, 2, 3, 6, 9]);
(0, helpers_1.validateFxn)(mergeSort([3, 1, 2, 9, 6, 1]), [1, 1, 2, 3, 6, 9]);
(0, helpers_1.consoleEnd)();
(0, helpers_1.consoleBuffer)();
