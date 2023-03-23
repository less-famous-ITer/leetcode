(() => {

    function rob(nums: number[]): number {

        // dp[i][0]表示第i个不偷的收益
        // dp[i][1]表示第i个偷窃的收益

        const dp: number[][] = []

        dp[0] = [0, nums[0]]

        for(let i = 1; i < nums.length; i++) {

            const no = Math.max(dp[i-1][1], dp[i-1][0])
            const yes = dp[i-1][0] + nums[i]

            dp[i] = [no, yes]

        }
        console.log(dp)
        return Math.max(...dp[dp.length - 1])

    }

    const nums = [2, 1, 1, 2]

    console.log(rob(nums))

})()
