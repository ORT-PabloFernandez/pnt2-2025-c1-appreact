function User(props) {
  // retorna el JSX que luego es interpretado por REACT
  // cada vez que dentro del JSX quiero agregar variables
  // porsiones de javascript tengo que encerrar en {}
  return (
    <div>
      <l3>{props.Nombre}</l3>
      <l3> {props.Apellido}</l3>
    </div>
  );
}

export default User;
