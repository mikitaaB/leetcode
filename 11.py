'''
Complexity:
Time: O(n)
Space: O(1)
'''
class Solution:
    def maxArea(self, height: List[int]) -> int:
        count = len(height)
        left = 0
        right = count - 1
        max_area = 0
        for i in range(count):
            while left < right:
                area = min(height[left], height[right]) * (right - left)
                max_area = max(max_area, area)
                if height[left] < height[right]:
                    left += 1
                else:
                    right -= 1
        return max_area
