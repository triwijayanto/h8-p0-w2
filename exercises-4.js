// gantilah nilai variable bulan
var hari = 1
var bulan = 4
var tahun = 1900

// switch case hanya untuk variable bulan
switch (bulan) {
  case 1:
    console.log(hari, 'Januari', tahun);
    break;
  case 2:
    console.log(hari, 'Februari', tahun);
    break;
  case 3:
    console.log(hari, 'Maret' , tahun);
    break;
  case 4:
    console.log(hari, 'April' , tahun);
    break;    
  case 5:
    console.log(hari, 'Mei' , tahun);
    break;    
  case 6:
    console.log(hari, 'Juni' , tahun);
    break;    
  case 7:
    console.log(hari, 'Juli' , tahun);
    break;                       
  case 8:
    console.log(hari, 'Agustus' , tahun);
    break;    
  case 9:
    console.log(hari, 'September' , tahun);
    break;    
  case 10:
    console.log(hari, 'Oktober' , tahun);
    break;    
  case 11:
    console.log(hari, 'November' , tahun);
    break;
  case 12:
    console.log(hari, 'Desember' , tahun);
    break;                            
  default:
    console.log('pilih bulan yang tepat, coba lagi!');
}

