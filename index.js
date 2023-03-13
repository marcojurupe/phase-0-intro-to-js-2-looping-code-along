// Code your solutions in this file
const gifts = ["Guadalupe", "Ollie", "Aki"];
let people = gifts.length;

writeCards = () => {
    for (var i = 0; i < people; i++) {
        console.log(`Thank you, ${gifts[i]}, for the wonderful surprise gift!`);
    }
}
writeCards()

countDown = () => {
    let i = 11;
    while (i !== 0) {
        console.log(`Expected countDown(${i - 1}) to invoke ${i} console.logs`);
        i--;
    }
}
countDown();

function countDown2() {
    let i = 4;
    let callCount = 0;
    while (i == 4) {
        console.log(`Expected countDown(${i}) to log 4 first`);
        i--;
        while (i + 1 > 0) {
            console.log(`Expected countDown(${i + callCount + 1}) to log ${i} after ${i + 1}`);
            i--;
            callCount++;
        }
    }
}
countDown2();