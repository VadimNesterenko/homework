
let Hello = "Hello"
alert(Hello)
const YES = "yes"

let result = prompt("Are you ready to start the game?")
console.log(result)

if (result ==YES){
    let resultConf = confirm("let's go!")
    let resultAlert = alert("Ok")
    console.log(resultAlert)
    console.log(resultConf)
    let name = prompt("Введите Имя")
console.log(name)
let name1 = prompt("Введите Фамилию")
console.log(name1)
let age = prompt("Сколько Вам лет?")
console.log(age)
let vopros1 = prompt("какого цвета солнце?")
console.log(vopros1)
if (vopros1 == "yellow"){
var ochcko = 0
    ochcko = ochcko + ( 1 * (2**2))
    console.log(ochcko)
}else{
    var ochcko = 0
console.log(ochcko)
}

let vopros2 = prompt("Какого цвета вода?")
console.log(vopros2)
if (vopros2 == "blue"){
var ochcko1 = 0
    ochcko1 = ochcko1 + ( 1 * (2**2))
    console.log(ochcko1)
} else {
    var ochcko1 = 0
console.log(ochcko1)
}


let vopros3 = prompt("Какого цвета трава?")
console.log(vopros3)
if (vopros3 == "green"){
var ochcko2 = 0
    ochcko2 = ochcko2 + ( 1 * (2**2))
    console.log(ochcko2)
}else {
    var ochcko2 = 0
console.log(ochcko2)
}

let vopros4 = prompt("Какого цвета свинья")
console.log(vopros4)
if (vopros4 == "pink"){
var ochcko3 = 0
    ochcko3 = ochcko3 + ( 1 * (2**2))
    console.log(ochcko3) 
}else {
    var ochcko3 = 0
console.log(ochcko3)
}

let vopros5 = prompt("2+2*2 = ")
console.log(vopros5)
if (vopros5 == "6"){
    var ochcko4 = 0
    ochcko4 = ochcko4 + ( 1 * (2**2))
    console.log(ochcko4)
}else {
    var ochcko4 = 0
    console.log(ochcko4)
}



var all4 = (ochcko + ochcko1 + ochcko2 + ochcko3 + ochcko4)
alert("Готовы узнать результаты?")
alert("Ваш результат:" + " " + all4)
console.log(all4)

} else {
let resultConf = alert("Game over")  
}
