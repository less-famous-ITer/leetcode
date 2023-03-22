(() => {

    function bestTeamScore(scores: number[], ages: number[]): number {

        const conflict: number[][] = []
        for(let i = 0; i < scores.length; i++) {
            let j = i - 1
            const temp: number[] = []
            while(j >= 0) {
                if((scores[j] > scores[i] && ages[j] < ages[i]) || (scores[j] < scores[i] && ages[j] > ages[i])) {
                    temp.push(j)
                }
                j--
            }
            conflict.push(temp)
        }

        console.log(conflict)
        // return 0

        const dp: number[] = []

        dp[0] = scores[0]

        for(let i = 1; i < scores.length; i++) {
            if(conflict[i].length === 0) {
                dp[i] = dp[i - 1] + scores[i]
            } else {

                let dp1 = dp[i - 1]
                console.log(`dp1: ${dp1}`)
                conflict[i].forEach(item => {
                    dp1 -= scores[item]
                    scores[item] = 0
                })
                console.log(`dp1: ${dp1}`)
                dp1 += scores[i]
                console.log(i, dp1, dp[i-1])
                dp[i] = Math.max(dp1, dp[i-1])

            }
        }
        console.log(dp)
        return dp[scores.length - 1]

    }

    const scores = [6,5,1,7,6,5,5,4,10,4]
    const ages = [3,2,5,3,2,1,4,4,5,1]

    console.log(bestTeamScore(scores, ages))

})()
