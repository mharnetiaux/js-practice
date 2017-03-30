function reverseWords(str){
    let rev = [],
        wordLen = 0;
    for(let i = str.length-1; i>=0; i--){
        if(str[i]==' ' || i==0){
            rev.push(str.substr(i,wordLen+1));
            wordLen = 0;
        }
        else
            wordLen++;
    }
    return rev.join(' ');
}


console.log(reverseWords("matt"));