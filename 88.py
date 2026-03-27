'''
Time: O(n+m)
Space: O(1)
'''
class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """
        result = []
        p1 = 0
        p2 = 0

        while p1 < m and p2 < n:
            if nums1[p1] < nums2[p2]:
                result.append(nums1[p1])
                p1 += 1
            else:
                result.append(nums2[p2])
                p2 += 1

        for k in range(p1, m):
            result.append(nums1[k])
        for k in range(p2, n):
            result.append(nums2[k])

        for i in range(len(result)):
            nums1[i] = result[i]

        return

'''
Time: O(n+m)
Space: O(1)
'''
class Solution2:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """
        p1 = m - 1
        p2 = n - 1
        result = m + n - 1

        while p1 >= 0 and p2 >= 0:
            if nums1[p1] > nums2[p2]:
                nums1[result] = nums1[p1]
                p1 -= 1
            else:
                nums1[result] = nums2[p2]
                p2 -= 1

            result -= 1

        while p2 >= 0:
            nums1[result] = nums2[p2]
            p2 -= 1
            result -= 1

        return