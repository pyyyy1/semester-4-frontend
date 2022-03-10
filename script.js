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
      <Hello name="Fia" />
      <Hello name="Agil" />
      <Hello name="Mikel" />
      <Hello name="Hannah" />
      <Hello name="Jonas" />
      <Hello name="Martha" />
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
      <small>Created by ReactJS</small>
    </footer>
  );
}

/**
 * Membuat component Hello.
 * Component Hello menerima inputan: props.
 *
 */
function Hello(props) {
  // Melakukan destructing props (object)
  const { name } = props;

  return (
    <div>
      <h2>Hello React</h2>
      <p>Saya {name} - Frontend Engineer</p>
    </div>
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
