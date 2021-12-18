import { MaxHeap } from "../heap/maxHeap.mjs";
import { binarySearch } from "../sorting/binarySearch.mjs";
import { quicksort } from "../sorting/quickSort.mjs";

function ejercicioDecrementarMenores(params) {
    function decrementMinors(arr, n) {
        const sorted = quicksort(arr);
        const index = binarySearch(sorted, n);
        console.log({ arr, index })
        for (let i = index; i > 0; i--) {
            sorted[i]--;
        }

        return sorted;
    }



    var arr = [2, 44, 34, 81, 90, 14, 71, 8];

    const decremented = decrementMinors(arr, 44);

    console.log({
        arr,
        decremented,
        sorted: quicksort(arr)
    })

}


function testHeapEjer4() {
    var arr = [1, 6, 2, 3, 7, 3, 4, 6, 9];
    var heap = new MaxHeap();
    arr.forEach(e => heap.insert(e))
    var acumulator = {
        leftGreaters: 0,
        rigthGreaters: 0
    }
    for (let i = 1; i < heap.size() - 1; i++) {
        if (getLeft(i) > getRigth(i)){
            acumulator.leftGreaters++
        }
        else if(getLef())
    }


    console.log(heap)
}
testHeapEjer4()