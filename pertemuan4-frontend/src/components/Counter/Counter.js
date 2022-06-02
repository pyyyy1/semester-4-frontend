// Import useEffect dan useState dari React (desctructing untuk menggunakan react)..
import { useEffect, useState } from "react";

function Counter() {
  /**
   * Membuat state menggunakan useState dan set nilai awal 0
   * UseState mengembalikan 2 nilai dan memberikan nilai awal:0
   * Berisi current value: result yang mengembalikan sepasang value.
   * Current State merupakan nilai saat ini yang berisi fungsi untuk mengupdate result:setResult atau state
   * Melakukan destructing array dari hasil useState
   */
  let [angka, setAngka] = useState(0);

  function addAngka() {
    /**
     * Update state result menggunakan fungsi setResult
     */
    setAngka(angka += 1);
    console.log(angka);
  }

  function updateDOM() {
    console.log("lifescycle:dimount");
    document.title = `Result: ${angka}`;
  }

  useEffect(updateDOM, [angka]);

  console.log("Lifecycle: Component direder:")

  return (
    <div>
      <p>Result: {angka} </p>
      {/* Menambahkan event button onclick */}
      <button onClick={ addAngka }>Add</button>
    </div>
  );
}

export default Counter;