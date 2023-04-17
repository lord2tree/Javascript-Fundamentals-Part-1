console.log("variables-tutorial");
/*There are two limitations on variable names in JavaScript: 
The name must contain only letters, digits, or the symbols $ and _.
The first character must not be a digit.*/
let message;
message = "hello!";
alert(message);

let newMessage = "hello again!";
alert(newMessage);

let user = "Junior",
  age = 37,
  myMessage = "hello, for the third time?";
/*as you can see above when the name contains multiple words, camelCase is commonly used.*/

const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
let color = COLOR_GREEN;
alert(color);
/*as you can see in the code above capital-named constants are only used as aliases for “hard-coded” values. These are constants that are 
known prior to execution (like a hexadecimal value for red) */

const pageLoadTime = "this would be the time taken by a webpage to load";
/*as you can see above there are constants that are calculated in run-time, during the execution but do not change after their initial assignment. 
The value of pageLoadTime is not known prior to the page load, so it’s named normally. But it’s still a constant because it doesn’t change after 
assignment. In other words, capital-named constants are only used as aliases for “hard-coded” values.*/

//TASKS

/*Working with variables*/
let admin, name;
name = "John";
admin = name;
alert(admin);

/*Giving the right name*/
const OUR_PLANET_NAME = "Earth";
const currentUserName = "Jane";
