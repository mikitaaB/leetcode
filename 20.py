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