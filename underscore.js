const _ = require("underscore");

let arr = [3, 6, 9, 12, 14];

console.log(`w.o underscore ${arr[0]}`);
console.log(`underscore ${_.first(arr)}`);

// last element
// length --> find number
// index begins with 0
// -1  --> get last number
console.log(arr[arr.length - 1]);

// this is better
console.log("underscore last" + _.last(arr));

/* 
Lesson 
importing package 
npm insall <software name>
-g --> independent software 
no -g --> tool only in current project direcotry  
moduule included as dependency category in node_module
--save --> reset project foler to npm ... --> USE npm init
d

assemble others software and patch ways ..
npm is middle mad --> the center of Node.JS 
 */
