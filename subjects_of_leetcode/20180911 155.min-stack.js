/*
 * [155] Min Stack
 *
 * https://leetcode.com/problems/min-stack/description/
 *
 * algorithms
 * Easy (32.97%)
 * Total Accepted:    216.2K
 * Total Submissions: 655.7K
 * Testcase Example:  '["MinStack","push","push","push","getMin","pop","top","getMin"]\n[[],[-2],[0],[-3],[],[],[],[]]'
 *
 * 
 * Design a stack that supports push, pop, top, and retrieving the minimum
 * element in constant time.
 * 
 * 
 * push(x) -- Push element x onto stack.
 * 
 * 
 * pop() -- Removes the element on top of the stack.
 * 
 * 
 * top() -- Get the top element.
 * 
 * 
 * getMin() -- Retrieve the minimum element in the stack.
 * 
 * 
 * 
 * 
 * Example:
 * 
 * MinStack minStack = new MinStack();
 * minStack.push(-2);
 * minStack.push(0);
 * minStack.push(-3);
 * minStack.getMin();   --> Returns -3.
 * minStack.pop();
 * minStack.top();      --> Returns 0.
 * minStack.getMin();   --> Returns -2.
 * 
 * 
 */
/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.datastore = [];
    this.peek = 0;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.datastore[this.peek++] = x;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    return this.datastore[--this.peek];
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.datastore[this.peek-1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    let min = this.datastore[this.peek - 1];
    for(let i = 1;i < this.peek;i++){
        if(min > this.datastore[this.peek - i - 1]){
            min = this.datastore[this.peek - i - 1];
        }
    }
    return min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStwack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
