// let-->Local or block level scope (Preffered) 
// var-->global level (Not preffered)
// const-->constant

// Examples:--

var a=23;
let b=10;
const c="08";
{
    let b=9;
    var a=78;
    //changing c generates error
    console.log(a);
    console.log(b);
    console.log(c);
}

console.log(a);//value changed by inner block
console.log(b);//no effect by inner block
console.log(c);