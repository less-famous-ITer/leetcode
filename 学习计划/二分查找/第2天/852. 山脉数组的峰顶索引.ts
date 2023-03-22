(() => {

    function peakIndexInMountainArray(arr: number[]): number {
        let left = 0;
        let right = arr.length;
        while(left < right) {
            const mid = left + Math.floor((right - left) / 2);
            if(arr[mid] < arr[mid + 1]) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        return left;
    }

})()
