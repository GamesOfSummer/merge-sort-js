import {
    consoleBuffer,
    consoleEnd,
    consoleStart,
    validateFxn,
} from './helpers';

function merge(array: number[], array2: number[]): number[] {
    let biggestArrayLength = array.length;

    if (array.length < array2.length) {
        biggestArrayLength = array2.length;
    }

    let total = 0;
    let returnedArray: number[] = [];

    for (let i = 0; i < biggestArrayLength; i++) {
        if (array.length > 0 && array2.length > 0) {
            const currentArrayValue = array.shift();
            const currentArray2Value = array2.shift();

            if (currentArrayValue > currentArray2Value) {
                returnedArray.push(currentArray2Value);
                returnedArray.push(currentArrayValue);
            } else {
                returnedArray.push(currentArrayValue);
                returnedArray.push(currentArray2Value);
            }
        } else if (array.length === 1) {
            const currentArrayValue = array.shift();
            returnedArray.push(currentArrayValue);
        } else if (array2.length === 1) {
            const currentArray2Value = array2.shift();
            returnedArray.push(currentArray2Value);
        }
    }
    return returnedArray;
}

function mergeSort(array: number[]) {
    return array;
}

consoleStart();

validateFxn(merge([1, 2, 11], [1, 6, 9]), [1, 1, 2, 6, 9, 11]);
validateFxn(merge([1], [2, 5]), [1, 2, 5]);
validateFxn(merge([1, 5], [2]), [1, 2, 5]);

validateFxn(mergeSort([1, 2, 3, 4, 5, 6]), [1, 2, 3, 4, 5, 6]);
validateFxn(mergeSort([3, 1, 2, 9, 6, 1]), [1, 1, 2, 3, 6, 9]);

consoleEnd();
consoleBuffer();

export {};
