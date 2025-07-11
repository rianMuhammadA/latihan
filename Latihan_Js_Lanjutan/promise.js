// $.ajax({
//     url: 'https://api.jikan.moe/v4/seasons/2023/summer?sfw',
//     success: judul => console.log(judul.data)
// })


// fetch('https://api.jikan.moe/v4/seasons/2023/summer?sfw').then(response => response.json()).then(response => console.log(response))



// Promise
// adalah object yang merepresentasikan keberhasilan/ kegagalan dari sebuah event yang asynchronous di masa yang akan datang
// janji (terpenuhi / ingkar)
// states(fulfilled / rejected / pending)
// callback (resolve / reject / finally)
// aksi (then / catch)


// contoh
// let ditepati = false
// const janji1 = new Promise((resolve, reject) => {
//     if (ditepati) {
//         resolve('janji telah ditepati')
//     } else {
//         reject('janji telah diingkari')
//     }
// })
// janji1.then(respond => console.log('ok : ' + respond)).catch(respond => console.log(`Not Ok! : ${respond}`))



// contoh beserta pending
// let ditepati = true
// const janji2 = new Promise((resolve, reject) => {
//     if (ditepati) {
//         setTimeout(() => {
//             resolve('ditepati setelah beberapa waktu')
//         }, 2000);
//     } else {
//         setTimeout(() => {
//             resolve('Tidak ditepati setelah beberapa waktu')
//         }, 2000);
//     }
// })

// console.log('mulai');
// // console.log(janji2.then(() => console.log(janji2)));
// janji2.finally(() => console.log('selesai menunggu')).then(respond => console.log('ok : ' + respond)).catch(respond => console.log(`Not Ok! : ${respond}`))
// console.log('selesai');



// Promise.all

const film = new Promise( resolve => {
    setTimeout(() => {
        resolve([{
            "judul": "berlian hijau",
            "Sutradara": "Agus",
            "aktor": "Agus, iwan, wawa, nadya",
        }])
    }, 1000);
})
const cuaca = new Promise( resolve => {
    setTimeout(() => {
        resolve([{
            "kota": "Bandung",
            "temp": 26,
            "kondisi": "cerah berawan",
        }])
    }, 500);
})

Promise.all([film,cuaca])
    // .then(res => console.log(res))
    .then(res => {
        const [film, cuaca] = res 
        console.log(film);
        console.log(cuaca);
    })
