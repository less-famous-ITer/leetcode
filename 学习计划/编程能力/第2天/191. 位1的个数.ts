(() => {

    function hammingWeight(n: number): number {
        let count = 0;
        let i = 0;
        while(i++ <= 31) {
            if((n & 1) === 1) {
                count++;
            }
            n >>= 1;
        }
        return count;
    }

})()
