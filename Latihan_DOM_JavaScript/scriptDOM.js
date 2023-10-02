// DOM Selection
// (part 1)
// document.getElementById()
// document.getElementByTagName()
// document.getElementByClassName()

// (part 2)
// document.querySelector() mengembalikan element
// selector yang dimaksud diatas adalah selector css seperti "." "#" " section#b ul li:nth-child(2) "ect 

const p4 = document.querySelector('#b p');
p4.style.color = 'green';
p4.style.fontSize = '26px';

const li2 = document.querySelector('#b ul li:nth-child(2)');
li2.style.backgroundColor = 'orange';


// document.querySelectorAll() mengembalikan NodeList
const p = document.querySelectorAll('p');
for (let i = 0; i< p.length; i++) {
    p[i].style.backgroundColor = 'lightblue';
}


// mengubah node root , dengan mempersempit scopenya sebagai berikut
// const sectionB = document.querySelector('#b');
// const p4 = sectionB.getElementsByTagName('p')[0];
// p4.style.backgroundColor = 'lightblue';