(() => {

    /**
     * Definition for a binary tree node.
     * class TreeNode {
     *     val: number
     *     left: TreeNode | null
     *     right: TreeNode | null
     *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
     *         this.val = (val===undefined ? 0 : val)
     *         this.left = (left===undefined ? null : left)
     *         this.right = (right===undefined ? null : right)
     *     }
     * }
     */

    class TreeNode {
        val: number
        left: TreeNode | null
        right: TreeNode | null
        constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
            this.val = (val===undefined ? 0 : val)
            this.left = (left===undefined ? null : left)
            this.right = (right===undefined ? null : right)
        }
    }

    function levelOrder(root: TreeNode | null): number[] {

        let nodes: Array<TreeNode> = []
        if(root) {
            nodes.push(root)
        }

        const result: number[] = []

        while(nodes.length !== 0) {
            const temp: Array<TreeNode> = []
            nodes.forEach(item => {
                if(item.left) {
                    temp.push(item.left)
                }
                if(item.right) {
                    temp.push(item.right)
                }
                result.push(item.val)
            })
            nodes = temp
        }

        return result

    }

})()
