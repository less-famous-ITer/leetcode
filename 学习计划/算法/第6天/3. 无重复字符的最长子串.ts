(() => {

    function lengthOfLongestSubstring(s: string): number {

        const dp: number[] = []

        if(s !== '') {
            dp[0] = 1
        } else {
            dp[0] = 0
        }

        for(let i = 1; i < s.length; i++) {

            const cur = s[i]

            let j = i-1

            while(j >= i - dp[i-1] && s[j] !== cur) {
                j--
            }

            dp[i] = i-j

        }

        return Math.max(...dp)

    };

})()
