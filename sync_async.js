const fs = require("fs");

// called first
// then readFileSync --> read sync-async.txt --> send syncData
// Sync Way
// readFileSync = 10sec process -> wait for 10 second --> & send data
console.log(1);

// Synch
const syncData = fs.readFileSync("sync-async.txt", { encoding: "utf8" });
// utf8 --> file stored in utf8 --> so read in utf 8
// syncData === sync-async.txt

console.log("Sync" + syncData);

// Async
console.log(2);

// readFile options --> cb on 3rd
fs.readFile("sync-async.txt", { encoding: "utf8" }, function (err, data) {
    console.log(3);
    console.log(data);

    /* sync async completes the task together 
    but differ in detail 
     */
});

console.log(4);

/* readFile read sync-async file -->... send by cb --> readfile calls the cb ... 
error = null 
success = data variable takes sync-async txt 
in console.log --> 2nd param of function --> can call  */

/* order 
2 --> 4 --> 3 
after 2 --> readFile read in backgrond =  toss  to  other 
4 execute 
after file reading is complete --> anonymous function send to readFile --> readFile call the ... -> > calls 3
 */

/* sync:
1 --> ... after readFileSync complete --> data 

Async:
. .. -> after readFile complete --> calls cb --> signaling done 


Nod Js reacts quickly --> strength
pros & cons --> tradeoff 

Node --> single threaded work 
so Web application --> reading file inside --> ex) takes 10 min --> no access for 10 min 

using NOde JS --> understand Async */
