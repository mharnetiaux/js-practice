/**
 * Created by mattdharnetiaux on 3/29/17.
 */
function isPrime(n){
    let divisor = 2;

    while(n > divisor){
        if(n % divisor === 0){
            return false
        }else{
            divisor++;
        }
    }
    return true;
}

console.log(isPrime(3));