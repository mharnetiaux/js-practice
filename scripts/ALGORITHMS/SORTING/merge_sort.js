
////MERGE SORT
///STABLE SORT ALGORITHM: DIVIDE AND CONQUER
///COMPLEXITY:
///BEST-CASE RUNNING TIME: O(N LG N)
///AVERAGE-CASE RUNNING TIME: O(N LG N)
///WORST-CASE RUNNING TIME: O(N LG N)

/*
 Merge sort is a divide and conquer algorithm. Conceptually, a Merge sort works as follows:
 1) Divide the unsorted list into n sublists, each containing 1 element (a list of 1 element is considered sorted),
 2) Repeatedly merge sublists to produce new sorted sublists until there is only 1 sublist remaining.
 This will be the sorted list.
 */

let a = [1,2,4,6,5,2];

function mergeSort(arr) {
    if (arr.length < 2)
    return arr;

    let middle = parseInt(arr.length / 2);
    let left   = arr.slice(0, middle);
    let right  = arr.slice(middle, arr.length);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    while (left.length)
    result.push(left.shift());


    while (right.length)
    result.push(right.shift());

    return result;
}

console.log("MergeSort: " + mergeSort(a));