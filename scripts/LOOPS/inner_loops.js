for(let i = 0; i < 5; i++) {
    console.log("outer loop at state:" + i + "\n");
    for(let p = 0; p < 2; p++){
        console.log("inner loop at state: " + p);
        if(p==1){//just adding a newline for readability purpose
            console.log("\n");
        }
    }
}