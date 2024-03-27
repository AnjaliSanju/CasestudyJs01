/*
Assignment1

Write a JavaScript function to get an array and to read the first element of an array. Check whether it is prime or not. 

*/

const numList = [4,2,3,4,5,6,7,8,9,0];

let fNum= numList[0];
let flag=0;

if (fNum==1|| fNum==0) {
    console.log("First number in the list is not a prime number.");   
}
else{

    for (let i = 2; i < fNum; i++) {
    
        if( fNum%i ==0 )
        {
            console.log("First number in the list is not a prime number");
            flag =1;
            break;
        }
    }
        if(flag==0)
        {
            console.log("First number in the list is a prime number");
            return 0;
        }       
        
    

}


