

function bubbleSort(arr){
    for(let i = 0; i < arr.length; i++){
        for(let i = 0; i < arr.length; i++){
            if(arr[i] > arr[i + 1]){
                let tmp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = tmp;
            }
        }
    }
    return arr;
}

let arr = [10,9];
console.log(bubbleSort(arr));


