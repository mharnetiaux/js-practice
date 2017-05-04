let arr = [
    [1,1,1,0,0,0],
    [0,1,0,0,0,0],
    [1,1,1,0,0,0],
    [0,0,2,4,4,0],
    [0,0,0,2,0,0],
    [0,0,1,2,4,0],
];
let arr2 = [
    [0,6,-7,1,6,3],
    [-8,2,8,3,-2,7],
    [-3,3,-6,-3,0,-6],
    [5,0,5,-1,-5,2],
    [6,2,8,1,3,0],
    [8,5,0,4,-7,4],
];
let arr3 = [
    [0,-4,-6,0,-7,-6],
    [-1,-2,-6,-8,-3,-1],
    [-8,-4,-2,-8,-8,-6],
    [-3,-1,-2,-5,-7,-4],
    [-3,-5,-3,-6,-6,-6],
    [-3,-6,0,-8,-6,7],
];

function hour_glass(arr){
    "use strict";
    let count = -64,
        length = arr.length/2;

    for( let i = 0 ; i <= length; i ++) {
        for( let j = 0; j <= length; j ++)
        {
            let total = 0,
                top = arr[i][j] + arr[i][j+1] + arr[i][j+2],
                middle = arr[i+1][j+1],
                bottom = arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];

            total = top + middle + bottom;

            if(total > count )
            {
                count = total;
            }
        }
    }
    console.log(count);
}

hour_glass(arr3);