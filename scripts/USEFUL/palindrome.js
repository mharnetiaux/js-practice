function isPalindrome(str){
    let i,
        len = str.length;

    for(i =0; i < len; i++){
        if (str[i]!== str[len -1 -i])
            return false;
    }
    return true;
}

console.log(isPalindrome("mm"));