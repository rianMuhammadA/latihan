// DOM Selection
// document.getElementById()

const judul = document.getElementById('judul');
// getElementById() digunakan untuk menyeleksi elemen memiliki id yang dituliskan

judul.style.color = 'pink';
judul.style.backgroundColor = 'purple';
// style. (berfungsi untuk memberikan style css pada variable judul)
judul.innerHTML = 'Rian Muhammad A'
// innerHTML digunakan untuk mengubah isi html


// document.getElementsByTagName() mengembalikan HTMLCollections
const p = document.getElementsByTagName('p');
// getElementsByTagName() digunakan untuk menyeleksi seluruh tag yang dituliskan dan dikembalikan dengan bentuk array

p[0].style.backgroundColor = 'lightgreen'
// p[1].style.backgroundColor = 'lightblue'
// p[2].style.backgroundColor = 'lightblue'
// p[3].style.backgroundColor = 'lightblue'
for (let i = 1; i < p.length; i++) {
    p[i].style.backgroundColor = 'lightblue';
    
}
// p.style.backgroundColor = 'blue' ~ fungsi ini tidak dapat digunakan karena p merupakan array, yang bisa di warnai hanya elementnya saja, jika ingin berjalan perlu diberikan index pada variablenya

const h1 = document.getElementsByTagName('h1')[0];
// walaupun tag h1 hanya ada satu tetap document... akan mengembalikan nilai HTMLColection dan untuk mengambil element nya maka ditambahkan index [0] agar terseleksi 
h1.style.fontSize = '30px';


// document.getElementsByClassName()
// mengembalikan HTMLCollection
const p1 = document.getElementsByClassName('p1');
p1[0].innerHTML = 'ini dibuat di javaScript'