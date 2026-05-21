// var name="Aman Chaurasiya";
// var age=21;
// var isEmployed=true;
// console.log(name);
// console.log(age);
// console.log(isEmployed);
// var age="15";
// console.log(age);
// let name="Aman Chaurasiya";
// let age="21";
// let isEmployed="true";
// console.log(name);
// console.log(age);
// console.log(isEmployed);
// let age="15";
// console.log(age)
// if(true){
//     var age=30;
// }
//   console.log(age);
// if(true){
//     let age=30;
// }
//   console.log(age);
// const PI=3.14;
// console.log(PI);
// const PI=3.1459;
// console.log(PI);
// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof isEmployed);
// let name="Aman chaurasiya";
// let age1=20;
// console.log("My name is "+ name+" and my age is "+ age1);
// console.log(`My name is ${name} and my age is ${age1}`);

// let data=null;
// console.log(data);
// console.log(typeof data);

// let result;
// console.log(result);
// console.log(typeof result);


// let bigIntvalue = 12343546453475593488388382843745789344563554n;
// console.log(typeof bigIntvalue);

// let sym1=symbol("sym");
// let sym2=symbol("sym");
// console.log(sym1);
// console.log(sym2);
// console.log(sym1===sym2);

// let student={
//     name:"Aman",
//     age:20,
//     isStudent: false
// };


// console.log(student);
// console.log(student.name);
// console.log(student["age"]);
// let numbers=[1,2,3,4,5];
// console.log(numbers);
 
// let random=[1,"apple",true,[11,2,3],{name:"Aman",age: 25}];
// console.log(random);
// console.log(typeofrandom);
// // let arrnew=[1,2,3];
// arrnew.push(4);
// console.log(arrnew);

// let arrnew=[1,2,3,4,5];
// arrnew.pop();
// console.log(arrnew);

// let arr=[1,2,3,4,5];
// arr.shift();
// console.log(arr);

// let arr=[1,2,3,4,5];
// arr.unshift(0);
// console.log(arr);

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// arr.forEach(function(element){
//     console.log(element);
// });

// let squareArr =arr.map(function(element){
//     return element*element;
// });
// console.log(squareArr);


// let newarray = [1,2,3,4,5];
// let squaredArray = newarray.map((num)=>num*5);
// console.log(squaredArray);

// let evenArr =arr.filter(function(element){
//     return element % 2 ===0;
// });
 // console.log(evenArr);


//  let evenNumbers = [1,2,3,4,5];
// let filteredEvenNumbers = evenNumbers.
// filter(num=>num % 2 === 0);
// console.log(filteredEvenNumbers);



// let arr=[1,2,3,4,5];
// let sum =arr.reduce(function(accumulator,currentValue){
//     return accumulator + currentValue;
// },0);
// console.log(sum);

// let arr=[1,2,3,4,5];
// let sum =arr.reduce((accumulator,currentValue)=> accumulator + currentValue,0);
// console.log(sum); 

// function greet(){
//     console.log("Hello, Aman!");
// }
// greet();

// function greet(name){
//     console.log("Hello," + name + "!");
// }
// greet("Aman");

// function add(a,b){
//  return a+b;
// }
// let result =add(5,10);
// console.log (result);

// function add(a,b){
//  return a+b;
// }
// console.log(add(2,3));
// const multiplly=function(a,b){                                    error
//     return(a*b);
// }
// console.log(multiply(3,5));
// let sayhi=()=> console.log("hi!");
// sayhi();



// const mul=(a,b)=>(a*b);
// console.log(mul(2,3));



// let greet2 =function(name){
//     console.log("Hello," + name + "!");
// };
// greet2("BOb");
//tamplet  literals
// let name3 = "Charlie";
// let greeting =`hello,${name3}!`;
// console.log(greeting);


// let students =[
//    {name  : "Aman",marks: 85},
//    {name:"Dipu",marks:90},
//    {name:"vlkhefoi",marks: 32}
// ];
// let marks = students.map(student=>student.marks);
// console.log(marks);
// let names = students.map(student=>student.name);
// console.log(names);
// let topstudent =students.filter(student=>student.marks>80);
// console.log(topstudent);


// mixed object
let mixedobject = {
   name: "Aman",
   age: 25,
   hobbies:["reading","travaling","coding"],
   address:{
      streat : "123 main st",
      city:"india",
      country:"Usa"
   },

   greet : function(){
      console.log("Hello!");
      // arrow function in object
      let  arrowGreet=()=>{
         console.log("Hi");
      }
   }
};
console.log(mixedobject.name);
console.log(mixedobject.age);
console.log(mixedobject.hobbies);
console.log(mixedobject.name.hobbies[0]);
console.log(mixedobject.name.hobbies[1]);

console.log(mixedobject.name.hobbies[2]);
console.log(mixedobject.address);
console.log(mixedobject.address.streat);
console.log(mixedobject.address.city);
console.log(mixedobject.address.country);
mixedobject.address.greet();

// object inside array
let people =[
   {name:"Aman",age:25,},
   {name:"bob",age:15,},
   {name:"naman",age:35,},
];
console.log(people[0]);
console.log(people[1].name);
console.log(people[2].age);

// array inside object
let company = {
   name: "Tech crop",
   employee:["Alice","BOb","Charlie"]
};
console.log(company.name);
console.log(company.employee);
console.log(company.employee[0]);
console.log(company.employee[1]);
console.log(company.employee[2]);

   




