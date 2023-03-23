(() => {

    function largestPerimeter(nums: number[]): number {

        nums = nums.sort((x, y) => y - x)

        for(let i = 0; i < nums.length; i++) {
            if(nums[i+1] + nums[i+2] > nums[i]) {
                return nums[i+1] + nums[i+2] + nums[i]
            }
        }

        return 0

    }

})()
