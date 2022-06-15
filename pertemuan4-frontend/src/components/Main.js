/**
 * Mengembalikan nilai yang ada pada component main
 * Component Main berfungsi untuk menampilkan dan menampung konten utama
 */

 import Hello from './Hello';

 const Main = () => {
      return (
         <main>
              <Hello name="Fia" />
              <Hello name="Agil" />
              <Hello name="Hannah" />
              <Hello name="Jonas" />
              <Hello name="Gaby" />
              <Hello name="Mikel" />
         </main>
      )
  }
       
 export default Main;