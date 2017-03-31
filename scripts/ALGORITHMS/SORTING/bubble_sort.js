///BUBBLE SORT
////UNSTABLE SORT ALGORITHM:PERFORM SWAPS
///COMPLEXITY: O(n2)

/*
 is a simple sorting algorithm that repeatedly steps through the list to be sorted,
 compares each pair of adjacent items and swaps them if they are in the wrong order
*/



let a = [12,3,2,10,1,5,4];
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

