class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        S = set()
        for n in nums:
            if n not in S:
                S.add(n)
            else:
                return True
        return False