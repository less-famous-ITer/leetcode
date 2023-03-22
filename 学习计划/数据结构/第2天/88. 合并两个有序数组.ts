(() => {

    /**
     Do not return anything, modify nums1 in-place instead.
     */
    /**
     Do not return anything, modify nums1 in-place instead.
     */
    function merge(nums1: number[], m: number, nums2: number[], n: number): void {

        function move(nums: number[], i: number) {
            let j = nums.length - 1;
            while(j > i) {
                nums[j] = nums[j - 1];
                j--;
            }
        }

        let i = 0;
        let j = 0;
        let len = m;

        while(i < len && j < n) {
            if(nums2[j] < nums1[i]) {
                move(nums1, i);
                nums1[i] = nums2[j];
                j++;
                i++;
                len++;
            } else  {
                i++;
            }
        }

        let p = i;
        let q = j;
        while(p < m+n && q < n) {
            nums1[p] = nums2[q];
            p++;
            q++;
        }
    }

})()
