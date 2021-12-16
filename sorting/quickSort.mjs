// Create an array to sort


// Basic implementation (pivot is the first element of the array)
export function quicksort(array) {
    if (array.length == 0) return [];

    var left = [], right = [], pivot = array[0];

    for (var i = 1; i < array.length; i++) {
        if(array[i] < pivot)
            left.push(array[i])
        else
            right.push(array[i]);
    }

    return quicksort(left).concat(pivot, quicksort(right));
}

