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

const merge2 = (left, right) => {
    const results = [];

    // go until one list runs outs
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            // shift removes the first element in an array and returns it
            // it's like .pop() for the front
            results.push(left.shift());
        } else {
            results.push(right.shift());
        }
    }

    // either left or right will be empty so you can safely concat both
    return results.concat(left, right);
};

function mergeSort(array: number[]) {
    if (array.length <= 1) {
        return array;
    } else {
        const half_length = Math.floor(array.length / 2);
        const leftSideArray = array.slice(0, half_length);
        const rightSideArray = array.slice(half_length);

        const sortedLeftSideArray = mergeSort(leftSideArray);
        const sortedRightSideArray = mergeSort(rightSideArray);

        return merge2(sortedLeftSideArray, sortedRightSideArray);
    }

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
