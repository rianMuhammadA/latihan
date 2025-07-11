// callback
// callback adalah function yang dikirimkan sebagai parameter pada function yang lain ~ developer.mozilla.org
// callback adalah sebuah function yang dieksekusi setelah fungsi lain selesai dijalankan ~ codeburst.io


// Synchronous Callback
// function halo(nama){
//     alert(`Halo ${nama}`)
// }

// function tampilkanPesa(callback){
//     const nama = prompt('Masukan nama Anda')
//     callback(nama)
// }

// tampilkanPesa(nama => {alert(`Halo ${nama}`)})





// console.log('mulai');

// mahasiswa.forEach(m => {
//     for (let i = 0; i < 1000; i++) {
//         console.log('a');
//     }
//     console.log(m.nama)
// })

// console.log('selesai');




//Asynchronous callback
// function getDataMahasiswa(url, success, error){
//     let xhr = new XMLHttpRequest()

//     xhr.onreadystatechange = function(){
//         if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//                 success(xhr.response)
//             } else if( xhr.status === 404){
//                 error()
//             }
//         }
//     }
//     xhr.open('get', url)
//     xhr.send()
// }

// console.log('mulai');
// getDataMahasiswa('data/mahasiswa.json', (result) => {
//     const mahasiswa = JSON.parse(result)
//     mahasiswa.forEach(m => console.log(m.nama))
// }, () => {
    
// })
// console.log('selesai');

// jQuery version
console.log('mulai');

$.ajax({
    url: 'data/mahasiswa.json',
    success: (mahasiswa) =>{
        mahasiswa.forEach(m => console.log(m.nama))
    },
    error: (e) =>{
        console.log(e.responseText);
    }
})

console.log('selesai');