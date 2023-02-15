import {
    consoleBuffer,
    consoleEnd,
    consoleStart,
    validateFxn,
} from './helpers';

function merge(array: number[], array2: number[]): number[] {
    let total = 0;

    for (let i = 0; i < array.length; i++) {
        const currentValue = array[i];

        if (typeof currentValue !== 'number') {
            //total += merge(currentValue);
        } else {
            total += currentValue;
        }
    }
    return array;
}

function mergeSort(array: number[]) {
    return array;
}

consoleStart();

validateFxn(merge([1, 2, 3], [1, 6, 9]), [1, 1, 2, 3, 6, 9]);

validateFxn(mergeSort([3, 1, 2, 9, 6, 1]), [1, 1, 2, 3, 6, 9]);

consoleEnd();
consoleBuffer();

export {};
