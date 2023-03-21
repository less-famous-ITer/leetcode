/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

(() => {

    class ListNode {
        val: number;
        next: ListNode | null;
        constructor(val?: number, next?: ListNode | null) {
            this.val = (val===undefined ? 0 : val)
            this.next = (next===undefined ? null : next)
        }
    }

    function middleNode(head: ListNode | null): ListNode | null {
        const nodes: Array<ListNode> = [];
        while(head !== null) {
            nodes.push(head);
            head = head.next;
        }
        const mid = Math.floor(nodes.length / 2);
        return nodes[mid];
    }

})()
