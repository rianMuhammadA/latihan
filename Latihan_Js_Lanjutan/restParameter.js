// Rest Parameter adalah sesuatu yang merepresentasikan argument pada function dengan jumlah yang tidak terbatas menjadi sebuah array ~ developer.mozilla.org

function myFunction(){
// return `a = ${a}, b = ${b}, myArgs = ${myArgs}`
// return myArgs

// return Array.from(arguments)
return [...arguments]

}

console.log(myFunction(1,2,3,4,5));


function jumlahkan(...angka){
//     let total = 0
//     for(const m of angka){
//         total += m
//     }

// return total

return angka.reduce((a,b) => a+b)
}
console.log(jumlahkan(1,2,3,4,5));



// array destructuring
// const kelompok1 = ['rian','afrian','andi','hilma','natasha']
// const [ketua,wakil,...anggota] = kelompok1
// console.log(ketua);
// console.log(wakil);
// console.log(anggota);



// object destructuring
// const team = {
//     pm: "rian",
//     fe1: "ahmad",
//     fe2: "randika",
//     be: "kaswar",
//     uiux: "Hilma",
//     do: "natasha",
// }

// const {pm, ...myTeam} = team
// console.log(pm);
// console.log(myTeam);


// filtering
function filterBy(type, ...values){
    return values.filter(v => typeof v === type)
}
console.log(filterBy('boolean',1,2,3,'Rian',false,10,true,'doddy'));
