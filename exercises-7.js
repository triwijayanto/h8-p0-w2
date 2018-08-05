// 1. Menyusun Barisan Bintang

var rows = 5

for(var angka = 1; angka <= rows; angka++) {
  console.log('*');
}

console.log() // spasi


// 2. Menyusun Barisan Bintang Dengan Nested Looping

var stringKosong = ''

//untuk membuat bintang sebanyak rows
for (var nomorDua = 1; nomorDua <= rows; nomorDua++) {
   stringKosong += '*'
}

//untuk mencetak bintang sebanyak rows
for (var ulang = 0; ulang < rows; ulang++) {
 console.log(stringKosong)
}

console.log() // spasi
// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping


for (var nomorTiga = 1; nomorTiga <= rows; nomorTiga++) {
    var stringKosong = '';


for (var segitiga = 1; segitiga <= nomorTiga; segitiga++) {
      stringKosong += '*';
    }

    console.log(stringKosong);
}