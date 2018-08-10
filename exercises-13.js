function xo(str) {
    var penampungX = 0
    var penampungO = 0
  
    //loooping, cek dari huruf depan ... ujung, str parameter punya argumen xoxoxo
    for(i = 0 ; i < str.length ; i ++){
      //cek, huruf x / o
      //jika x, penampungX += 1
      //jika o, penampungO += 1
      if (str[i] === 'x'){
        penampungX += 1
      } else if (str[i] === 'o') {
        penampungO += 1
      }
    }
    //proses cek huruf selesai
  
    //bandingin jumlah x dan jumlah o
    if (penampungO === penampungX ){
      return true
    } else{
      return false
    }
  }
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true