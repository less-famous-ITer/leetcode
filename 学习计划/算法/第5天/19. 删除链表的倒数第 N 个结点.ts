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

    function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
        // 得到结点总个数
        let len = 0;
        let copy = head;
        while(copy !== null) {
            len++;
            copy = copy.next;
        }
        // 添加哑结点
        let dummy = new ListNode(0, head);
        let cur = dummy;
        for(let i = 1; i < len - n + 1; i++) {
            cur = (cur.next as ListNode);
        }
        cur.next = (cur.next as ListNode).next;
        return dummy.next;
    }

})()

