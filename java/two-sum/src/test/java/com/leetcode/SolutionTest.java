package com.leetcode;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

public class SolutionTest {
    private static final Solution s = new Solution();

    @Test
    public void test1() {
        int[] r = s.twoSum(new int[]{2, 7, 11, 15}, 9);
        Assertions.assertArrayEquals(new int[]{0, 1}, r);
    }

    @Test
    public void test2() {
        int[] r = s.twoSum(new int[]{3, 2, 4}, 6);
        Assertions.assertArrayEquals(new int[]{1, 2}, r);
    }

    @Test
    public void test3() {
        int[] r = s.twoSum(new int[]{3, 3}, 6);
        Assertions.assertArrayEquals(new int[]{0, 1}, r);
    }

    @Test
    public void test4() {
        int[] r = s.twoSum(new int[]{3, 2, 3}, 6);
        Assertions.assertArrayEquals(new int[]{0, 2}, r);
    }
}
