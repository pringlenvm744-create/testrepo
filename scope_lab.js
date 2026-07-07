var globalVar = "Im a global variable";
let globalLet = "Im also global but scoped with let";
const globalConst = 'Im a global constant but scoped with const';

{
    var blockVar = "Im a block scoped var";
    let blockLet = "Im a block scoped let";
    const blockConst = "Im a block scoped const";
    
}

console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"

//Block Scope
//console.log(blockVar);
//console.log(blockLet);


function show(){
    var functionVar = "Im a block scoped var";
    let funtionLet = "ima block scoped let";
    const functionConst = "Im a block scoped Const";
}

show();

console.log(fucntionVar);
console.log(functionLet);
console.log(functionConst);