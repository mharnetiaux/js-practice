///SELECTION SORT
////UNSTABLE SORT ALGORITHM:PERFORM SWAPS
///COMPLEXITY:
///BEST-CASE RUNNING TIME: O(N^2)
///AVERAGE-CASE RUNNING TIME: O(N^2)
///WORST-CASE RUNNING TIME: O(N^2)

let a = [3,2,4,1];

function selectSort(arr){
    let min,
    tmp,
    length = arr.length;

    for(let i = 0; i < length; i++){
        min = i;

        for(let j = i + 1; j < length; j++){
            if(arr[j] < arr[min]){
                min = j;
            }
        }
        tmp = arr[i];
        arr[i] = arr[min];
        arr[min] = tmp
    }
    return arr;
}

console.log(selectSort(a));

