// DOM Manipulation
// manipulation element method :
// element.innerHTML
// element.style.<property>
// element.setAttribute()
// element.classList
// ect..

// innerHTML
// const judul = document.getElementById('judul');
// judul.innerHTML = '<em>Rian Muhammad Af</em>'

// apapun yang kita masukkan dalam innerHTML bisa dilakukan akan tetapi dia akan menghilangkan semua isi sebelumnya

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = 'hello world'


// style.<property>
// const judul = document.querySelector('#judul');
// judul.style.color = 'lightgreen'
// judul.style.backgroundColor = 'green'


// setAttribute() untuk mengelola attribute :
// element.getAttribute() untuk menampilkan isi dari attribute dari element dituju
// element.setAttribute() untuk menambahkan attribut baru pada elemen yang dituju
// element.removeAttribute() untuk menghilangkan attribute dari element yang dituju
// attribute itu singkatnya adalah sesuatu yang menempel pada element html seperti att id,href,class ect

const judul = document.getElementsByTagName('h1')[0];
judul.setAttribute('name','Rian');
const a = document.querySelector('section#a a');
a.setAttribute('id','link');
a.removeAttribute('href'); 


// classList. untuk mengelola class :
// element.classList.add() untuk menambah
// element.classList.remove() untuk menghilnagkan
// element.classList.toggle() apabila elemennya ada toggle akan menghilangkan classnya jika elemennya todak ada maka sebaliknya
// element.classList.item() untuk mengetahui class tertentu
// element.classList.contains() untuk memeriksa class tertentu ada atau tidak
// element.classList.replace() untuk mengganti class yang ada dengan yang baru
const p2 = document.querySelector('.p2');
p2.classList.add('label');
p2.classList.remove('label');
p2.classList.toggle('label');
p2.classList.item(1); 
// hitungnya dari 0
p2.classList.contains('label');
p2.classList.replace('label','a');