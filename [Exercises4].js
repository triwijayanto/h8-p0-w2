// gantilah nilai variable bulan
var hari = 1
var bulan = 12
var tahun = 1900

// switch case hanya untuk variable bulan
switch (bulan) {
  case 1:
    console.log(hari+2, 'Januari', tahun+10);
    break;
  case 2:
    console.log(hari+4, 'Februari', tahun+20);
    break;
  case 3:
    console.log(hari+8, 'Maret' , tahun+30);
    break;
  case 4:
    console.log(hari+10, 'April' , tahun+40);
    break;    
  case 5:
    console.log(hari+12, 'Mei' , tahun+50);
    break;    
  case 6:
    console.log(hari+14, 'Juni' , tahun+60);
    break;    
  case 7:
    console.log(hari+16, 'Juli' , tahun+70);
    break;                       
  case 8:
    console.log(hari+20, 'Agustus' , tahun+80);
    break;    
  case 9:
    console.log(hari+22, 'September' , tahun+90);
    break;    
  case 10:
    console.log(hari+24, 'Oktober' , tahun+100);
    break;    
  case 11:
    console.log(hari+26, 'November' , tahun+110);
    break;
  case 12:
    console.log(hari+28, 'Desember' , tahun+120);
    break;                            
  default:
    console.log('pilih bulan yang tepat, coba lagi!');
}

