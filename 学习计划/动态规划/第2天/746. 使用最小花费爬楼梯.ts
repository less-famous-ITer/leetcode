(() => {

    function minCostClimbingStairs(cost: number[]): number {
        const dp: number[] = []
        dp[0] = 0
        // 爬上第一个台阶的最小花费
        dp[1] = 0
        // 爬上第二个台阶的最小花费
        dp[2] = Math.min(cost[1], cost[0])
        // 爬上第i个台阶的最小花费 = MIN{爬上第i-1个台阶的最小花费+从第i-1个台阶向上爬的花费, 爬上第i-2个台阶的最小花费+从第i-2个台阶向上爬的花费}
        for(let i = 3; i <= cost.length; i++) {
            dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
        }
        return dp[cost.length];
    }

})()
