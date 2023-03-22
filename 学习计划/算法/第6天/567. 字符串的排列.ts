(() => {

    function checkInclusion(s1: string, s2: string): boolean {

        if(s1.length > s2.length) {
            return false
        }

        const map1: Map<string, number> = new Map()
        for(let i = 0; i < s1.length; i++) {
            if(map1.has(s1[i])) {
                map1.set(s1[i], (map1.get(s1[i]) as number) + 1)
            } else {
                map1.set(s1[i], 1)
            }
        }

        function equal(str1: string, str2: string): boolean {

            console.log(str1, str2)

            // const s1 = str1.split('').sort((x, y) => x.charCodeAt(0) - y.charCodeAt(0)).join('')
            // const s2 = str2.split('').sort((x, y) => x.charCodeAt(0) - y.charCodeAt(0)).join('')

            const map2: Map<string, number> = new Map()
            for(let i = 0; i < str2.length; i++) {
                if(map2.has(str2[i])) {
                    map2.set(str2[i], (map2.get(str2[i]) as number) + 1)
                } else {
                    map2.set(str2[i], 1)
                }
            }

            console.log(map1, map2)

            if(Array.from(map1.keys()).length !== Array.from(map2.keys()).length) {
                return false
            }

            for(let key of Array.from(map1.keys())) {
                if(map1.get(key) !== map2.get(key)) {
                    return false
                }
            }

            return true

        }

        if(equal(s1, s2.slice(0, s1.length))) {
            return true
        }



        for(let i = s1.length; i < s2.length; i++) {



            const str = s2.slice(i - s1.length + 1, i + 1)

            if(equal(s1, str)) {
                return true
            }

        }

        return false

    }

    console.log(checkInclusion("ab", "eidboaooo"))

})()
