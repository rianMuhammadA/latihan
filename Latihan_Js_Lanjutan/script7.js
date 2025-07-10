// ambil semua element video
const videos = Array.from(document.querySelectorAll('[data-duration]'))


// pilih hanya yang 'Javascript Lanjutan'
let jsLanjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))


// ambil durasi masing-masing video
.map(item => item.dataset.duration)


// ubah duraso menjadi int, ubah menit menjadi detik
.map(waktu => {
    // 10:20 -> [10, 20] split
    const parts = waktu.split(':').map(part => parseInt(part))
    return (parts[0] * 60) + parts[1]
})


// jumlahkan semua detik
.reduce((total, detik) => total + detik, 0)/* angka 0 merupakan nilai awal default */


// ubah formatnya menjadi menit
const jam = Math.floor(jsLanjut / 3600)
jsLanjut = jsLanjut - jam * 3600

const menit = Math.floor(jsLanjut / 60)
const detik = jsLanjut - menit * 60

// simpan di DOM
const pDurasi = document.querySelector('.total-durasi')
pDurasi.textContent = `${jam} jam, ${menit} menit, ${detik} detik.`

const jumlahVideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length
const pJmlVideo = document.querySelector('.jumlah-video')

pJmlVideo.textContent = `${jumlahVideo} Videos`



console.log(jumlahVideo);