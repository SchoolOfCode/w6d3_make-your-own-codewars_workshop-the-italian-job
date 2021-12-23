// INSTRUCTIONS 

// - Decode the message 
// - You are given a string of words containing an encrypted secret message. Your task is to decode the message.
// - To decode the message, you'll have to work out the key the message was encoded with. 

// - This is a not-so-simple substitution cipher task. Each letter of the string is swapped with another letter depending on the key.
// - The key depends on the length of the sentence

// - If the length of the sentence is between 0 and 10, the key is 5;
// - if the length of the sentence is between 11 and 20, the key is 10;
// - if the length of the sentence is between 21 and 30, the key is 15;
// - if the length of the sentence is between 31 and 40, the key is 20;
// - if the total length of the string is greater than 40, return "String is too long for decoding" 

// How the message was encrypted:
// - the key tells you by how many places the letter was shifted forward, for example:
//     with key 5, A has become F (position 1 has become 6);
//     with key 10, B has become L (position 2 has become 12);
//     with key 15, O has become D (position 15 has become 4);
// - if while encrypting the message, the end of the alphabet was reached, we carried on counting from the start of the alphabet

//  Examples:
    // a -> f
    // z -> e
    // zzzzzzzzzzz - > jjjjjjjjjjj (the value of z changes depending on the length of the input string)
    // hi -> mn
    // english -> jslqnxm
    // i like ice-cream -> s vsuo smo-mbokw

// - Do not alter spaces or any characters outside of a-z
// - Input will be always be lowercase, so you don't have to worry about that. 

export function decodeTheMessage(str) {
    // Your very clever code goes here
      }
