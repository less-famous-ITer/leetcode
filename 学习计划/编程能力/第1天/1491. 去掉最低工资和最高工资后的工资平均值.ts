(() => {

    function average(salary: number[]): number {
        let max = salary[0];
        let min = salary[0];
        let sum = 0;
        salary.forEach(item => {
            if(item > max) {
                max = item;
            } else if(item < min) {
                min = item;
            }
            sum += item;
        })
        return (sum - max - min) / (salary.length - 2);
    }

})()
