(() => {

    function deleteAndEarn(nums: number[]): number {

        const map: Map<number, number> = new Map()

        nums.forEach(num => {

            if(map.has(num)) {
                map.set(num, (map.get(num) as number) + num)
            } else {
                map.set(num, num)
            }

        })

        console.log(map)

        nums = Array.from(new Set(nums))
        nums = nums.sort((x, y) => x - y)

        console.log(nums)

        // dp[i][0]表示选择nums[i]得到的点数
        // dp[i][1]表示不选择nums[i]得到的点数

        const dp: number[][] = []

        dp[0] = [(map.get(nums[0]) as number), 0]

        for(let i = 1; i < nums.length; i++) {

            let choose = 0

            if(nums[i] - nums[i-1] === 1) {
                choose = dp[i-1][1] + (map.get(nums[i]) as number)
            } else {
                const val1 =  dp[i-1][0] + (map.get(nums[i]) as number)
                const val2 =  dp[i-1][1] + (map.get(nums[i]) as number)
                choose = Math.max(val1, val2)
            }

            const unchoose = Math.max(dp[i-1][0], dp[i-1][1])

            dp[i] = [choose, unchoose]

        }

        dp.forEach((item, idx) => {

            console.log(`选择第${idx}个元素的点数值为${item[0]}，不选择第${idx}个元素的点数值为${item[1]}`)

        })

        return Math.max(...dp[dp.length - 1])

    };

    const nums = [1,6,3,3,8,4,8,10,1,3]

    deleteAndEarn(nums)

})()
