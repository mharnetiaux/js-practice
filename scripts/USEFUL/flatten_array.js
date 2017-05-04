
function flatten(arr) {
    let array = [];

    while(arr.length) {

        let value = arr.shift();

        if(Array.isArray(value)) {
            // this line preserve the order
            arr = value.concat(arr);
        } else {
            array.push(value);
        }
    }
    return array;
}

console.log(flatten([1,[2,[3,4,5,6]],[4]]));