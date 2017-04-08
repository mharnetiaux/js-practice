function fib(n){
    let fibo = [0,1];

    if(n <= 2) return 1;

    for(let i = 2; i <= n; i++){
        fibo[i] = fibo[i-1] + fibo[i-2];
    }

    return fibo[n];
}

console.log(fib(12));

function fib2(n){
    if(n <= 2) return 1;
    else
        return fib2(n-1) + fib2(n-2);
}

console.log(fib2(12));