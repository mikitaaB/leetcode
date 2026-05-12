# 1st solution (Recursive)

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        if not root:
            return 0
        l = self.maxDepth(root.left)
        r = self.maxDepth(root.right)

        return max(l, r) + 1
        # return max(self.maxDepth(root.left), self.maxDepth(root.right)) + 1


# 2nd solution (Iterative)
class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        stack = [(root, 1)]
        result = 0
        while stack:
            node, depth = stack.pop()
            if not node:
                continue
            result = max(result, depth)
            stack.append((node.left, depth + 1))
            stack.append((node.right, depth + 1))

        return result
