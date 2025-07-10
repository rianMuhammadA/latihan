// Higher Order Function
//  Function yang beroperasi pada function yang lain. Baik itu digunakan dalam argument, maupun sebagai return value ~ eloquentjavascript.net

// inti dari javascript sebenarnya adalah function 
// yang mana function ini diperlakukan sebagai object

// Apabila ada function yang menyimpan fuction lain sebagai argumentnya berarti function tersebut merupakan Higher Order Function dan argument yang berupa function itu desebut dengan callback

// disini function kerjakanTugas() adalah Higher Order Function
// dan function selesai() yang ada \|/ dalam Higher Order Function disebut dengan callback
// function kerjakanTugas(matakuliah, selesai){
//     console.log(`Mulai mengerjakan tugas ${matakuliah} ...`);
//     selesai()
// }

// function selesai(){
//     alert('Selesai Mengerjakan tugas')
// }

// kerjakanTugas('Pemrograman Web', selesai)

// contoh lain Higher Order Function adalah sebagai berikut
// function addEventListener() merupakan Higher Order function
// const kotak = document.querySelector('.box')

// kotak.addEventListener('click', function(){
//     alert('Kotak ditekan');
// })

// begitu juga function yang me- return function lain di dalam function tersebut juga disebut Higher Order Function


// Mengapa kita menggunakan Higher Order Function?
// 1. Untuk membuat agar kode yang kita buat bisa lebih sederharan(simple) disebut dengan abstraksi
//      *Semakin besar sebuah program, semakin tinggi kompleksitasnya, semakin membingungkan programmnya* ~ eloquentjavascrip.net





// *Ada dua cara untuk merancang sebuah software: pertama adalah untuk membuat programnya se-sederhana mungkin sehingga jelas-jelas tidak ada kekurangannya, dan cara lainnya adalah untuk membuat program se-kompleks mungkit sehingga tidak ada kekurangan yang jelas* ~ C.A.R Hoare, 1980 ACM Turing Award Lecture




// Contoh Higher Order Function yang sering digunakan untuk pengelolaan 
// - Array.prototypr.map()
// - Array.prototypr.filter()
// - Array.prototypr.reduce()