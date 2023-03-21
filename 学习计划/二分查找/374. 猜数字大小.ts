/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

(() => {

    function guess(num: number): number {
        return 1;
    }

    function guessNumber(n: number): number {
        let left = 1;
        let right = n;
        while(left<right) {
            const mid =  Math.floor((right + left) / 2);
            if(guess(mid) === 1) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        return left;
    }

})()
