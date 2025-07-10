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

// const el = `<div>${expression}</div>`






// const mhs = {
//     nama : 'Rian Muhammad',
//     umur : 20,
//     nrp : '218479132',
//     email : 'Rian@gmail.com'
// }


// const el = `
// <div className="mhs">
//     <h2 className=""> ${mhs.nama} </h2>
//     <span className=""> ${mhs.nrp}</span>
// </div>
// `

// // console.log(el);

// document.body.innerHTML = el



// looping

// const mhs = [
//     {
//     nama : 'rian',
//     email : 'rian@gmail.com'
// },
//     {
//     nama : 'rianisa',
//     email : 'rianisa@gmail.com'
// },
//     {
//     nama : 'kurni',
//     email : 'kurni@gmail.com'
// }
// ]

// const el = `
// <div className="mhs">
//     <p className=""> ${mhs.map(m => `<ul>
//         <li>${m.nama}</li>
//         <li>${m.nrp}</li>
//     </ul>`).join(' ')} </p>
// </div>
// `

// document.body.innerHTML = el




// Conditional
// ternary

// const lagu = {
//     judul: "sepatu",
//     penyanyi: 'tulus',
//     feat: 'rendy'
// }

// const el = `
// <div className="lagu">
//   <ul>
//     <li>${lagu.penyanyi}</li>
//     <li>${lagu.judul} ${lagu.feat ? ` (feat. ${lagu.feat})` : ''}</li>
//   </ul>
// </div>
// `


// document.body.innerHTML = el







// Nested
// HTML Fragment bersarang
const mhs = {
    nama : 'Rian Muhammad',
    semester: 5,
    matKul: [
        'rekayasa web',
        'analisis',
        'PSI',
        'PBO'
    ]

}
function cetakMatakuliah(matKul){
    return `
    <ol>
        ${matKul.map(mk => `<li className="">${mk}</li>`).join('')}
    </ol>
    `
}

const el = `
<div className="mhs">
 <h2 className="">${mhs.nama}</h2>
 <span className="semester">Semester : ${mhs.semester}</span>
 <h4 className="matkul">Mata Kuliah</h4>
 ${cetakMatakuliah(mhs.matKul)}
</div>
`


document.body.innerHTML = el