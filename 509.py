'''
Recursion

Complexity:
Space: O(n)
Time: O(2^n)
'''
class Solution:
    def fib(self, n: int) -> int:
        if n == 0:
            return 0
        elif n == 1 or n == 2:
            return 1
        else:
            return self.fib(n-1) + self.fib(n-2)

