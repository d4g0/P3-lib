import { buildHeap, heapSort } from "./heap/heap.mjs";
import { binarySearch } from "./sorting/binarySearch.mjs";
import { quicksort } from "./sorting/quickSort.mjs";



function testBuildHeap() {
    var data = [20, 1, 2, 3, 10, 8, 7, 8, 4];
    data = buildHeap(data);

    console.log({ data });
}
// testBuildHeap()

function testHeapSort() {
    var data = [1, 2, 3, 4, 12, 34, 56, 92, 12];
    heapSort(data);

    console.group('(heapSort)')
    console.log(data)
    console.groupEnd()
}

// testHeapSort()

function testQuickSort() {
    var array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 12, 8, 11];
    console.group('(quicksort)');
    console.log(quicksort(array.slice()));
    console.groupEnd()
}
// testQuickSort();



// ---------------
// Test FNs 
// ---------------

function testBinarySearch() {
    const data = [0, 1, 2, 3,];
    var r = binarySearch(data, 2);

    console.log({ r });
}


