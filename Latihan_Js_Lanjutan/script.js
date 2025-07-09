// cara membuat object pada javascript
// 1. Membuat object literal
// Problem = tidak efekti untuk object yang banyak

// let mahasiswa1 = {
//     nama: 'Rian',
//     energy: 10,
//     makan: function(porsi){
//         this.energy = this.energy + porsi
//         console.log(`halo ${this.nama}, selamat makan! `);
//     }
// }

// let mahasiswa2 = {
//     nama: 'dian',
//     energy: 10,
//     makan: function(porsi){
//         this.energy = this.energy + porsi
//         console.log(`halo ${this.nama}, selamat makan! `);
//     }
// }



// 2. function declaration
// 

// const methondMahasiswa = {

//     makan: function(porsi) {
//         this.energy += porsi;
//         console.log(`halo ${this.nama}, selamat makan! `);
//     },

//     main: function (jam) {
//         this.energy -= jam
//         console.log(`Halo ${this.nama}, selamat bermain!`) 
//      }
// }

// function Mahasiswa(nama, energy){
//     let mahasiswa = {}
//     mahasiswa.nama = nama
//     mahasiswa.energy = energy
//     mahasiswa.makan = methondMahasiswa.makan
//     mahasiswa.main = methondMahasiswa.main


//     return mahasiswa
// }

// let rian = Mahasiswa('rian', 10)
// let dian = Mahasiswa('dian', 10)


//  3. Constructor Function

// function Mahasiswa(nama, energy){
    
//     this.nama = nama
//     this.energy = energy

//     this.makan = function(porsi) {
//         this.energy += porsi;
//         console.log(`halo ${this.nama}, selamat makan! `);
//     }

    
//     this.main = function (jam) {
//         this.energy -= jam
//         if(this.energy <= 0){
//             console.log(`Energy mu habis, GAME OVER!`) 
//         } else{
//             console.log(`Halo ${this.nama}, selamat bermain!`) 
//         }
//      }

    
// }

// let rian = new Mahasiswa('rian', 10)
// let dian = new Mahasiswa('dian', 10)

// 4. Object.create

const methondMahasiswa = {

    makan: function(porsi) {
        this.energy += porsi;
        console.log(`halo ${this.nama}, selamat makan! `);
    },

    main: function (jam) {
        this.energy -= jam
        console.log(`Halo ${this.nama}, selamat bermain!`) 
     },

    tidur: function (jam) {
        this.energy += jam*2
        console.log(`Halo ${this.nama}, selamat tidur!`) 
     }
}

function Mahasiswa(nama, energy){
    let mahasiswa = Object.create(methondMahasiswa)
    mahasiswa.nama = nama
    mahasiswa.energy = energy



    return mahasiswa
}

let rian = Mahasiswa('rian', 10)
let dian = Mahasiswa('dian', 10)