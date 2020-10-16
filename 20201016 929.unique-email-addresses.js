/*
 * @lc app=leetcode id=929 lang=javascript
 *
 * [929] Unique Email Addresses
 */

// @lc code=start
/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    let emailSet = new Set();
    for(let i = 0; i < emails.length; i++) {
        let email = fun1(emails[i]);
        if(email) {
            emailSet.add(email);
        }
    }
    console.log(emailSet);
    return emailSet.size;

    function fun1(e) {
        let email = '';
        let eAry = e.split('@');
        if(eAry.length > 2) return null;

        let localName = eAry[0].split('+')[0], // 除去”+“后的内容
            domainName = eAry[1];
        localName = localName.split('.').join('');
        email = localName + '@' + domainName;
        return email
    }
};
// @lc code=end

