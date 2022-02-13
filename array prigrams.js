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
{var array= new Array();
    let Number,firstLargest=0,secondlargest=0,firstSmallest=1000,secondSmallest=1000;
        for(let j=0;j<10;j++){
            Number=Math.floor(Math.random()*900)+100;
            array.push(Number);
            console.log(array);
        }
        for (let j = 0; j < array.length; j++) {
            //checking array element is greater than first largest
            if (array[j] > firstLargest) {
                //assign first largest to second largest and array element to first largest
                secondlargest = firstLargest;
                firstLargest = array[j];
            }
            //to check if second largest lies b/w first largest and second largest
            else if (array[j] > secondlargest && array[j] != firstLargest)
                secondlargest = array[j];
        }
        for (let j = 0; j < array.length; j++) {
            //checking array element is lesser than first largest
            if (array[j] < firstSmallest) {
                //assign first smallest to second smallest and array element to first smallest
                secondSmallest = firstSmallest;
                firstSmallest = array[j];
            }
            //to check if second smallest lies b/w first smallest and second smallest
            else if (array[j] < secondSmallest && array[j] != firstSmallest)
                secondSmallest = array[j];
        }
        console.log(secondSmallest != 1000 ? `Second smallest = ${secondSmallest}` : `There is no second smallest`);
        console.log(secondlargest != 0 ? `Second largest = ${secondlargest}` : `There is no second largest`);

/*Extend the above program to sort the array and then find the 2nd largest

and the 2nd smallest element. */

console.log("Sorted Array are... ");
console.log(array.sort());
console.log("Second largest after sorting : " + array.slice(-2, -1));
console.log("Second smallest after sorting : " + array[1]);
}
//Extend the Prime Factorization Program to store all the Prime Factors of a number n into an array and finally display the output.
let number= Math.floor(Math.random()*10);
function Primenumber (number){
    let arrays=[];
    for(let i=2;i<number/2;i++){
        if(number%i==0){
            let count=0;
            for (let q = 2; q <= Math.sqrt(i); q++) {
                if (i % q == 0) count++;
            }
            if (count == 0 && i > 1) arrays.push(i);
        }
    }
    return arrays;
}
console.log("Prime Factors of " + number + " are : ");
console.log(Primenumber(number));
//4. Sum of three integer adds to Zero 
{let arr = [1,-1,2,0,-3];
arr.sort((a,b)=>a-b);
let found=false;
for (let s=0; s<arr.length-1; s++) 
    { 
        let l=s+1;
        let r = arr.length - 1; 
        let x = arr[s]; 
        while (s+1 < r) 
        { 
            if (x + arr[l] + arr[r] == 0) 
            { 
                console.log(x);
                console.log(arr[l]);
                console.log(arr[r]);
                console.log("-----");
                l++; 
                r--; 
                found = true; 
            } 
   
            else if (x + arr[l] + arr[r] < 0) 
                l++; 
  

            else
                r--; 
        } 
    } 
  
    if (found == false) 
        console.log("No such triplets") }
 
  //5. Find digit that are repeated twice like 11,22.
{  console.log("Numbers with same digits are : ")
for(let o = 1; o<100;o++)
{
    let ones = o%10;
    let tens = (o - ones)/10;
    if(ones == tens)
    console.log(o);
}
}
