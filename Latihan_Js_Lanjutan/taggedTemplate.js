// Tagged Template merupakan Bentuk yang lebih kompleks dari Template literals, memungkinkan kita untuk membaca template literals melalui sebuah function ~ MDN Web Docs

// const nama = 'Rian'
// const umur = 20

// function coba(strings, ...values){
//     // let result = '';
//     // strings.forEach((str, i) => {
//     //     result += `${str}${values[i] || ''}`
//     // })
//     // return result

//     return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}` , '')
// }

// const str = coba`Halo, nama saya ${nama}, umur saya ${umur} tahun`
// console.log(str);




// hihglight

const nama = 'Rian'
const umur = 20
const email = 'Rianma@gmail.com'

function hihglight(strings, ...values){
    return strings.reduce((result, str, i) => `${result}${str}<span style="background-color:salmon;">${values[i] || ''}</span>` , '')
}

const str = hihglight`Halo, nama saya ${nama}, umur saya ${umur} tahun, email saya adalah ${email}`

document.body.innerHTML = str



// Penggunaan lain dari tagged templates antara lain adalah 
// 1. Escaping HTML Tags [sanitasi html tags]
// 2. Translation & Internationalization [mengalihkan bahasa]
// 3. Styled Components