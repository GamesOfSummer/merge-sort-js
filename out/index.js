"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("./helpers");
function nestedArrayViaRecursion(array) {
    var total = 0;
    for (var i = 0; i < array.length; i++) {
        var currentValue = array[i];
        if (typeof currentValue !== 'number') {
            total += nestedArrayViaRecursion(currentValue);
        }
        else {
            total += currentValue;
        }
    }
    return total;
}
function factorialViaRecursion(index) {
    if (index < 1) {
        return index;
    }
    else {
        return index * factorialViaRecursion(index - 1);
    }
}
(0, helpers_1.consoleStart)();
(0, helpers_1.validateFxn)(nestedArrayViaRecursion([1, 2, 3]), 6);
(0, helpers_1.validateFxn)(nestedArrayViaRecursion([1, [2], 3]), 6);
(0, helpers_1.validateFxn)(nestedArrayViaRecursion([[[[[[[6]]]]]]]), 6);
(0, helpers_1.validateFxn)(factorialViaRecursion(1), 1);
(0, helpers_1.validateFxn)(factorialViaRecursion(6), 720);
(0, helpers_1.consoleEnd)();
(0, helpers_1.consoleBuffer)();
//# sourceMappingURL=index.js.map