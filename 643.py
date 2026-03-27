class Solution:
    def findMaxAverage(self, nums: List[int], k: int) -> float:
        begin = 0
        window_state = 0
        result = float('-inf')

        for end in range(len(nums)):
            window_state += nums[end]
            if end - begin + 1 == k:
                result = max(result, window_state)
                window_state -= nums[begin]
                begin += 1

        return result / k