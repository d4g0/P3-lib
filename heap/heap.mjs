function parent(i = 0) {
    return Math.floor(i - 1 / 2);
}
function left(i = 0) {
    return (2 * i) + 1;
}

function rigth(i = 0) {
    return (2 * i) + 2;
}
function swap(arr = [], i = 0, j = 0) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

export function maxHeapify(a = [], i) {
    var l = left(i);
    var r = rigth(i);
    var largest = null;
    if (l <= a.length && a[l] > a[i]) {
        largest = l;
    } else {
        largest = i
    }
    if (r <= a.length && a[r] > a[largest]) {
        largest = r;
    }
    if (largest != i) {
        swap(a, i, largest);
        maxHeapify(a, largest);
    }
}

export function buildHeap(data = []) {
    for (let i = Math.floor(data.length / 2); i >= 0; i--) {
        maxHeapify(data, i)
    }
    return data;
}

export function heapSort(data = []) {
    buildHeap(data);

    for (let i = data.length - 1; i > 1; i--) {
        // console.group('heapsort.[1]for' + ` i:${i}`)
        swap(data, 0, i);
        maxHeapify(data, 0);
        // console.groupEnd()
    }
}