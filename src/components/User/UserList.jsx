import User from "./User";
import "./user.css";

export default function UserList() {
  // TODO: Iterar por todos los usuarios que estan en moc/user.js
  // este componente va mostrar a todos los usuarios.
  return (
    <ul className="users-list">
      <User
        UserName="Adele Vance"
        Picture="./img/Adele Vance.jpg"
        Title="Inge"
      />
      <User
        UserName="Alex Wilber"
        Picture="./img/Alex Wilber.jpg"
        Title="Marketing"
      />
    </ul>
  );
}
