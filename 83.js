/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = (head) => {
	let currentNode = head;

	while (currentNode?.next) {
		if (currentNode.next.val === currentNode.val) {
			currentNode.next = currentNode.next.next;
		} else {
			currentNode = currentNode.next;
		}
	}
	return head;
};

console.log(deleteDuplicates([1, 1, 2])); // [1, 2]
console.log(deleteDuplicates([1, 1, 2, 3, 3])); // [1, 2, 3]
