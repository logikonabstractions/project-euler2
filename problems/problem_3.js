/*
The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143 ?
https://projecteuler.net
*/
export {largest_prime}

function largest_prime(number=600851475143) {
    return find_largest_factor(number)
}
function find_largest_factor(number) {
//    finds the largest factor of the number
//    returns the number if it is prime (has he then is his own largest factor)
    console.log('got number: ' + number)
    /*todo: add stop condition, e.g. if number <= 9 just return number*/
    if (number <=9) {
        return number           // end the recursion
    }

    /*todo:  build factors arrays for 0-100 since a number could have only other primes numbers as factors... */
    let factors2= []
    for (let i = 2; i <= 100 ; i++) {
        factors2.push(i)
    }
    let factors = [9,8,7,6,5,4,3,2];
    let largest = 0
    for (const factor of factors2) {
    //    for each factor, check if (number/factor) % 2 === 0
        let result = number/factor
        if ((result%1===0) && (result>largest)){                                             // 2-9 int is a factor
            largest = result
        }
    }
    /*todo: if NO largest has been found, then the original number was prime. just return that otherwise recursion with result*/
    if (largest===0) {
        return number
    } else {
        return find_largest_factor(largest)
    }
}

