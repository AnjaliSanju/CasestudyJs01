/*

Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, check if the current number is odd or even, and display the message to the screen as odd or even.

*/

for (let i = 1; i < 16; i++) {
    
    if(i%2==0){
        console.log(i+" is an even number")
    }else{
        console.log(i+" is an odd number")

    }
}