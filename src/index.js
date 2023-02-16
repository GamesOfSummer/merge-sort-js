"use strict";
exports.__esModule = true;
var helpers_1 = require("./helpers");
var merge = function (left, right) {
    var results = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            // shift removes the first element in an array and returns it
            // it's like .pop() for the front
            results.push(left.shift());
        }
        else {
            results.push(right.shift());
        }
    }
    // either left or right will be empty so you can safely concat both
    return results.concat(left, right);
};
function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }
    else {
        var half_length = Math.floor(array.length / 2);
        var leftSideArray = array.slice(0, half_length);
        var rightSideArray = array.slice(half_length);
        var sortedLeftSideArray = mergeSort(leftSideArray);
        var sortedRightSideArray = mergeSort(rightSideArray);
        var mergedArray = merge(sortedLeftSideArray, sortedRightSideArray);
        return mergedArray;
    }
    return array;
}
(0, helpers_1.consoleStart)();
(0, helpers_1.validateFxn)(merge([1, 2, 11], [1, 6, 9]), [1, 1, 2, 6, 9, 11]);
(0, helpers_1.validateFxn)(merge([1], [2, 5]), [1, 2, 5]);
(0, helpers_1.validateFxn)(merge([1, 5], [2]), [1, 2, 5]);
(0, helpers_1.validateFxn)(mergeSort([1, 2, 3, 4, 5, 6]), [1, 2, 3, 4, 5, 6]);
(0, helpers_1.validateFxn)(mergeSort([3, 1, 2, 9, 6, 1]), [1, 1, 2, 3, 6, 9]);
(0, helpers_1.consoleEnd)();
(0, helpers_1.consoleBuffer)();
