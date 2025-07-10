// Template Literal / Template String
// Template Literal adalah String literal yang memungkinkan adanya expression di dalamnya ~ MDN Web Docs

// String Literal dapat digunakan dengan beberapa cara yankni dengan 'string',"string",`string`

// Template Literal hanya bisa dilakukan dengan `` back tick
// dengan back tick kita bisa melakukan:
// 1. Multi-Line String
// 2. Embedded Expression
// 3. HTML Fragments 
// 4. Expression Interpolation 
// 5. Tagged Template

// contoh penggunaan
// `sring text`

// multi line string
// `
// string tag baris 1
// string tag baris 2
// string tag baris 3`

// embedded expression
// `string text ${expression} string text`

// tagged template
// tag `string text ${expression} string text`

// console.log(`string 1

// string 2`);


// const nama = "Rian"
// const umur = 20
// console.log(`Halo Nama saya ${nama}, saya berumur ${umur} tahun`);


// embedded expression
// console.log(`${1 + 1}`);
// console.log(`${alert('olla')}`);

// const x = 10
// console.log(`${(x % 2 == 0) ? 'genap' : 'ganjil'}`);


// HTML Fragment
// const mhs = {
//     nama : 'Rian Muhammad',
//     umur : 20,
//     nrp : '218479132',
//     email : 'Rian@gmail.com'
// }

// const el = ``