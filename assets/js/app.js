const username = prompt("What is your name?");
const minutes = prompt("Give me the duration in minutes, that will be converted to hours and minutes");

const hours = (minutes - minutes % 60) / 60;
const remainder = minutes % 60;

document.write("Hello " + username + ", your input was " + minutes + " minutes.");
document.write("<br>");
document.write("<br>");
document.write("Output: " + hours + " hours and " + remainder + " minutes.");