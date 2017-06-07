function high_low(numbers){
    "use strict";
    let arr = numbers.split(" ").map((str) => {
        return parseInt(str);
    });
    let max = Math.max(...arr),
        min = Math.min(...arr);

   return max + " " + min;
}

console.log(high_low("1 2 -13 4 5"));