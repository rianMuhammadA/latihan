function getPilihanComputer() {
    const comp = Math.random();
    if( comp < 0.34 ) return 'gajah';
    if( comp >= 0.34 && comp < 0.67 ) return 'orang';
        return 'semut';
}
// ^fungsi untuk menentukan angka random menjadi pilihan komputer^

function getHasil(comp,player) {
    if( player == comp ) return 'SERI!';
    if( player == 'gajah' ) return ( comp == 'orang' ) ? 'MENANG!' : 'KALAH!';
    if( player == 'orang' ) return ( comp == 'gajah' ) ? 'KALAH!' : 'MENANG!';
    if( player == 'semut' ) return ( comp == 'orang' ) ? 'KALAH' : 'MENANG!';
}
// ^fungsi untuk menampilkan hasil dari pilihan player vs computer^

// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click',function(){
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pGajah.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);

//     const imgComputer = document.querySelector('.img-computer');
//     imgComputer.setAttribute('src', 'img/' + pilihanComputer +'.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil.toUpperCase();


// });
// // ^code agar saat diklik gambar tangan gajah (gambar yang kiri) dapat berfungsi/ addEventListenernya jalan^

// const pOrang = document.querySelector('.orang');
// pOrang.addEventListener('click',function(){
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pOrang.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);

//     const imgComputer = document.querySelector('.img-computer');
//     imgComputer.setAttribute('src', 'img/' + pilihanComputer +'.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil.toUpperCase();


// });
// const pSemut = document.querySelector('.semut');
// pSemut.addEventListener('click',function(){
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pSemut.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);

//     const imgComputer = document.querySelector('.img-computer');
//     imgComputer.setAttribute('src', 'img/' + pilihanComputer +'.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil.toUpperCase();


// });



function putar(){
    const imgComputer = document.querySelector('.img-computer');
    const gambar = ['gajah','semut','orang']
    let i = 0;
    const waktuMulai = new Date().getTime(); 
    setInterval(function(){
        if(new Date().getTime() - waktuMulai > 1000){ 
            clearInterval;
            return;
        }
        imgComputer.setAttribute('src','img/' + gambar[i++] + '.png')
        if(i == gambar.length) i =0
    },100)
}
let jPlayer = 0;
let jComp = 0;
let jSeri = 0;

const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(pil){
    pil.addEventListener('click', function(){
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = pil.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);
    const winComp = document.querySelector('.count-comp');
    const winPlayer = document.querySelector('.count-player');
    const seri = document.querySelector('.seri');
    const jRound = document.querySelector('.round');



    putar()

    setTimeout(function () {
        
        const imgComputer = document.querySelector('.img-computer');
        imgComputer.setAttribute('src', 'img/' + pilihanComputer +'.png');
    
        const info = document.querySelector('.info');
        info.innerHTML = hasil.toUpperCase();
        
        if (hasil === 'KALAH!'){
            winComp.innerHTML = ++jComp;
        }
        if (hasil === 'MENANG!') {
            winPlayer.innerHTML = ++jPlayer;
        }
        if (hasil === 'SERI!') {
            seri.innerHTML = ++jSeri;
        }
        jRound.innerHTML = jSeri + jPlayer + jComp;
    }, 1100)




})

})



// ^program di atas adalah fersi sederhana dari 3 program yang ada do baris 17 - 60 "mungkin masih bisa disederhanakan menjadi lehib baik lagi idk"^



