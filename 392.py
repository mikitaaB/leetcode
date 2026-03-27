class Solution:
    def isSubsequence(self, sub: str, s: str) -> bool:
        p1 = 0
        p2 = 0
        while p1 < len(sub) and p2 < len(s):
            if sub[p1] == s[p2]:
                p1 += 1
            p2 += 1

        return p1 == len(sub)
