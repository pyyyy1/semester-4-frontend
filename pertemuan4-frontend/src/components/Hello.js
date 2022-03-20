/**
 * Membuat component Hello.
 * Component Hello menerima inputan: props.
 *
 */
const Hello = ({nama, major}) => {
  // Melakukan destructing props (object)
  const { name } = props;

  return (
    <div className="hello">
      <h2>Hello React</h2>
      <p>Saya {name} - Frontend Engineering</p>
    </div>
  );
}

export default Hello;
