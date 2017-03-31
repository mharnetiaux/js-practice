// array to sort


let array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

// gaps
let gaps = [701, 301, 132, 57, 23, 10, 4, 1];

function shellsort(array) {
    let gapLength = gaps.length,
        arrayLength = array.length,
        gap,
        g,
        i,
        j,
        temp;

    for(g = 0; g < gapLength; g++) {

        gap = gaps[g];

        for(i = gap; i < arrayLength; i++) {

            temp = array[i];

            for(j = i; j >= gap && array[j - gap] > temp; j -= gap) {
                array[j] = array[j - gap];
            }

            array[j] = temp;
        }
    }
    return array;
}

console.log(shellsort(array)); // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]