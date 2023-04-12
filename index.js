// Code your solutions in this file
const names =["Guadalupe", "Ollie","Aki"];
const messages = [];
function writeCards(names, eventNames)
{   for (let i = 0; i < names.length; i ++){
    let message =  `Thank you, ${names[i]}, for the wonderful ${eventNames} gift!`;    
    messages.push(message);
    } 
    return messages;
}

function countDown(number)
{    
    while (number >= 0){        
    console.log(number);        
    number --;    
    }
}