/*

Write a JavaScript program to find the sum of squares of the elements of an array.

*/

let numList=[2,4,6,8,10];
let sum=0;
for(i=0;i<numList.length;i++){
    sum=sum+ (numList[i]*numList[i]);
}

console.log("Sum of the squares of the elemnts in the array is "+sum);


