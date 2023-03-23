(() => {

    function intersect(nums1: number[], nums2: number[]): number[] {

        nums1 = nums1.sort((x, y) => x - y)
        nums2 = nums2.sort((x, y) => x - y)

        let i = 0
        let j = 0

        const result: number[] = []

        while(i < nums1.length && j < nums2.length) {

            if(nums1[i] === nums2[j]) {
                result.push(nums1[i])
                i++
                j++
            } else if(nums1[i] < nums2[j]) {
                i++
            } else {
                j++
            }

        }

        return result

    }

})()


