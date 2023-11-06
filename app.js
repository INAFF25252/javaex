/* for(i = 0; i<=7; i++) {//parameters and arguments are inputs, ++ means every time through the loop, i increases by one. 
console.log(i);}
for(a=14; a>7; a--) {//parameters and arguments are inputs, ++ means every time through the loop, i increases by one. 
    console.log(a);}
for(d = 0; d<=7; d+=2) {//parameters and arguments are inputs, ++ means every time through the loop, i increases by one. 
    console.log(d);}
while(i<7){
    console.log(i);
        i++;
}
money = 100
while(money > 0){
    console.log(money);
        money--;
} */
/* 
const numbsArr=[1,2,3,4,5,6,7,8,9,10]
function linearSearch(nums, array){
    let found;
    for(let i = 0; i<array.length; i++){
        //evaluations if statements, are selection
        if(array[i]===nums){ //if 0 is the number we are looking for, 3 === means checking for type a well
        found = array[i];
        break; //stops the loop
        }else{console.log("looking")}

    }
    if(!found){  //! means no value assigned
        console.log("sorry no answer")
    }
console.log(found);
return found;
}
linearSearch(3, numbsArr); */

const musicTitles = ["A","B","C","D","E"]
const push = prompt("Which button you pressing")
const second = prompt("How many times fool")
function button(arr){
    let number = 1
    b = push
    n = second
    if(b==="1"){
        while(number<=n){
    arr.push(arr[0])
    arr.shift()
    console.log(arr)
    number++
    }
}
if(b==="2"){
    while(number<=n){
    arr.unshift(arr[4])
    arr.pop(arr[5])
console.log(arr)
number++
}
}
if(b==="3"){
    while(number<=n){
arr.reverse(arr[0], arr[1])
console.log(arr)
number++
}
}
if(b==="4"){
console.log(arr)
}
}
button(musicTitles);