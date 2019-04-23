/*
 * @lc app=leetcode id=401 lang=javascript
 *
 * [401] Binary Watch
 *
 * https://leetcode.com/problems/binary-watch/description/
 *
 * algorithms
 * Easy (44.86%)
 * Total Accepted:    56.8K
 * Total Submissions: 126.6K
 * Testcase Example:  '0'
 *
 * A binary watch has 4 LEDs on the top which represent the hours (0-11), and
 * the 6 LEDs on the bottom represent the minutes (0-59).
 * Each LED represents a zero or one, with the least significant bit on the
 * right.
 * 
 * For example, the above binary watch reads "3:25".
 * 
 * Given a non-negative integer n which represents the number of LEDs that are
 * currently on, return all possible times the watch could represent.
 * 
 * Example:
 * Input: n = 1Return: ["1:00", "2:00", "4:00", "8:00", "0:01", "0:02", "0:04",
 * "0:08", "0:16", "0:32"]
 * 
 * 
 * Note:
 * 
 * The order of output does not matter.
 * The hour must not contain a leading zero, for example "01:00" is not valid,
 * it should be "1:00".
 * The minute must be consist of two digits and may contain a leading zero, for
 * example "10:2" is not valid, it should be "10:02".
 * 
 * 
 */
/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function(num) {
    function light(number) {
        let lightNum = 0;
        while(number) {
            if(number & 1) {
                lightNum++;
            }
            number >>= 1;
        }
        return lightNum;
    }
    function writing(number) {
        return number < 10 ? '0' + number : number.toString();
    }
    let times = [];
    for(count = 0;count < 720;count++) {
        let hour = Math.floor(count / 60);
        let minute = count % 60;
        let totalLight = light(hour) + light(minute);
        if(totalLight === num) {
            times.push(hour + ':' + writing(minute));
        }
    }
    return times;
};