import { buildHeap } from "./heap/heap.mjs";
import { binarySearch } from "./sorting/binarySearch.mjs";



function testBuildHeap() {
    var data = [20, 1, 2, 3, 10, 8, 7, 8, 4];
    data = buildHeap({ data });
    console.log({ data });
}
testBuildHeap()



// ---------------
// Test FNs 
// ---------------

function testBinarySearch() {
    const data = [0, 1, 2, 3,];
    var r = binarySearch(data, 2);

    console.log({ r });
}


