// DOM Manipulation
// manipulation node method :

// document.createElement() untuk membuat element nya saja sepert tag p, a dll
// document.createTextNode() untuk membuat textnya saja isi yaa berupa teks
// dan untuk menyimpannya kita bisa gunakan appendChilde atau insert Before
// node.appendChilde() untuk menyatukan elemen dan teks node diatas
// node.insertBefore()
// parentNode.removeChild()
// parentNode.replaceChild()
// ect...


// buat elemen baru
const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('Paragraf Baru');
// simpan tulisan ke dalam paragraf
pBaru.appendChild(teksPBaru)

// simpan pBaru di section A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru); // simpat ke akhir dari sebuah elemen parent



const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('Item Baru');
liBaru.appendChild(teksLiBaru);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(liBaru,li2);


// removeChilde
const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);


// replaceChild
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const teksh2Baru = document.createTextNode('judul Baru!');

h2Baru.appendChild(teksh2Baru);

sectionB.replaceChild(h2Baru,p4)



pBaru.style.backgroundColor = 'lightgreen'
liBaru.style.backgroundColor = 'lightgreen'
h2Baru.style.backgroundColor = 'lightgreen'