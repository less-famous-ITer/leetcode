(() => {

    function countOdds(low: number, high: number): number {
        let first: number;
        let count = 0;
        // if(low % 2 === 1) {
        //     first = low
        // } else {
        //     first = low + 1
        // }
        first = low + (low + 1) % 2;
        while(first <= high) {
            count ++;
            first += 2;
        }
        return count;
    }

})()
