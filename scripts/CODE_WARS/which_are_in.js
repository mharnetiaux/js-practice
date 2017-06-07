let array2 = ["lively", "alive", "harp", "sharp", "armstrong"];
let array1 = ["live", "strong", "arp"];

function inArray(array1, array2){
    "use strict";
    let tmp = [],
        result = [];
    for(let i = 0; i < array2.length; i++){
        for(let j = 0; j < array1.length; j++){
            if(array2[i].indexOf(array1[j]) !== -1){
                tmp.push(array1[j]);
                tmp.sort();
            }
        }
    }

    array_sort(tmp,result);

    return result;
}

function array_sort(tmp,result){
    "use strict";
    for(let i = 0; i <= tmp.length; i++){
        if(tmp[i] !== tmp[i + 1]){
            result.push(tmp[i]);
        }
    }
}

console.log(inArray(array1,array2));