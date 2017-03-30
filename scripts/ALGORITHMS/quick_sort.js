////QUICK SORT
///STABLE SORT ALGORITHM: DIVIDE AND CONQUER
///COMPLEXITY:
///BEST-CASE RUNNING TIME: O(N LG N)
///AVERAGE-CASE RUNNING TIME: O(N LG N)
///WORST-CASE RUNNING TIME: O(N^2)

let a = [2,1,3,6,5];
function quicksort(arr){
    if (arr.length == 0)
    return [];

    let left = [],
    right = [],
    pivot = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return quicksort(left).concat(pivot, quicksort(right));
}

console.log("QuickSort: " + quicksort(a));