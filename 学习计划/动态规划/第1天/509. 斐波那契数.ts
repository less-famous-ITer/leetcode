(() => {

    function fib(n: number): number {
        const dp: number[] = [0, 1];
        for(let i = 2; i <= n; i++) {
            dp[i] = dp[i - 1] + dp[i - 2];
        }
        return dp[n];
    }

})()
