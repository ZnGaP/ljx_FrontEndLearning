/*
 * @lc app=leetcode id=551 lang=javascript
 *
 * [551] Student Attendance Record I
 *
 * https://leetcode.com/problems/student-attendance-record-i/description/
 *
 * algorithms
 * Easy (45.17%)
 * Total Accepted:    47.2K
 * Total Submissions: 104.6K
 * Testcase Example:  '"PPALLP"'
 *
 * You are given a string representing an attendance record for a student. The
 * record only contains the following three characters:
 * 
 * 
 * 
 * 'A' : Absent. 
 * 'L' : Late.
 * ⁠'P' : Present. 
 * 
 * 
 * 
 * 
 * A student could be rewarded if his attendance record doesn't contain more
 * than one 'A' (absent) or more than two continuous 'L' (late).    
 * 
 * You need to return whether the student could be rewarded according to his
 * attendance record.
 * 
 * Example 1:
 * 
 * Input: "PPALLP"
 * Output: True
 * 
 * 
 * 
 * Example 2:
 * 
 * Input: "PPALLL"
 * Output: False
 * 
 * 
 * 
 * 
 * 
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let countA = 2;
    for(let i = 0;i < s.length;i++) {
        if(s[i] === 'A') {
            countA--;
        }
        if(!countA) return false;
    }
    if(s.indexOf('LLL') >= 0) return false;
    return true;
};

