function swap(arr, i1, i2) {
    let i1_temp = arr[i1]
    arr[i1] = arr[i2]
    arr[i2] = i1_temp

    return arr
}

function sort(arr) {
    for (let i = 0; i < arr.length; i++) {
        min_index = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min_index]) { min_index = j}
        }
        if (min_index != i) { arr = swap(arr, i, min_index) }
    }

    return arr
}

console.log(sort([33,2,52,106,73,300,19,12,1,60]))