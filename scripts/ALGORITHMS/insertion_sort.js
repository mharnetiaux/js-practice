////INSERTION SORT
///STABLE SORT ALGORITHM: DIVIDE AND CONQUER
///COMPLEXITY:
///BEST-CASE RUNNING TIME: O(N)
///AVERAGE-CASE RUNNING TIME: O(N2)
///WORST-CASE RUNNING TIME: O(N^2)

/*
 Where a bubble sort relies on a number of small swaps, insertion sort relies on-
 inserting a single element in the right for a given iteration.
 Every iteration through the collection leaves a greater segment sorted.
*/

let items = [5,2,6,1,3,11,9];

function insertionSort(values) {

    let length = values.length;

    for(let i = 1; i < length; i++) {
        let temp = values[i];

        let j = i - 1;

        for(; j >= 0 && values[j] > temp; --j) {
            values[j+1] = values[j];
        }

        values[j+1] = temp;
    }

    return values;
}


console.log(insertionSort(items));
