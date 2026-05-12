class Solution:
    def simplifyPath(self, path: str) -> str:
        stack = []

        for p in path.split("/"):
            if p == "" or p == ".":
                continue
            if p == "..":
                if stack:
                    stack.append(p)
            else:
                stack.append(p)

        return "/" + "/".join(stack)
