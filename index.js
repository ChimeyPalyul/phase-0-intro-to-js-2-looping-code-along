// Code your solutions in this file
const name = ["Guadalupe","Ollie","Aki"];
const event =["surprise"]
const finalArray = []

function writeCards(name, event) {
    for (let i = 0; i < name.length ; i++) {
        finalArray.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);   
    }
    return finalArray;
}


let integer = 10
function countDown(integer){
    while(integer > -1){
    console.log(integer --);
    }
}