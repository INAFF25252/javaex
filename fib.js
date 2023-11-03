const user = prompt("How many times do you want it to run")
const arr=[0,1]
function fib (calc){
for(let x = 0; x < calc; x++){ //makes it so the functions ends after the amount of runs you input
   arr.push(arr[x] + arr[x+1]) 
}
console.log(arr)
}
fib(user);