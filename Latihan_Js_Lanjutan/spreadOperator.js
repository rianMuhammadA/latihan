// Spread Operator dan Rests Parameter direpresentasikan sebagai tiga titik *...*

// Spread Operator adalah sebuah operator yang memecah (expand / unpack) iterables menjadi single element ~ developer.mozila.org

// const mahasiswa = ['Rian','muhammad','afriansyah']
// // console.log(...mahasiswa[0]);

// // untuk menggabungkan 2 array
// const dosen = ['Rahma','Andi','Agus']
// const orang = [...mahasiswa, 'aji', ...dosen]
// // const orang = mahasiswa.concat(dosen)

// console.log(orang);



// men-copy array
// const mahasiswa = ['Rian','muhammad','afriansyah']
// // const mahasiswa1 = mahasiswa

// mahasiswa1 = [...mahasiswa]
// mahasiswa1[0] = 'fajar'

// console.log(mahasiswa);

// const liMahasiswa = document.querySelectorAll('li')
// const mhs = [...liMahasiswa].map(m => m.textContent)

// console.log(mhs);


const myName = document.querySelector('.myName')

const huruf = [...myName.textContent].map(h => `<span className="">${h}</span>`).join('')
myName.innerHTML = huruf

console.log(huruf);
