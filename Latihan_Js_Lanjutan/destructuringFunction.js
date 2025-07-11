// Destructuring

// function kalkulasi(a,b){
//     return [a+b,a-b,a*b,a/b]
// }

// const jumlah= perjumlahanPerkalian(2,3)[0]
// const kali= perjumlahanPerkalian(2,3)[1]
// console.log(jumlah);
// console.log(kali);


// with destructuring
// const [jumlah, kali] = perjumlahanPerkalian(2,3)
// console.log(jumlah);
// console.log(kali);


// const [tambah,kurang,kali,bagi = 'tidak ada'] = kalkulasi(2,3)
// console.log(bagi);


// function kalkulasi(a,b){
//     return {
//         tambah: a+b,
//         kurang: a-b,
//         kali: a*b,
//         bagi: a/b
//     }
// }

// const {bagi,tambah,kali,kurang} = kalkulasi(2,3)
// console.log(kurang);



// Destructuring function argumments

const mhs1 = {
    nama: 'Rian',
    umur: 20,
    email: 'Rian@gmail.com',
    nilai: {
        tugas: 60,
        uts: 70,
        uas: 80,
    }
}

// function cetakMhs(mhs){
//     return `halo, nama saya ${mhs.nama}. Saya berumur ${mhs.umur} tahun`
// }


// console.log(cetakMhs(mhs1));


// with destructuring below
function cetakMhs({nama, umur, nilai: {tugas,uts,uas}}){
    return `halo, nama saya ${nama}. Saya berumur ${umur} tahun dan nilai uas saya adalah ${uas}`
}
console.log(cetakMhs(mhs1));