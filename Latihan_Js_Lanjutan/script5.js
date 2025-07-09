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




let mahasiswa = ['rian','kurniawan','angga']
// without arrow function
// let jumlahHuruf = mahasiswa.map(function(nama){
//     return nama.length
// })
// console.log(jumlahHuruf);

// with arrow function
// let jumlahHuruf = mahasiswa.map(nama => nama.length)
// console.log(jumlahHuruf);

// nama di dalam function sama dengan nama: nama,
let jumlahHuruf = mahasiswa.map(nama => ({nama, jumlahHuruf: nama.length}))
console.table(jumlahHuruf);