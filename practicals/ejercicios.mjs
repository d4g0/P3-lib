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
