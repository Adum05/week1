for(let i = 1; i <= 100; i++) {
    if(i % 2===0) {
        console.log(`even ${i}`);
    } else {
        console.log(`odd ${i}`);
    }

    
}

let _ = require(`lodash`);
let myCamelCase= `las palmas`

console.log(_.camelCase(myCamelCase))

let mycap= 'las palmas'
console.log(_.capitalize(mycap));

let mydivide1= 48
let mydivide2= 4
console.log(_.divide(mydivide1, mydivide2));

let nums= [2,4,6,8,9]
let result= _.find(nums, function (n) {
    if (n<6) {
        return true;
    }
});
console.log(result);

let mymultiply1= 32
let mymultiply2= 56 
console.log(_.multiply(mymultiply1, mymultiply2));

let mymax= [1,56,1485,63162461,24]
console.log(_.max(mymax));

