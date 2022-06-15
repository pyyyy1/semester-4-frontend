/**
 * Membuat component Hello.
 * Component Hello berfungsi untuk merender elemen-elemen HTML dan menerima inputan dsb.
 *
 */
 function Hello({name, major}) {
    return (
      <div className="hello">
        <h2>Hello React</h2>
        <p>Saya {name} - Memiliki skills programming</p>
        <p>Jurusan {major}</p>
      </div>
    );
  }
  
  /**
   * Membuat component Header.
   * Component Header berfungsi untuk menampilkan navigasi.
   * Menggunakan react sama seperti bermain lego, menyatukan puzzle
   * Menampilkan dan membentuk element untuk menjadi sebuah component
   */
  function Header() {
    return (
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Pricelist</li>
        </ul>
      </nav>
    );
  }
  
  /**
   *
   * Mengembalikan nilai yang ada pada component main
   * Component Main berfungsi untuk menampilkan dan menampung konten utama
   */
  
  function Main() {
    return (
      <main>
        {/**
         * Mengirim props ke component Main.
         * nama props: name
         */}
        <Hello name="Fia" major="Informatika"/>
        <Hello name="Agil" major="Manajemen Informatika"/>
        <Hello name="Mikel" major="Sistem Informasi"/>
        <Hello name="Hannah" major="Digital Marketing"/>
        <Hello name="Jonas" major="Bisnis Digital"/>
        <Hello name="Martha" major="Ilmu Komunikasi"/>
      </main>
    );
  }
  
  /**
   * Membuat component Footer.
   * Component Footer menampilkan footer pada website.
   * @returns
   */
  function Footer() {
    return (
      <footer>
        <p>Copyright @zhafiara</p>
        <small>Created by React JS</small>
      </footer>
    );
  }
  
  /**
   * Membuat component App.
   * Component utama yang menampung components lain.
   */
  function App() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
  
  const root = document.getElementById("root");
  ReactDOM.render(<App />, root);
  