/*
let js =`amazing `;

console.log("hello");
let firstname ='Matilda';
console.log(firstname);

let name_arabic ='ahmed';
let $name ='hamad';
// no need to start with Upper case only on OOP
let Pname='almed';



let PI =3.1415;
let job1= 'IT ';
let job2 ='programmer';
let job3='MultiTask';

let number1=5;
console.log(typeof(number1));
console.log(typeof(null));

*/

let age =30;
const fix_value= 1995;
//will make error {not able to re assignment }
// fix_value=14;

// document.getElementById('mh1').innerHTML='hello';
// document.getElementById('p1').
//x= ageJonas*2+ ('hello ')+agesarah;
const now =2037;
const ageJonas =now- 1991;
const agesarah =now- 1918;

let x1,x2;

x2=4;
x1=x2;
console.log(x1);

console.log('--------------------');
// x1 =+10;
x1 += 10;
console.log('--------------------');

console.log(x1);
let if_conconsole;
if_conconsole= console.log(x1>15);
if (if_conconsole) {
    console.log("wow")
}
else{
    console.log(`bro it's wrong `)
}
document.getElementById('p1').append(` +x1 = ${x1}`);
 const massMark=95;
 const heightMark=1.88;
 const massjohn = 85;
 const heightjohn = 1.76;

 var BMIMark = massMark/heightMark **2;
 var BMIjohn = massjohn/heightjohn **2;
 if (BMIjohn>BMIMark) {
    console.log(
    'john in best'
    )
 }
 else{
    console.log("mark is best")
 }
//  console.log(BMIMark,BMIjohn)

//  var v= console.log(`mark ${BMIMark},john ${BMIjohn}`);
 var v= BMIjohn;

//  toString(v);
document.getElementById('p1').append('\n');

document.getElementById('p1').append("this number for John's BMI",v);

const new_age =19;
if (age =>18) {
    console.log("Sarah can starting driving License");
}



const inputYear ='1991';
TinputYear=Number(inputYear);
console.log(typeof(inputYear),typeof(TinputYear));
//will make issue if not convert it into number
console.log(New_num=inputYear+5);

console.log(New_num=TinputYear+5);
// to convert into String

STinputYear=String(TinputYear);
console.log(typeof(STinputYear)+` that one after convert it`);
// only work with - * / i mean JS convert into number
console.log('23'-'10'+3);
let n =1 +'1';
// string will be 
console.log(typeof(n));
n =n-1;
// Number will be 
console.log(typeof(n));


// boolean
let num_to_Bool=0;
console.log(typeof(num_to_Bool)); //will get number type

console.log(Boolean(num_to_Bool)); //will get flase type
let height; //number didn't assgin any value
if (height) { //here will equal if height ture =1
    console.log('height is defined')

}
else{
    console.log('height is undefined')
}







const new_age1= 18;
if(new_age1===18) console.log("wow "); //===will compere number to number ==will look for type of value 


const array_test=[
    ['ali',15],
    ['ahmed',23]
]

console.log(array_test[0][1]);
console.log(array_test[0][0]);
