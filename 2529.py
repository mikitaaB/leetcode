'''
Complexity:
Space: O(1)
Time: O(log N)
'''

class Solution:
    def maximumCount(self, nums: List[int]) -> int:
        indexZero = self.binarySearch(nums, 0)
        indexOne = self.binarySearch(nums, 1)
        return max(indexZero, len(nums) - indexOne)

    def binarySearch(self, nums, target) -> int:
        left = 0
        right = len(nums)
        while left < right:
            mid = (left + right) // 2
            if nums[mid] < target:
                left = mid + 1
            else:
                right = mid
        return left
