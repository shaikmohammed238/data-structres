/*              ### Array Practice Problems ### 
An array is a systematic arrangement of the same type of data.
But in java script Array is a variable which contains multiple values may
be of same type or different type since by default in java script
everything is treated as a string. An array is zero-based i.e. indexing start with 0.
*/

/* 1. Write a program in the following steps
a. Generates 10 Random 3 Digit number. 
b. Store this random numbers into a array. 
c. Then find the 2nd largest and the 2nd smallest element without sorting the array. */
{//a
    
    for(let j=0;j<10;j++){
        threedigitnumber=Math.floor(Math.random()*900)+100;
        console.log("numbers:"+threedigitnumber);
    }
//b
let num1=Math.floor(Math.random()*900)+100;
let num2=Math.floor(Math.random()*900)+100;
let num3=Math.floor(Math.random()*900)+100;
let num4=Math.floor(Math.random()*900)+100;
let num5=Math.floor(Math.random()*900)+100;
let num6=Math.floor(Math.random()*900)+100;
let num7=Math.floor(Math.random()*900)+100;
let num8=Math.floor(Math.random()*900)+100;
let num9=Math.floor(Math.random()*900)+100;
let num10=Math.floor(Math.random()*900)+100;
let numarrey=[num1,num2,num3,num4,num5,num6,num7,num8,num9,num10];
//c
let firstlargestnumber=999 ;let firstsmallestnumber=100;
if (firstlargestnumber>numarrey)
    console.log("scondlargestnumber:"+threedigitnumber(numarrey<999));

else
    console.log("secondsmallest:"+threedigitnumber(numarrey>99));
}