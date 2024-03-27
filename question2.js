/*

Write a JavaScript program to find the most frequent item of an array

*/

const itemList=[2,3,2,5,3,3,3,2];
let maxCount=1;
let freqItem=0;


for (let i = 0; i < itemList.length; i++) {
    let element = itemList[i];
    let flag=0;

    for (const j of itemList) {

        if(j===element){
            flag++;
            if(maxCount<flag){
                maxCount=flag;
                freqItem=j;
            } 
        }

   }
    
}
console.log("Most frequent item in the array is "+freqItem);