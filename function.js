/**
 * Membuat fungsi untuk menghitung umur
 * Rumus : Tahun sekarang - tahun kelahiran
 */

// Function Declaration
function hitungUmur(bod) {
    const tahunSekarang = 2022;
    const hasil = tahunSekarang - bod;
    console.log(hasil);
}

hitungUmur(2000);
hitungUmur(1996);

// Function Expression
const hitungUmur = function (bod) {
    const tahun = tahunSekarang = 2022;
    const hasil = tahunSekarang - bod;
    console.log(hasil);
};

hitungUmur(2000);
hitungUmur(1996);

// Arraw Function membuat fungsi pakai tanda panah
const hitungUmur = (bod) => 2022 - bod;

console.log(hitungUmur(2002));

// Arrow Function tnpa tnda panah
const hitungUmur = (bod) => {
    const tahun = tahunSekarang = 2022;
    const hasil = tahunSekarang - bod;
    return hasil;
};

console.log(hitungUmur(2000));
console.log(hitungUmur(1996));

// Default Paramater untuk mencegah error atau kesalahan yang bisa
// saja terjadi karena kesalahan user yang tdk mengirimkan data atau programmer
// function hitungUmur = (bod = 2000) {
//     const tahunSekarang = 2022;
//     const umur = tahunSekarang - bod;
//     return hasil;
// };

// console.log(hitungUmur());
// console.log(hitungUmur());