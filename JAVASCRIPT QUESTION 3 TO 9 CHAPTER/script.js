// CHAPTER 03 VARIABLE FOR NUMBERS

//QUESTION NO 01

var height = 170;

var newHeight = height + 10;

alert("Height is = " + newHeight)

//QUESTION NO 02

var num1 = 50;

var num2 = 30;

var sum = num1 + num2;

alert("the sum of 50 + 30 = " + sum)

//QUESTION NO 03

var numToBeAdded = 20;

var total = numToBeAdded;

alert(total);

//QUESTION NO 04

var price = 120;

var tax = price * 0.10 //10% i sequal to 0.10

var totalPrice = price + tax

alert("After text the price will be" + totalPrice)


//CHAPTER NO 04 VARIABLE FOR NUMBERS

//QUESTION NO 01

var myAddress = "Karachi"

alert("My city name is " + myAddress)


//QUESTION NO  02

var userName = "Aiman mirza";

var userEmail = "@mirzaaslam";

var userPassword = "......."

alert(`My name is ${userName}\n\nMy email is${userEmail}\n\nMy password is ${userPassword}`)

////QUESTION NO  03

// var user address = "gohar green" error is generated space are not allowed in variablename

var userAddress = "Gohar Green";

alert(`my Address is ${userAddress}`);

//QUESTION NO  04

var rose = "Floribundas"
// var result = Rose //this Rose is not defined

alert("Flower name is " + rose)



//CHAPTER NO 5 FAMILIAR OPERATOR
//QUESTION N0 1

var num = 25 + 30

var sum = num
alert(`the sum of 25 + 30 = ${num}`)

//QUESTION N0 2

var num1 = 25

var num2 = 5

var sum = num1 + num2

alert(`the sum of 25 +5 = ${sum}`)

//QUESTION N0 3

var remainder = 27 % 4

var modulusResult = remainder

alert(`27 % 4 = ${remainder}`)


//CHAPTER NO 6  Unfamiliar operators
//QUESTION N0 1

var number = 3

var newNumber = number++

alert("Before post increament" + newNumber)

alert("After post increament" + number)


//QUESTION N0 2

var counter = 10

counter++

counter++

alert(`Counter value = ${counter}`)

//QUESTION N0 3
var points = 20

points--

++points

alert("points value " + points)

//QUESTION N0 4

let value = 0
++value
++value
++value
alert(value);



//CHAPTER NO 07 Eliminating ambiguity

//QUESTION NO 01

var calculation = 20 % (6 + 2) * (5 - 3);//answer 8
alert(calculation)//answer 8


var expressionValue = (6 + 2) * (5 - 3);//answer 16
alert(expressionValue)

var finalTotal = 20 * 10 + 2 / 4
alert(finalTotal)//answer 200.5

var finalAnswer = (20 + 35) * 10 + 12 / 6
alert(finalAnswer)//answer 552

// //CHAPTER NO 08 PROMPT

// //QUESTION NO 01 

var user = prompt("What is your name?");
var userAnswer = user;

alert(`Hello,${userAnswer}`);

// //QUESTION NO 02

var userAge = prompt("How old are you?");

var userAnswer = userAge;

if (userAge === null) {

    alert("No age provided")
}
else {
    alert(`you are ${userAnswer} year old`)
}

// //QUESTION NO 03

var pets = prompt("How many pets do you have?")

var userPets = pets

if (userPets === "") {

    alert("You didn't enter anything")
} else {
    alert(`you have ${userPets}pets`)
}

// //QUESTION NO 04

var number = prompt("Enter a number between 1 and 10")

var userAns = number * 2

alert(`${number} x 2 = ${userAns}`)


//QUESTION NO 05
var userNumber = prompt("Enter your favourite number?")

var favNum = userNumber

if (favNum === "") {

    alert("7")
} 
else {

    alert(`your favourite number is ${favNum}`)

}
//CHAPTER NO 09 IF STATEMENT

// // //QUESTION NO 01

var country = prompt("What is the capital of France?")

var userAnswer = country

if (userAnswer === "Paris") {

    alert("Correct!")
} 
else {

    alert(" Try again") 
}
//QUESTION NO 02

var capitalCountry = prompt("What is the capital of France?")

var userReply = capitalCountry

if (userReply === "Paris") {

    alert("Correct!")
} 
else {

    alert("Incorrect, the correct answer is Paris.")
}
//QUESTION NO 03

var capitalUnited = prompt("What is the capital of the United Kingdon ")

var CapitalAnswer = capitalUnited

if (CapitalAnswer === "London" || CapitalAnswer === " United Kingdom") {

    alert("Correct!")
}

else {
    alert("Incorrect")
}
//QUESTION NO 04
score = 0

var color = prompt("What i sthe colour of Sun")

if (color === "Yello") {

    score++

    alert("Corect! your score is" + score)
}
else {

    alert("Incorrect! Your score is " + score)
}
//QUESTION NO 05
var capital = prompt("What is the capital of Germany?")

var addition = prompt("what is 10 + 10?")

if (capital === "Berlin" && addition === "20") {

    alert("you got both right")

}
else if (capital === "Berlin" || addition === 20) {

    alert("only one answer is correct")
}
else {

    alert("you got both wrong")
}



