///BUBBLE SORT
////UNSTABLE SORT ALGORITHM:PERFORM SWAPS
///COMPLEXITY: O(n2)

/*
 is a simple sorting algorithm that repeatedly steps through the list to be sorted,
 compares each pair of adjacent items and swaps them if they are in the wrong order
*/

let arr = [12,3,2,10,1,5,4];
////FIRST INDEX
/*function bubbleSort(arr){
    let tmp,
        length = arr.length;

    for(let i = 0; i < length; i++){

        for(let j = 0; j < length; j++){
            if(arr[j] > arr[j+1]){
                tmp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = tmp
            }

        }
    }
    return arr;
}

console.log(bubbleSort(array));*/

////LAST INDEX
/*function bubbleSortLastIndex(arr) {
    let length = arr.length;
    for (let i = (arr - 1); i >= 0; i--) {
        //Number of passes
        for (let j = (length - i); j > 0; j--) {
            //Compare the adjacent positions
            if (arr[j] < arr[j - 1]) {
                //Swap the numbers
                let tmp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = tmp;
            }
        }
    }
    return arr;
}console.log(bubbleSortLastIndex(a));*/

////DO WHILE LOOP
/*function bubbleSortWhile(a)
{
    let swapped;
    do {
        swapped = false;
        for (let i=0; i < a.length; i++) {
            if (a[i] > a[i+1]) {
                let temp = a[i];
                a[i] = a[i+1];
                a[i+1] = temp;
                swapped = true;
            }
        }
    }
    while (swapped){
        return a;
    }
}

console.log(bubbleSortWhile(a));*/

///WITH TWO FOR LOOPS
function bubble_sort(arr){
    let i,
        j;
    for(i = 0; i < arr.length-1; i++){
        console.log("Iteration " + (i+1));
        for(j = 0; j < arr.length-1; j++){
            console.log("Items compared: " + "[" + arr[j] + "," + arr[j+1] + "]");
            if(arr[j] > arr[j + 1]){
                let tmp;
                tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
                console.log("Swapped: " + "[" + arr[j] + "," + arr[j+1] + "]");
            }else{
                console.log("Not swapped");
            }
        }
    }
    console.log(arr);
}

bubble_sort(arr);

///OlD C WAY
/*function bubble_sort(arr){
    "use strict";
    let tmp,
        i,
        j,
        swapped = false,
        MAX = arr.length;

    ///loop through all numbers
    for(i = 0; i < MAX-1; i++){
        swapped = false;

        for(j = 0; j < MAX-1-i; j++){
            console.log("Iteration " + (i+1));

            console.log("Items compared: " + "[" + arr[j] + "," + arr[j+1] + "]");

            //check if the next number is lesser than the current no.
            //swap the numbers.
            //(Bubble up the highest number)

            if(arr[j] > arr[j+1]){
                tmp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = tmp;

                swapped = true;
                console.log("Swapped: " + "[" + arr[j] + "," + arr[j+1] + "]");
            }else{
                console.log("Not swapped");
            }
        }
        //if no number was swapped that means
        //array is sorted now, break the loop.
        if(!swapped){
            break;
        }
    }
}*/

 //bubble_sort(arr);