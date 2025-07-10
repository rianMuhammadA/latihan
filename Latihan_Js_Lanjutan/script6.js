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




// Contoh Higher Order Function yang sering digunakan untuk pengelolaan [filter, map & reduce]
// - Array.prototypr.map()
// - Array.prototypr.filter()
// - Array.prototypr.reduce()

const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9]

// mencari angka yang >= 3

//  with for or without filter()
// const newAngka = []

//  for (let i = 0; i < angka.length; i++) {
//     if (angka[i] >= 3) {
//         newAngka.push(angka[i])
//     }
//  }
//  console.log(newAngka);


// with filter()
// const newAngka = angka.filter(a => a >= 3)
// console.log(newAngka);


// with map()
// kalikan semua angka dengan 2
// const newAngka = angka.map(a => a*2)
// console.log(newAngka);


// with reduce()
// menjumlahkan seluruh element pada array
// const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue , 0 )
// // [0 + -1 + 8 + 9 + 1 + 4 + -5 + -4 + 3 + 2 + 9] *kode di atas melakukan baris ini*
// console.log(newAngka);


// method chaining = yang mana kita bisa menggabuungkan fungsi-fungsi pada Higher Order Function dalam satu kali eksekusi, tidak perlu disimpan ke dalam variable dulu  
// cari angka > 5
// lalu kalikan 3
// dan jumlahkan

const hasil = angka.filter(a => a > 5).map(a => a*3).reduce((acc, cur) => acc + cur)
console.log(hasil);