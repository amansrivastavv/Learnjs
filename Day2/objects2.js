// const tinderUser = new Object()
const tinderUser ={}
tinderUser.id ="1234abc"
tinderUser.name = "aman"
tinderUser.isLoggedin = false

// console.log(tinderUser);

const regularUser ={
    email: "some@gmail.com",
    fullname:{
        userfullname:{
            firstname: "aman",
            lastname: "srivastav"
        }

    }
}

console.log(regularUser.fullname.userfullname.firstname);

const obj1= {1: "a",2:"b"}
const obj2= {3:"a",4:"b"}
const obj4= {5:"a",6:"b"}
// const obj3 ={obj1, obj2}

// const obj3 = Object.assign({},obj1 , obj2,obj4)
const obj3 ={...obj1,...obj2,...obj4}
console.log(obj3);

 