// Destructuring Variable
// Adalah expression pada javascript yang membuat kita dapat membongkar nilai dari array atau properti dari object kedalam variable yang terpisah ~ MDN Web Docs

// Destructuring array

// const perkenalan = ['halo', 'nama', 'saya', 'Rian']
// // skipping items
// const [salam, , , nama] = perkenalan

// console.log();


// swap item
// let a = 1
// let b = 2

// console.log(a);
// console.log(b);
// [a,b] = [b,a]
// console.log(a);
// console.log(b);


// return value pada function
// function coba(){
//     return [1,2]
// }

// const [a,b] = coba()
// console.log(a);
// console.log(b);




// rest parameter
// const [a, ...values] = [1,2,3]
// console.log(a);
// console.log(values[0]);



// Destructuring object
// const mhs = {
//     nama: 'Rian',
//     umur: 20
// }

// const {nama, umur} = mhs
// console.log(nama);


// assignment tanpa deklarasi object, hasilnya sama dengan yang di atas
// ({nama, umur} = {nama: 'Rian',umur: 20})
// console.log(nama);



// assign ke variable baru
// const mhs = {
//     nama: 'Rian',
//     umur: 20
// }

// const {nama:n , umur:u} = mhs
// console.log(n);



// Memberikan Default Value
// const mhs = {
//     nama: 'Rian',
//     umur: 20,
//     email: 'rian@gmail'
// }

// const {nama:n , umur:u, email = 'email@default.com'} = mhs
// console.log(email);



// mengambil field pada object, setelah dikirim sebagai parameter untuk function

const mhs = {
    id: 12,
    nama: 'Rian',
    umur: 20,
    email: 'rian@gmail'
}

function getIdMhs({id}){
    return id
}

console.log(getIdMhs(mhs));