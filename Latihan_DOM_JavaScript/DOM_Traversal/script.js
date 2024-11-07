// const c = document.querySelector('.close');
// const content = document.querySelector('.container')
// c.addEventListener('click',function(){
//     content.innerHTML = ''
// });

// ^code di atas untuk menghilangkan card apabila tombol x diklik ranpa menggunakan prinsip DOM Traversal, yang akan bermaslah jika cardnya ada lebih dari satu, dia akan menghapus semua card atau tag yang memiliki class container^ (versi saya)

// event handling
// const close = document.querySelector('.close');
// const card = document.querySelector('.card');
// close.addEventListener('click',function(){
//     card.style.display = 'none';
// });

// ^^(versi wpu)


// DOM Traversal
const closes = document.querySelectorAll('.close');
// for(let i =0; i < close.length; i++){
//     close[i].addEventListener('click',function(e){
//         // close[i].parentElement.style.display = 'none';
//         e.target.parentElement.style.display = 'none';

//     })
// }

// ^perintah diatas adalah untuk merepresentasikan prinsip DOM Traversal, yang mana dengan menggunakan prinsip itu, masalah yang dialami pada program yang pertama bisa diatasi.^


closes.forEach(function(el){
    el.addEventListener('click',function(e){
        e.target.parentElement.style.display = 'none';
    });
});

// ^perintah di atas sama dengan perintah yang ada pada baris 21 - 27, hanya pada perulangannya menggunakan foreach, sehingga kita tidak perlu menuliskan atau membuat variable baru dan yang lainnya, lebih mudah dan singkat juga tentunya^ 

const nama = document.querySelector('.nama');
console.log(nama.parentElement.nextElementSibling);

// ^dua baris code diatas hanya untuk mencoba method-method yang ada dalam DOM Traversal, contoh lain selain parentElement ada : .nextElementSibling | .previousElementSibling | .parentNode | .nextSibling (dan lain sebagainya)^