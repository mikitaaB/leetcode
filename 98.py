# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        stack = [(root, float('-inf'), float('inf'))]
        while stack:
            node, min_r, max_r = stack.pop()
            if not node:
                continue
            if node.val <= min_r or node.val >= max_r:
                return False

            stack.append((node.left, min_r, node.val))
            stack.append((node.right, node.val, max_r))

        return True
