// 2.2 Closure

// Closure merupakan kombinasi antara function dan lingkungan leksikal (lexical scope) di dalam function tersebut ~ MDN
// Closure adalah sebuah function ketika memiliki akses ke parent scope-nya, meskipun parent scope-nya sudah selesai dieksekusi ~ w3school
// Closure adalah sebuah function dikebalikan oleh function lain, yang memiliki akses ke lingkungan saat ia diciptakan. ~ Code Fellow 
// Closure adalah sebuah function yang sebelumnya sudah memiliki data, hasil dari function yang lain. ~ Techsith

//  memahami Lexical Scope

// function init(){
//     // let nama = 'Rian'
    
//     return function(nama){
//         console.log(nama);
//     }
    
// }
// let panggilNama = init()
// panggilNama('Afrian')


// function ucapkanSalam(waktu){
//     return function(nama){
//         console.log(`Halo ${nama}, Selamat ${waktu}, Semoga harimu menyenangkan`);
//     }
// }

// let selamatPagi = ucapkanSalam('pagi')
// let selamatSiang = ucapkanSalam('siang')
// let selamatMalam = ucapkanSalam('Malam')

// console.dir(selamatMalam('rian'));


let counter = 0
let add = (function(){
    let counter = 0;
    return function(){
        return ++counter
    }
})()

console.log(add());
console.log(add());
console.log(add());
counter = 100
console.log(add());
console.log(add());

// kenapa menggunakan Closure?
// 1. untuk membuat Function factories
// 2. untuk membuat private method
// 3. 