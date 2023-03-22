(() => {

    function subtractProductAndSum(n: number): number {
        const b: number[] = [];
        while(n !== 0) {
            b.push(n % 10);
            n = Math.floor(n / 10);
        }
        let mul = b.reduce((x, y) => x * y);
        let sum = b.reduce((x, y) => x + y);
        return mul - sum;
    }

})()
