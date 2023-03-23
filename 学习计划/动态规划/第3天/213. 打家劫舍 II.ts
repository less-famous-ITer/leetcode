(() => {

    function rob(nums: number[]): number {

        // dp[i][0]表示不偷第i个房间的收益
        // dp[i][1]表示偷窃第i个房间的收益

        // 不偷窃最后一间
        // 动态规划从第1~nums-1间

        if(nums.length == 1) {
            return nums[0]
        }

        const dp1: number[][] = []

        dp1[0] = [0, nums[0]]

        for(let i = 1; i < nums.length - 1; i++) {

            const no = Math.max(dp1[i-1][0], dp1[i-1][1])
            const yes = dp1[i-1][0] + nums[i]

            dp1[i] = [no, yes]

        }

        // 不偷第1间
        // 动态规划从第2~nums间

        const dp2: number[][] = []

        dp2[0] = [0, 0]
        dp2[1] = [0, nums[1]]

        for(let i = 2; i < nums.length; i++) {

            const no = Math.max(dp2[i-1][0], dp2[i-1][1])
            const yes = dp2[i-1][0] + nums[i]

            dp2[i] = [no, yes]

        }

        return Math.max(...dp1[dp1.length - 1], ...dp2[dp2.length - 1])

    }

})()
