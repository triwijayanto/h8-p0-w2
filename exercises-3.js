var peran = 'Ksatria'
var nama = 'Tri'

if (peran === '' && nama === ''){
    console.log('Nama harus diisi')
} else if (peran === '' && nama) {
    console.log('Halo', nama,',','Pilih peranmu untuk memulai game!')
} else if(peran ==='Ksatria' && nama) {
    console.log('Selamat datang di Dunia Proxitia,', nama,'!')
    console.log('Halo Ksatria', nama+',', 'kamu dapat menyerang dengan senjatamu!')
} else if(peran==='Tabib' && nama){
    console.log('Selamat datang di Dunia Proxitia,', nama,'!')
    console.log('Halo Tabib', nama+',', 'Kamu akan membantu temanmu yang terluka.');
} else if(peran==='Penyihir' && nama){
    console.log('Selamat datang di Dunia Proxitia,', nama,'!')
    console.log('Halo Penyihir', nama+',', 'Ciptakan keajaiban yang membantu kemenanganmu!');
} else {
    console.log('')
}
