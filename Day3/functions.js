function sayMyName(){
    console.log("A")
    console.log("M")
    console.log("A")
    console.log("N")
}

// sayMyName()

function addTwoNumbers (number1,number2){
//    console.log( number1 + number2);
// let result =number1 +number2
// return result

return number1+ number2
}

const result = addTwoNumbers(3,4)
// console.log("result:", result);






function loginUserMessage (username){
    return `${username} just logged in`
}
console.log(loginUserMessage("hello aman"))






const user={
    username: "aman",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username:"aman srivastav",
    price: 250
})