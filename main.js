/* 
👉 Write your kata here!

- Decode the message 
- You are given a string of words containing an encrypted secret message. Your task is to decode the message.
- To decode the message, you'll have to work out the key the message was encoded with. 

-  This is a not so simple Substitution cipher task. Each letter of the string is swapped with another letter depending on the key.
- The key depends on the length of the sentence

- If the length of the sentence is between 0 and 10, the key is 5;
- if the length of the sentence is between 11 and 20, the key is 10;
- if between 21 and 30, the key is 15;
- if between 31 and 40, the key is 20; 

- the key tells you by how many places you should shift that letter, for example:
    with key 5, A becomes F (position 1 becomes 6);
    with key 10, B becomes L (position 2 becomes 12);
    with key 15, O becomes D (position 15 becomes 4);
        - if you reach the end of the alphabet, start from position 1 again 

- Do not alter spaces or any character outside of A-Z
- Input will be always be lowercase, so you don't have to worry about that. 

- if str.length is > than 40, return "String is too long for encoding" 
*/

//👉 Write the function your CodeWarriors will start with below here:
 const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

export default function decodeTheMessage(str) {
let key;
if (str.length <= 10) {
    key = 5;
} else if (str.length <= 20) {
    key = 10;
} else if (str.length <= 30) {
    key = 15;
} else if (str.length <= 40) {
    key = 20;
} else {
    return `String is too long for encoding`;
}
 const regex = /[a-z]/;

// console.log(regex.test("l"));

let arrFromStr = str.split("");
// console.log(arrFromStr)
let mappedArr = arrFromStr.map((char) => {
    if (regex.test(char)) {
        let newIndex = alphabet.indexOf(char) + key;
        if (newIndex > 26) { 
           newIndex -= 26;
        }
        // console.log(`Char: ${char}, newIndex: ${newIndex}, inAlphabet: ${alphabet[newIndex]}`);
        return alphabet[newIndex];
    } else {
        return char
    } 
    
})
return mappedArr.join("");
}


console.log(decodeTheMessage("mjqqt"));

