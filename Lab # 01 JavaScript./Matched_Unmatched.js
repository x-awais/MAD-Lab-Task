// Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then 
// prompted to input a guess number. If the user input matches with guess number, the program will 
// display a message "You WIN" otherwise display a message "Not matched".

const random_number = Math.floor(Math.random() * 11)
user_input = 11; 

if(random_number === user_input){
    console.log("Matched: You Won")
}
else{
    console.log("Not matched: You Lose")
}