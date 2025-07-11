// new looping
// for..of = definisinya adalah sebuah looping yang bisa mengulang atau menulusuri objek objek yang iterable

// contoh objek iterable:
// -String
// -Array
// -Arguments / NodeList
// -TypedArray
// -Map
// -Set
// -Under-defined iterables 

// array
const mahasiswa = ['Rian','Galang','Dolas']

// for (let i = 0; i < mahasiswa.length; i++) {
//     console.log(mahasiswa[i]); 
// }

// mahasiswa.forEach(m => console.log(m))

// with for..of
// for(const m of mahasiswa){
//     console.log(m);
// }


// string *.forEach() tidak bisa me looping string sendangkan for..of bisa*
const nama = 'Rian muhammad'
// for(const n of nama){
//     console.log(n);
// }



// mahasiswa.forEach((m, i) => {
//     console.log(`${m} adalah mahasiswa ke-${i +1}`);
// })

// for(const [i,m] of mahasiswa.entries()){
//     console.log(`${m} adalah mahasiswa ke-${i +1}`)
// }



// NodeList
const liNama = document.querySelectorAll('.nama')

// liNama.forEach(n => console.log(n.textContent))  //in some browser this code not work
// for(n of liNama){
//     console.log(n.innerHTML);
// }



// Arguments
// function jumlahkanAngka(){
//     let jumlah = 0
//     for(a of arguments){
//         jumlah += a
//     }
//     return jumlah
// }

// console.log(jumlahkanAngka(1,2,3,4,5));



// for..in = definisinya adalah membuat looping hanya untuk enurable yakni properti pada object
const mhs = {
    nama: 'Rian',
    umur: 20,
    email: 'Rian@gmail.com'
}

for(m in mhs){
    // console.log(m);
    console.log(mhs[m]);
}

