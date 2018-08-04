// 1. Let's Form a Sentence

var first = 'JavaScript'; // sory ini variable dari word aku ganti first soalnya double sama soal no 2
var second = 'is';
var third = 'awesome';
var fourth = 'and';
var fifth = 'I';
var sixth = 'love';
var seventh = 'it!';

console.log(first+' '+second+' '+third+' '+fourth+' '+fifth+' '+sixth+' '+seventh)
console.log(); //spasi aja biar enak dibaca

// 2. Index Accessing - 1 by 1

var word = 'wow JavaScript is so cool';

var exampleFirstWord = word[0] + word[1] + word[2];
var secondWord = word[4] + word[5] + word[6] + word[7] + word[8] + word[9] + word[10] + word[11] + word[12] + word[13];
var thirdWord = word[15] + word[16];
var fourthWord = word[18] + word[19];
var fifthWord = word[21] + word[22] + word[23] + word[24];

console.log( 'First Word: ' + exampleFirstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);
console.log(); //spasi aja biar enak dibaca

// 3. Breaking Sentence (Again) using Substring

var word3 = 'wow JavaScript is so cool';
// di contoh variable yg diambil jg belum di edit dari word -> word3 agar tidak mengambil nilai variable soal nomor 2
var exampleFirstWord3 = word3.substring(0,3); // ini aku ganti jg word -> word3
var secondWord3 = word3.substring(4, 14); 
var thirdWord3 = word3.substring(15, 17);
var fourthWord3 = word3.substring(18, 20); 
var fifthWord3 = word3.substring(21, 27);

// sory.. variable di bawah jg aku ganti dari exampleFirstWord -> exampleFirstWord3, dst
// jd kalo pas nge-review ga diperhatiin diganti apa belum, pasti benar soalnya ngambil variable no 2 di atas
console.log('First Word: ' + exampleFirstWord3);
console.log('Second Word: ' + secondWord3);
console.log('Third Word: ' + thirdWord3);
console.log('Fourth Word: ' + fourthWord3);
console.log('Fifth Word: ' + fifthWord3);
console.log(); //spasi aja biar enak dibaca

// 4. Breaking Sentence (yet Again) and Count Each Length

var word4 = 'wow JavaScript is so cool';

var exampleFirstWord4 = word4.substring(0,3); // ini aku ganti jg word -> word4, dst
var secondWord4 = word4.substring(4, 14); 
var thirdWord4 = word4.substring(15, 17);
var fourthWord4 = word4.substring(18, 20); 
var fifthWord4 = word4.substring(21, 27);

var firstWordLength = exampleFirstWord4.length;
var secondWordLength = secondWord4.length;
var thirdWordLength = thirdWord4.length;
var fourthWordLength = fourthWord4.length;
var fifthWordLength = fifthWord4.length;

// ini variable jg aku ganti beda dengan contoh, exampleFirstWord -> exampleFirstWord4 ,dst
console.log('First Word: ' + exampleFirstWord4 + ', with length: ' + firstWordLength);
console.log('Second Word: ' + secondWord4 + ', with length: ' + secondWordLength);
console.log('Third Word: ' + thirdWord4 + ', with length: ' + thirdWordLength);
console.log('Fourth Word: ' + fourthWord4 + ', with length: ' + fourthWordLength);
console.log('Fifth Word: ' + fifthWord4 + ', with length: ' + fifthWordLength);