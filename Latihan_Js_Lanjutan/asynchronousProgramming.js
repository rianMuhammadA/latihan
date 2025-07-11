// tujuan mempelajari asynchronous programming agar kedepannya tidak bingung ketika dihadapkan dengan teknik teknik asynchronous pada javascript seperti callback, promise, ajax, async dam await

// Javascript?
// Yakni bahasa pemrograman tingkat tinggi dan dinamis yang secara umum dapat berjalan pada browser ~ wikipedia

// javascript is a single-threaded, non-blocking, asynchronous and concurrent language ~ latentflip  
// Single-threaded?
// thread yakni Urutan eksekusi kode yang dapat dilakukan secara bebas/ independent satu sama lain
// 
// Kesimpulan
// Single vs multi thread
// Lingkungan eksekusi 'task'

// Blocking vs non-Blocking
// teknik 'ngoding' (IO related) 

// Synchronous vs Asynchronous
// teknik 'ngoding' (HTTP Request related)

// concurrent vs parallel
// Lingkungan eksekusi 'task'\

console.log('satu');
setTimeout(() => {
    console.log('dua');
}, 5000);
console.log('tiga');