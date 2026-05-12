# First solution
'''
Complexity:
Space: O(n)
Time: O(n)
'''
class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        map = {
            '}': '{',
            ']': '[',
            ')': '('
        }
        for symbol in s:
            if symbol in map.values():
                stack.append(symbol)
            elif symbol in map.keys():
                if stack == [] or map[symbol] != stack.pop():
                    return False
            else:
                return False
        return stack == []


# Second solution (enhanced 1st solution)
class Solution:
    def isValid(self, s: str) -> bool:
        pair = {
            "(": ")",
            "{": "}",
            "[": "]",
        }
        stack = []
        for c in s:
            if c in pair:
                stack.append(c)
            else:
                if not stack:
                    return False

                prev = stack.pop()
                if c != pair[prev]:
                    return False
        return len(stack) == 0
