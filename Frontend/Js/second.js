document.getElementById('title').innerHTML="Learnin JavaScript"
document.getElementById('title').style.color="red"


document.getElementById('btn').addEventListener('click', function() {
    document.getElementById('image').src= './image2.png'
    document.getElementById('image').style.border="dashed"
})

const person1 ={
    firstName:"Abebe",
    lastName:"Daba",
    age:28,
    gender:"M",
    fullName: function(){
        return this.firstName + " " + this.lastName
    },

    eat: function(){
        return "Eating...."
    },

     walk: function(){
        return this.firstName + " is Walking...." 
    },
}

const person2 ={
    firstName:"Kebede",
    lastName:"Dawit",
    age:40,
    gender:"M",
    fullName: function(){
        return this.firstName + " " + this.lastName
    },

    eat: function(){
        return this.firstName + " is Eating...."
    },

     walk: function(){
        return this.firstName + " is Walking...." 
    },
}

console.log(person1.fullName())
console.log(person1.walk())

console.log(person2.fullName())
console.log(person2.eat())


let fullName = "abebe dawit  "

console.log(fullName.toLocaleLowerCase())
console.log(fullName.trim())
console.log(fullName.slice(1,3))


const array = ["banana" , "apple" , "mango" , 12 , true]

console.log(array[0])
console.log(array[4])

array[4] = "Avocado";

console.log(array[4])

array.forEach((f)=>{
    console.log(f)
})


const today = new Date()
const someday = new Date("12-2-2023")

console.log(today)
console.log(someday)
console.log(today.getFullYear())
console.log(today.getMonth())

console.log(today>someday)

console.log(Math.PI)
console.log(Math.LN2)
console.log(Math.round(3.4))
console.log(Math.round(3.5))
console.log(Math.ceil(3.1))
console.log(Math.floor(3.9))
console.log(Math.trunc(3.9))


console.log(Math.pow(3,2))
console.log(Math.sqrt(81))

console.log(Math.random())

//from 1 to 10 

console.log(Math.floor(Math.random()*10))

console.log(Math.floor(Math.random()*100))

//from 1 to 50
console.log(Math.floor(Math.random()*100  / ( 20 +1) ))


console.log(true && false)
console.log(true || false)
console.log(!false)

let a=20, b=30

//Ternary 
a>b ?  console.log("Correct") : console.log("Incorrect")


//Nullish
let name = null; 

console.log(name ?? "Guest")


let day = 0 


//switch Statement
switch(day){
    case 0: 
         console.log("Monday")
         break

    case 1: 
        console.log("Tuesda")
        break

     case 2: 
        console.log("Wednsday")
        break

     case 3: 
        console.log("Thursday")
        break

     case 4: 
        console.log("Friday")
        break
     case 5: 
        console.log("Saturday")
        break
     case 6: 
        console.log("Sunday")
        break
}







