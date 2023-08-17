// const sum = (a:number, b:number):number =>{
//     return a+b;
// }

// console.log(sum(5,10));

// Type Annotation

// let numIs:number = 10;
// let nameIs:string = "deepak";

// console.log(numIs.toString())

// let sum = numIs+10;
// console.log(sum)

// const nullValue:number = NaN;
// console.log("valus is",nullValue)


// let sentence:string = "hey!, my name is Deepak";
// let sentenceLength:number = sentence.length;
// console.log(sentenceLength)

// let text:string = "this is my book";
// let uperCasetext:string = text.toUpperCase();
// // console.log(uperCasetext)

// let lowerCasetext:string = uperCasetext.toLowerCase();
// console.log(lowerCasetext)


// // check number is divisible by 4&8 or not

// //fun. defination
// function isDivisibleBy4and8(a:number):boolean{
//    return a%4===0 && a%8 === 0
  
// }

// // fun. calling
// console.log(isDivisibleBy4and8(48))


// Any type

// let favNum:any = 5;
// favNum = "rao";
// favNum = true;


// //Unknown Type
// let favNum = 55;
// favNum = true  // this is type checking error

// favNum.map(()=>{

// })    // this is type safety means this property is attatched to that(favNum) variable or not


// // Unknown type example

// let num1:unknown;
// num1 = 2;
// num1 = "deepak";
// num1 = true;

// if(typeof num1 === "number"){
//     console.log(num1 + 5)
// }
// else if(typeof num1 === "boolean"){
//     console.log(num1)
// }


// function understanding

//fun defination
// let greeting = (name:string, id:number):string =>{
//     return `wlcm ${name} your id is: ${id}`
// }

// // fun calling
// const myGreet = greeting("deepak",1);
// console.log("myGreet is:-",myGreet)


//Plindrome or not
// const isPalindrome = (palin:string) =>{
// let myPalin = palin.split("").reverse().join("")   
// return myPalin === palin

// }

// console.log(
//     isPalindrome("12321")
// )


// // type inference or type Annotation

// let myname:string = 'aman';  // Type Annotation :- means we explicitly define the type of the variable

//  myname = "deepak"; //Type Inference:- means typescript compiler define your variable type automatically


