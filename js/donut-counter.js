//JS Donut Counter Lab
var guests = prompt("Please enter your number of guests")
var donuts = prompt("Please enter your number of donuts")
//declare 2 variables one for guests and one for donuts
//use prompt method to bring up a dialog box in the browser for the user to insert the number of guests and donuts.
//use parseInt to convert the users answer from a string to an integer.

debugger
//write a conditional to check if there are enough donuts
if (parseInt(guests) > parseInt(donuts)) {
  alert("You have " + guests + " and " + donuts + " donuts. There are not enough donuts for each guest.")
} else {
  alert("You have " + guests + " and " + donuts + " donuts.")
}

  //alert the user with a message telling them the numbers of donuts and guests, and if there are enough donuts for each guest.
