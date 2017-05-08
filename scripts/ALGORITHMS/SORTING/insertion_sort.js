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
let arr = [12,3,2,10,1,5,4];

function insertion_sort(arr){
    "use strict";
    let value_to_insert,
        hole_position,
        i,
        MAX = arr.length;


    for(i = 1; i < MAX; i++){

        console.log("ITERATION " + i);
        //select value to be inserted
        value_to_insert = arr[i];
        //select hole position where number is to be inserted
        hole_position = i;
        //check if previous no. is larger than value to be inserted
        while(hole_position > 0 && arr[hole_position-1] > value_to_insert){
            arr[hole_position] = arr[hole_position-1];
            hole_position--;
            console.log("item moved: " + arr[hole_position]);
        }
        if(hole_position !== i){
            console.log("item inserted: " + value_to_insert + " at position: " + hole_position);
            //insert the number at hole position
            arr[hole_position] = value_to_insert;
        }
    }
    console.log(arr);
}

insertion_sort(arr);