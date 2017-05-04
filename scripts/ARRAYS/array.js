let arr = [1,3,5,7,8];

///ARRAYS INSERTION
insert_item = (arr,item,index) => {
    "use strict";
    let tmp = arr.length;

    while(tmp >= index){
        arr[tmp+1] = arr[tmp];
        tmp = tmp - 1;
    }
    arr[index] = item;
    console.log(arr);
};
insert_item(arr,10,3);


///ARRAYS DELETION
delete_item = (arr,item) => {
    "use strict";
    let length = arr.length,
        tmp;

    tmp = item;

    while(tmp < length){
        arr[tmp-1] = arr[tmp];
        tmp = tmp + 1;
    }

    console.log(arr);
};
///delete_item(arr,1);