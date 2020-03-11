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

function splitArr(arr, pivot_index) {
    pivot_value = arr[pivot_index]
    smaller_pivot_arr = []
    larger_pivot_arr = []
    for (val of arr) {
        if (val < pivot_value) { smaller_pivot_arr.push(val) }
        if (val > pivot_value) { larger_pivot_arr.push(val) }
    }
    
    final_arr = []
    for (val of smaller_pivot_arr) {
        final_arr.push(val)
    }
    final_arr.push(pivot_value)
    for (val of larger_pivot_arr) {
        final_arr.push(val)
    }
    return final_arr
}

function quickSort(arr, pivot_index) {
    split_arr = splitArr(arr, pivot_index)
    console.log(split_arr)
}

console.log(quickSort([33,2,52,106,73,300,19,12,1,60], 0))