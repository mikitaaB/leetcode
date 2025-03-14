'''
Complexity:
Space: O(1)
Time: O(n)
'''

class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        left = 0
        right = len(numbers) - 1
        while left < right:
            current_sum = numbers[left] + numbers[right]
            if numbers[left] + numbers[right] == target:
                return [left + 1, right + 1]
            if current_sum > target:
                right -= 1
            else:
                left += 1
        return []