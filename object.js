// Membuat object menggunakan {}
const user = {
  nama: "Zhafia Rabbani Amalia",
  age: 19,
  major: "Informatics Engineering",
};

// Mengakses nilai pada object {}
// console.log(user.nama);
// console.log(user.age);
// console.log(user.major); // Jadi, bisa pakai cara yang ini atau
// console.log(user["nama"]); // Menggunakan cara yang ini okaiiiiiiii;

// Ini sama kan dg array dan gamungkin kita tulis satu persatu
// Tapi juga gabisa looping sendiri ya karena ada looping khusus
// Kalo di array itu for of
// Kalo di object itu for in

// For in
for (const key in user) {
  // console.log(key);
  console.log(key);
  // console.log(typeof[key]);
}

// So jadi ada 2 cara yang ini

// Nah bisa gak digabungin array dan object? Ini adalah tugasnya wkwkwk
