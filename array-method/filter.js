// Membuat array of object
const users = [
  {
    name: "Fia",
    age: 19,
  },
  {
    name: "Michael",
    age: 35,
  },
  {
    name: "Hannah",
    age: 30,
  },
];

/**
 * Menjalankan method filter.
 * Mencari semua data berdasarkan kondisi tertentu.
 * Kondisi: umur lebih dari 21
 */
const filteredUser = users.filter(function (user) {
  return user.age > 18;
});

console.log(filteredUser);
