// Quick Tips
// var vs let vs const
// 

// function tes(){
//     for (var i = 0; i < 10; i++) {
//         console.log(i);
        
//     }
// }

// tes()
// console.log(i);

// cara agar variablenya berlaku sama seperti bahasa pemrograman lain tetapi dengan function scope
// IIFE = Immediately Invoked Function Expression
// SIAF = Self Invoking Anonymous Function

// di bawah ini adalah function expression
// var x = function () {
    
// }

// tapi bisajuga dibikin seperti berikut. disebut juga dengan SIAF dan IIFE (berikut ini cara lamanya)
// (function(){
//     for (var i = 0; i < 10; i++) {
//         console.log(i);
        
//     }
// })()

// console.log(i);


// dan apabila kita menggunakan let maka akan langsung secara otomatis menjadi block scope begitu juga dengan const
//     for (let i = 0; i < 10; i++) {
//         console.log(i);    
//     }

// console.log(i);

// const digunakan untuk menyimpan isi variable namun variablenya tidak bisa dirubah setelah dibuat pertama dengan nama yang sama
// digunakan untuk meminimalisir perubahan state

// const mhs = {
//     nama: 'Rian',
//     umur: 20
// }

// mhs = {
//     jurusan: 'Rekayasa Perangkat Lunak'
// }

// console.log(mhs);



// const isi dalam variable masih bisa dirubah tetapi tidak dengan variablenya 
const i = [1,2,3,4]

i.push = 5

console.log(i);