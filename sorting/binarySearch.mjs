/** 
 * BinarySearch for Arrays
 * @param {*} arr 
 * @param {*} key 
 */
export function binarySearch(arr, key) {
    var min = 0;
    var max = arr.length - 1;
    var half = 0;
    var result = -1;

    while (min <= max) {
        half = Math.floor((min + max) / 2);
        if (arr[half] == key) {
            result = half;
            break;
        }
        if (arr[half] < key) {
            min = half + 1;
        }
        else {
            max = half - 1;
        }
    }
    return result;
}

