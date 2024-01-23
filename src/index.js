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
