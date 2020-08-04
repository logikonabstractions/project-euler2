/*

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 OR 5 below 1000. ATTENTION: this is an EXCLUSIVE OR, e.g. multiple of 3 OR or 5. Multiples of both are to be excluded to get the right answer.
*/
export {compute_sum_ab_below}
function compute_sum_ab_below(a=3, b=5, below=1000) {
    let ans = compute_sum_or(a, b, below)
    return ans
}

function compute_sum_or(a, b, max) {
    let sum = 0;
    for (let i = 0; i < max; i++) {
        if ((i%a===0) || (i%b===0)) {
            sum += i;
        }

    }
    return sum
}
