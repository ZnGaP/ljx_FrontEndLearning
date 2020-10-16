/*
 * @lc app=leetcode id=925 lang=javascript
 *
 * [925] Long Pressed Name
 */

// @lc code=start
/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
    let nameAry = [],
        typedAry = [];
    
    count(name, nameAry);
    count(typed, typedAry);

    if(nameAry.length != typedAry.length) return false;
    
    for(let i = 0; i < nameAry.length; i++) {
        kv1 = nameAry[i];
        kv2 = typedAry[i];
        if((kv1.key != kv2.key) || (kv1.val > kv2.val)) return false;
    }

    return true;
    

    function key_val(key, val) {
        this.key = key;
        this.val = val;
    }

    function count(str, ary) {
        let count = 1;
        for(let i = 0; i < str.length - 1; i++) {
            if(str[i] == str[i+1]) {
                count++;
                continue;
            } else {
                let kv = new key_val(str[i], count);
                ary.push(kv);
                count = 1;
            }
        }
        ary.push(new key_val(str[str.length - 1], count));
    }
};
// @lc code=end

