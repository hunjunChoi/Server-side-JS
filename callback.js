const a = [3, 1, 2];
console.log(a);

// sort
const arr = [3, 1, 2];
arr.sort();

console.log(arr);

// reverse srot
// look at documentation
// return value of the function --> change order
const arr2 = [3, 1, 2];
function b(v1, v2) {
    // need retunr
    // 0 -, or + --> 3 values
    return v2 - v1;
}
arr2.sort(b);
console.log(arr2);

// CML --> arrow keys --> history

// ascending
const arr3 = [3, 1, 2];
function asc(v1, v2) {
    // need retunr
    // 0 -, or + --> 3 values
    return v1 - v2;
}
arr3.sort(asc);
console.log(arr3);

// 0
const arr4 = [3, 1, 2];
function zero(v1, v2) {
    // need retunr
    // 0 -, or + --> 3 values
    return 0;
}
arr4.sort(zero);
console.log(arr4);

// look inside
const ar = [3, 1, 2];
function b(v1, v2) {
    // need retunr
    // 0 -, or + --> 3 values
    console.log("v1", v1, "v2", v2);
    return v2 - v1;
}
ar.sort(b);
console.log(ar);

/* sort function ... other function b 
call back funtion 
    - define 
    - but you didn't call 
    - internally calls 'b' ...
    - a fucntion that is called --> so call back 
'b' --> called by function 'sort' 
put in logic --> ....
*/

// function w/o name --> ananoynous function
const arrr = [3, 1, 2];
/// provide annoymous fucntion as call back to 'sort'
arrr.sort(function (v1, v2) {
    return v2 - v1;
});
console.log("anonymous function " + arrr);

/* 
function sort(callback)
    {
        callback();
    } 
    */

sort(function () {
    console.log("Hello Callback");
});
