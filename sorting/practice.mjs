var tick = 0;
function binarySearch(arr = [], key, start, end,) {

    console.log(`tick: ${tick++}`);
    // Base Condition
    if (start > end) return -1;

    // Find the middle indekey
    let mid = Math.floor((start + end) / 2);

    // Compare mid with given key key
    if (arr[mid] === key) return mid;

    // If element at mid is greater than key,
    // search in the left half of mid
    if (arr[mid] > key) {
        return binarySearch(arr, key, start, mid - 1);
    }
    else {
        // If element at mid is smaller than key,
        // search in the right half of mid
        return binarySearch(arr, key, mid + 1, end);
    }



}




// ---------------
// GUIA ORDENAMIENTO 
// ---------------
// ejercicio 1 

export function binarySearchForIndex(arr) {
    var min = 0;
    var max = arr.length - 1;
    var half = 0;

    while (min <= max) {
        half = (min + max) / 2;
        if (arr[half] == half) {
            return half;
        } else if (half < arr[half]) {
            max = half - 1;
        }
        else min = half + 1;
    }
    return -1;
}


const d1 = [-5, 0, 1, 3, 4,]
let r = binarySearchForIndex(d1);
console.log({ r });