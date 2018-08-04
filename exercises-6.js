console.log() // spasi aja biar enak lihatnya
console.log('1. Melakukan Looping Menggunakan While')
console.log() // spasi aja biar enak lihatnya
// 1. Melakukan Looping Menggunakan While
// LOOPING PERTAMA
console.log('LOOPING PERTAMA')
//
var i = 2;
while (i <= 20) {
   console.log( i+ ' -', 'I love coding')
    i+=2;
}

console.log() // spasi aja biar enak lihatnya
// LOOPING KEDUA
console.log('LOOPING KEDUA')
//
var i = 20;
while (i >= 2){
  console.log( i+ ' -', 'I love coding')
  i-=2
}
console.log() // spasi aja biar enak lihatnya
console.log('2. Melakukan Looping Menggunakan For')
console.log() // spasi aja biar enak lihatnya
// 2. Melakukan Looping Menggunakan For
// LOOPING PERTAMA
console.log('LOOPING PERTAMA')

for (i = 1; i <= 20; i++) {
     console.log( i+ ' -', 'I love coding')
}

console.log() // spasi aja biar enak lihatnya
// LOOPING KEDUA
console.log('LOOPING KEDUA')

for (i = 20; i >= 1 ; i--){
  console.log( i+ ' -', 'I will become fullstack developer')  
}
console.log() // spasi aja biar enak lihatnya
console.log('3. Angka Ganjil dan Genap')
console.log() // spasi aja biar enak lihatnya
// 3. Angka Ganjil dan Genap

for (i = 1 ; i <= 100 ; i++){

    if (i%2 == 0 ){
      console.log(i +' GENAP')
    } else {
      console.log(i +' GANJIL')
    }
    
}
console.log() // spasi aja biar enak lihatnya
console.log('------------------')
console.log() // spasi aja biar enak lihatnya   
console.log() // spasi aja biar enak lihatnya
console.log('pertambahan counter 2 & 3 kelipatan 3')
console.log() // spasi aja biar enak lihatnya   

for (i = 1 ; i <= 100 ; i+=2){

    if (i%3 == 0 ){
      console.log(i+ ' 3 kelipatan 3 ')
    } else {
      console.log(i + '')
    }
    
}
console.log() // spasi aja biar enak lihatnya
console.log('pertambahan counter 5 & 6 kelipatan 6')
console.log() // spasi aja biar enak lihatnya   

for (i = 1 ; i <= 100 ; i+=5){

    if (i%6 == 0 ){
      console.log(i+ ' 6 kelipatan 6')
    } else {
      console.log(i + ' ')
    }
    
}

console.log() // spasi aja biar enak lihatnya
console.log('pertambahan counter 9 & 10 kelipatan 10')
console.log() // spasi aja biar enak lihatnya   

for (i = 1 ; i <= 100 ; i+=9){

    if (i%10 == 0 ){
      console.log(i+ ' 10 kelipatan 10')
    } else {
      console.log(i + ' ')
    }
    
}