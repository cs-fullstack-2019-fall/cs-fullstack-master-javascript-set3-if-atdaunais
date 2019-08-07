var name1 = "Andrew";
var name2 = "Thomas";

if (name1 === name2)
{
    alert("That is...CORRECT");
}
else if (name1 !== name2)
{
    alert("That is...NOT CORRECT");
}


var userNum = parseInt(prompt("Enter a number. I will tell you its quality."));

if ( userNum > 0)
{
    alert("POSITIVE");
}
else if ( userNum < 0)
{
    alert("NEGATIVE");
}
else if (userNum === 0)
{
    alert("ZERO");
}

var userInput = parseInt(prompt("Input a number from 1 to 3."));

if (userInput === 1 || userInput === 2 || userInput === 3)
{
    alert("CORRECT");
}
else
{
    alert("ERROR");
}