// const p3 = document.querySelector('.p3');

// function ubahWarnaP2() {
//     p2.style.backgroundColor = 'pink';
// }
// function ubahWarnaP3() {
//     p2.style.backgroundColor = 'pink';
// }


// const p2 = document.querySelector('.p2');
// p2.onclick = ubahWarnaP2;


// const p4 = document.querySelector('section#b p');
// p4.addEventListener('click', function(){
//     const ul = document.querySelector('section#b ul');
//     const liBaru = document.createElement('li');
//     const textLiBaru = document.createTextNode('item batu');
//     liBaru.appendChild(textLiBaru);
//     ul.appendChild(liBaru);
// });



const p3 = document.querySelector('.p3');
// p3.onclick = function () {
//     p3.style.backgroundColor = 'blue'
    
// }
// p3.onclick = function () {
//     p3.style.color = 'red'
    
// }
p3.addEventListener('mouseenter',function(){
    p3.style.backgroundColor = 'blue'
});
p3.addEventListener('mouseleave',function(){
    p3.style.backgroundColor = 'white'
});