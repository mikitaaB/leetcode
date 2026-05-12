# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def hasPathSum(self, root: Optional[TreeNode], targetSum: int) -> bool:
        stack = [(root, 0)]
        while stack:
            node, current_sum = stack.pop()
            if not node:
                continue

            current_sum += node.val
            if not node.left and not node.right and current_sum == targetSum:
                return True

            stack.append((node.left, current_sum))
            stack.append((node.right, current_sum))
        return False
