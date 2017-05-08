let countBits = function(n) {
    let r = 0;

    while(n > 0){
        if(n % 2 === 1){
            r++;
        }
        n = Math.floor(n/2);
    }
    return r;
};
