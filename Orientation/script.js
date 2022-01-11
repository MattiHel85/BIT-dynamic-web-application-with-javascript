document.write("<h1>Dynamic Web Applications with Javascript </h1>");
document.write("<br>");
// Answers
// 1. JS Output and console
    // alert("Hello World!");
    
// 2. Defining variables
//     var/let/const

let firstName = "Matt";
let lastName = "Simpson";

document.write("<strong>" + firstName + " " + lastName + "</strong>" )
document.write("<hr>");
console.log(firstName + " " + lastName);

// 3. Conditionals
document.write("<h2>Checking ID</h2>");
document.write("<p>The if statement used an X variable with the value of 17 to represent age.<br>Since 17 is too young to drink, the statement returned the following. . .</p>");

let x = 17;
let order = "Beer";

if (x > 50) {
    document.write("<h1>He's over 50!</h1>");
} else if (x <= 50 && x > 30) {
    document.write("<strong>Middle aged man, who ordered some " + order.toLowerCase() + ".</strong>");
} else if (x <=30 && x > 20) {
    document.write("<strong>You're too young to drink " + order.toLowerCase() + " in my pub!</strong>");
} else if (x <= 20 && x > 17) {
    document.write("<strong>You think you're getting some " + order.toLowerCase() + "? Do one!</strong>");
} else
document.write("<strong>GET OUT YOU WEE BAIRN!!! YOU CAN GET SOME " + order.toUpperCase() + " FROM YOUR MAMMYS ALCOHOL CABINET!!!</strong>");

document.write("<hr>");
// 4. Loops

    // This is not correct.
document.write("<h2>Loops</h2><ol>");
var arr = [];

for (var i=0; i<15; i++) {
    arr.push(Math.floor(Math.random() * 100 ) + 1 );
    document.write("<li>" + arr[i]+ "</li>");
}

document.write("</ol>");
document.write("<hr>");

// 5. Functions walkthrough
document.write("<h2>Function</h2>")
document.write("<p>This function takes an argument named age and depending on whether you or younger than or older than 18, returns a different response.<br>I called the function with the age</p>")
function areYouOldEnough(age) {
    if(age < 18) {
        // console.log("Sorry, you're not old enough yet");
        document.write("<strong>Sorry, you're not old enough yet</strong>");
        return false;
    } else
    console.log(true);
    document.write("<strong>You're of age!</strong>");
    return true;
}

areYouOldEnough(18);

document.write("<hr>")

// 6. Objects

document.write("<h2>Objects</h2>")
document.write("<p>I created an object made up of the first and last names of four men. I then looped through the object to write the following to the DOM.</p>")

var personArray = [
    personOne = {
        firstName: "Dave",
        lastName: "England"
    },
    personTwo = {
        firstName: "Stephen",
        lastName: "Wales"
    },
    personThree = {
        firstName: "Terry",
        lastName: "Scotland"
    },
    personFour = {
        firstName: "Brian",
        lastName: "Ireland"
    }
]
document.write("<ul>")
for (let i in personArray) {
    document.write("<li>" + personArray[i].firstName + " " + personArray[i].lastName + "</li>")
}
document.write("</ul>")
// Independent exercises 1

// 1. Dogs age

// function dogsAge(humanAge) {
//     ageInDogYears = humanAge * 7;
//     document.write("<strong>Your age in dog years is " + ageInDogYears + ".</strong>");
// }

// 2. Debugging a script 
// var i = 5;
// var j = 10;
// var k = 25;
// var l = "Joe";

// if (i < j) {
//     console.log("i");
// } else if (j > k) {
//     console.log("k");
// } else console.log("j");

// var arr = [3, 5, 7];

// for(var i=0;i<=arr.length; i++) {
//     console.log(arr[i]);
// }
