// 2.1 Execution context, hoisting & Scope

// console.log(nama);
// var nama = 'rian'
// console.log(nama);

// creation phase pada Global Context
// nama var = undefined
// nama function = fn()
// disebut dengan Hoisting
// window = global object
// this = window

// execution phase

// console.log(sayHello());

// var mahasiswa = 'rian'
// var umur = 20

// function sayHello() {
//     return `hallo, Nama Saya ${mahasiswa}, saya berumur ${umur} tahun.`;
// }

// function membuat local execution context
// yang di dalamnya terdapat creation dan execution phase
// window
// arguments
// hoisting


var nama = 'rian'
var username = 'rianosac'

function cetakUrl() {
    console.log(arguments);
    var instagramURL = 'https://instagram.com/'
    return instagramURL + username
    
}

console.log(cetakUrl('Rian','afrian'));




// function a(){
//     console.log('ini a');
//     function b(){
//         console.log('ini b');
//         function c(){
//             console.log('ini c ');
//         }
//         c()
//     }
//     b()
// }
// a()


