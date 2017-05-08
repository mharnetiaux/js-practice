//Step 1 − Set MIN to location 0
//Step 2 − Search the minimum element in the list
//Step 3 − Swap with value at location MIN
//Step 4 − Increment MIN to point to next element
//Step 5 − Repeat until list is sorted
let arr = [12,3,2,10,1,5,4];

console.log("Input array " + "[" + arr + "]");

function selection_sort(){
    "use strict";
    let index_min,
        i,
        j,
        MAX = arr.length;

    //loop through all numbers
    for(i=0; i < MAX;i++){
        console.log("Iteration: " + (i+1));

        //set current element at minimum
        index_min = i;
        console.log("Current minimum " + index_min);
        
        //check the element to be minimum
        for(j = i + 1; j < MAX; j++){
             if(arr[j] < arr[index_min]){
                 index_min = j;
             }
        }

        if(index_min !== i){
            console.log("Items swapped: " + "[" + arr[i] + "," + arr[index_min] + "]");
        }
    }
}

selection_sort(arr);
