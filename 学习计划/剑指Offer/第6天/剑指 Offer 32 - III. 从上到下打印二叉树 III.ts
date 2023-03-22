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

    function levelOrder(root: TreeNode | null): number[][] {

        let nodes: TreeNode[] = []
        let result: number[][] = []

        if(root) {
            nodes.push(root)
        }

        let even = false

        while(nodes.length !== 0) {

            let layer_nodes: TreeNode[] = []
            let layer_values: number[] = []

            nodes.forEach(item => {
                if(item.left) {
                    layer_nodes.push(item.left)
                }
                if(item.right) {
                    layer_nodes.push(item.right)
                }
                layer_values.push(item.val)
            })

            if(even) {
                result.push(layer_values.reverse())
                even = false
            } else {
                result.push(layer_values)
                even = true
            }

            nodes = layer_nodes

        }

        return result

    }

})()
