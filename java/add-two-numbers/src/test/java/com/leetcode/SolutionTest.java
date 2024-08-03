package com.leetcode;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

public class SolutionTest {
    private static final Solution s = new Solution();

    @Test
    public void test1() {
        ListNode ln1 = new ListNode(2, new ListNode(4, new ListNode(3)));
        ListNode ln2 = new ListNode(5, new ListNode(6, new ListNode(4)));


        ListNode ln = s.addTwoNumbers(ln1, ln2);
//        while (ln != null) {
//            System.out.println(ln.val);
//            ln = ln.next;
//        }
        Assertions.assertEquals(7, ln.val);
        ln = ln.next;
        Assertions.assertEquals(0, ln.val);
        ln = ln.next;
        Assertions.assertEquals(8, ln.val);
    }
}
