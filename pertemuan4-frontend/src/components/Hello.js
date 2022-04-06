/**
 * Membuat component Hello.
 * Component Hello berfungsi untuk merender elemen-elemen HTML dan menerima inputan dsb.
 *
 */
 const Hello = ({name, major}) => {
  return (
    <div className="hello">
      <h2>Hello React</h2>
      <p>Saya {name} - Frontend Engineer</p>
      <p>Jurusan {major}</p>
    </div>
  );
}

export default Hello;
