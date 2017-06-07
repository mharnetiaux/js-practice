function break_chocolate(r,c){
    if(r <= 1 && c <= 1){
        return 0;
    }else{
        return r * c - 1;
    }
}
console.log(break_chocolate(-1,1));