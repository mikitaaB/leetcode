class Solution:
    def getConcatenation(self, nums: List[int]) -> List[int]:
        res = []
        numsLength = len(nums)
        for i in range(numsLength*2):
            if (i >= numsLength):
                res.append(nums[i % numsLength])
                continue
            res.append(nums[i])
        return res