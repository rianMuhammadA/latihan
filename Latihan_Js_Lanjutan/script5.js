// Arrow function
// arrow function adalah bentuk lain yang lebih ringkas dari function expression ~ MDN

// Function Expression
// const tampilNama = function (nama){
//     return `Halo, ${nama}`
// }

// console.log(tampilNama('Rian'));

// arrow function
// const tampilNama = (nama) => {return `Halo, ${nama}` }
// console.log(tampilNama('afrian'));


// const tampilNama = (nama, waktu) => {return `Selamat ${waktu}, Halo ${nama}` }
// console.log(tampilNama('afrian','malam'));

// apabila parameternya 1 tidak perlu pakai kurung
// disebut juga dengan implisit return
// const tampilNama = nama => `Halo, ${nama}` 
// console.log(tampilNama('afrian'));


// apabila tidak ada parameternya, kita wajib menuliskan kurung
// const tampilNama = () => `Hello World!`
// console.log(tampilNama());




// let mahasiswa = ['rian','kurniawan','angga']
// // without arrow function
// // let jumlahHuruf = mahasiswa.map(function(nama){
// //     return nama.length
// // })
// // console.log(jumlahHuruf);

// // with arrow function
// // let jumlahHuruf = mahasiswa.map(nama => nama.length)
// // console.log(jumlahHuruf);

// // nama di dalam function sama dengan nama: nama,
// let jumlahHuruf = mahasiswa.map(nama => ({nama, jumlahHuruf: nama.length}))
// console.table(jumlahHuruf);


// penggunaan konsep "this" dalam arrow function

// constructor function
// without arrow function
// const Mahasiswa = function() {
//     this.nama = 'rian'
//     this.umur = 20
//     this.sayHello = function(){
//         console.log(`Halo, nama saya ${this.nama}, dan saya berumur ${this.umur}`);
//     }
// }

// const rian = new Mahasiswa()

// with arrow function
// const Mahasiswa = function() {
//     this.nama = 'rian'
//     this.umur = 20
//     this.sayHello = () =>{
//         console.log(`Halo, nama saya ${this.nama}, dan saya berumur ${this.umur}`);
//     }
// }

// const rian = new Mahasiswa()



// Object literal
// const mhs1 = {
//     nama: 'rian',
//     umur: 20, 
//     sayHello: ()  =>{
//         // console.log(`Halo, nama saya ${this.nama}, dan saya berumur ${this.umur}`);
//         console.log(this);
//     }
// }


// const Mahasiswa = function() {
//     this.nama = 'rian'
//     this.umur = 20
//     this.sayHello = function(){
//         console.log(`Halo, nama saya ${this.nama}, dan saya berumur ${this.umur}`);
//     }

//     // setInterval(() => {
//     //     console.log(this.umur++);
//     // }, 500)

// }

// const rian = new Mahasiswa()






const box = document.querySelector('.box')

box.addEventListener('click', function(){
    let satu = 'size'
    let dua = 'caption'

    if (this.classList.contains(satu)) {
        [satu, dua] = [dua, satu]
    }


    // let that = this
    this.classList.toggle(satu)
    // setTimeout(function(){
    //     that.classList.toggle('caption')
    setTimeout(() => {
        this.classList.toggle(dua)
    }, 600)
})