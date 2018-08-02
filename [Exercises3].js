var peran = 'Ksatria'
var nama = 'Joni'

if (peran === '' && nama === ''){
    console.log('Nama harus diisi')
} else if (peran === '' && nama === 'Joni') {
    console.log('Halo', nama,',','Pilih peranmu untuk memulai game!')
} else if(peran==='Ksatria' && nama === 'Joni') {
    console.log('Selamat datang di Dunia Proxitia,', nama,'!', 'Halo Ksatria', nama, ', kamu dapat menyerang dengan senjatamu!')
} else if(peran==='Tabib' && nama === 'Joni'){
    console.log('Selamat datang di Dunia Proxitia,', nama,'!', 'Halo Tabib', nama, ', Kamu akan membantu temanmu yang terluka.');
} else if(peran==='Penyihir' && nama === 'Joni'){
    console.log('Selamat datang di Dunia Proxitia,', nama,'!', 'Halo Penyihir', nama, ', Ciptakan keajaiban yang membantu kemenanganmu!');
} else {
    console.log('Hayooo! ada yg salah pasti')
}
