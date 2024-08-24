const mySym =Symbol("key1");

const JsUser={
   name:"Aman",
   age: 20,
   "full name":"Aman Srivastav",
   email:"amansrivastavvv@gmail.com",
   location: "Noida",
   isLoggedIn: false,
   lastloginDays:["Monday", "Saturday"],
   [mySym]: "mykey1"
}

// console.log(JsUser.name)
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])
console.log(JsUser)

// JsUser.age = 21
// console.log(JsUser["age"])
// Object.freeze(JsUser)
// JsUser.age=22

// JsUser.greeting = function(){
//    console.log("hello Js User"); 
// }


// JsUser.greetingTwo = function(){
//    console.log(`hello Js User, ${this.name}`); 
// }

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());


