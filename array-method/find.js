// Membuat array of object
const users = [
  {
    name: "Zhafia",
    age: 19,
  },
  {
    name: "Michael",
    age: 40,
  },
  {
    name: "Hannah",
    age: 35,
  },
];

/**
 * Menjalankan method find.
 * Mencari 1 data berdasarkan kondisi tertentu.
 * Kondisi: umur lebih dari 21
 */
const foundUser = users.find(function (user) {
  return user.age > 18;
});

console.log(foundUser);
