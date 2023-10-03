const ubahBg = document.getElementsByTagName('button')[0];
// const bd = document.querySelector('body');

ubahBg.addEventListener('click',function(){
    // document.body.style.backgroundColor = 'salmon' ;
    document.body.classList.toggle('salmon');
});



const tombolAcakWarna = document.createElement('button');
const teksTombol = document.createTextNode('Acak Warna');
tombolAcakWarna.appendChild(teksTombol);
tombolAcakWarna.setAttribute('type','button');
ubahBg.after(tombolAcakWarna);

tombolAcakWarna.addEventListener('click', function(){
    const r = Math.round(Math.random() *255+1);
    const g = Math.round(Math.random() *255+1);
    const b = Math.round(Math.random() *255+1);
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
})



const redSlide = document.querySelector('input[name=red]')
const greenSlide = document.querySelector('input[name=green]')
const blueSlide = document.querySelector('input[name=blue]')

redSlide.addEventListener('input',function(){
    let re = redSlide.value;
    let gr = greenSlide.value;
    let bl = blueSlide.value;
    document.body.style.backgroundColor = 'rgb('+re+','+gr+','+bl+')'
});
greenSlide.addEventListener('input',function(){
    let re = redSlide.value;
    let gr = greenSlide.value;
    let bl = blueSlide.value;
    document.body.style.backgroundColor = 'rgb('+re+','+gr+','+bl+')'
});
blueSlide.addEventListener('input',function(){
    let re = redSlide.value;
    let gr = greenSlide.value;
    let bl = blueSlide.value;
    document.body.style.backgroundColor = 'rgb('+re+','+gr+','+bl+')'
});



document.body.addEventListener('mousemove',function (event) {
    // posisi mouse
    // console.log(event.clientX);

    // ukuran browser
    // console.log(window.innerWidth);
    const xPos = Math.round((event.clientX / window.innerWidth)*255);
    const yPos = Math.round((event.clientY / window.innerHeight)*255);
    const bPos = Math.round((yPos + xPos) /2) ;

    document.body.style.backgroundColor = 'rgb('+xPos+','+yPos+','+bPos+')'
})