'''
Complexity:
Space: O(n)
Time: O(n)
'''
class Solution:
    def reverseWords(self, s: str) -> str:
        i = 0
        words = []
        while i < len(s):
            while i < len(s) and s[i] == " ":
                i += 1
                continue
            if i == len(s):
                break
            word = []
            while i < len(s) and s[i] != " ":
                word.append(s[i])
                i += 1
            words.append(''.join(word))

        result = []
        for i in range(len(words) - 1, -1, -1):
            result.append(words[i])
        return ' '.join(result)


'''
Complexity:
Space: O(1)
Time: O(n)
'''
class Solution_1:
    def reverseWords(self, s: str) -> str:
        str = list(s)
        str_len = len(str)
        self.reverseArray(str, 0, str_len-1)

        left = 0
        right = 0
        i = 0
        while i < str_len:
            while i < str_len and str[i] == ' ':
                i += 1
                continue
            if i == str_len:
                break
            if right > 0:
                str[right] = ' '
                right += 1
            left = right
            while i < str_len and str[i] != ' ':
                str[right] = str[i]
                right += 1
                i += 1
            self.reverseArray(str, left, right - 1)
        return ''.join(str[:right])

    def reverseArray(self, str, start, end):
        while start < end:
            temp = str[start]
            str[start] = str[end]
            str[end] = temp
            start += 1
            end -= 1