(() => {

    function nearestValidPoint(x: number, y: number, points: number[][]): number {

        let min_len = Infinity
        let min_idx = -1

        points.forEach((point, idx) => {

            if(point[0] !== x && point[1] !== y) {
                return
            }

            const cur_len = Math.abs(point[0] - x) + Math.abs(point[1] - y)

            if(cur_len < min_len) {
                min_len = cur_len
                min_idx = idx
            }

        })

        return min_idx

    };

    nearestValidPoint(3, 4, [[3, 4]])

})()
