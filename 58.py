class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        s = s.strip()
        if len(s) == 0:
            return 0
        if " " not in s:
            return len(s)
        strLen = len(s)
        i = strLen - 1
        while s[i] != " " and i > 0:
            i -= 1
        return strLen - i - 1