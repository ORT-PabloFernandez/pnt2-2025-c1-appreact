import User from "./User";
import "./user.css";
//import users from "../moc/users";

export default function UserList(props) {
  // TODO: Iterar por todos los usuarios que estan en moc/users.js
  // este componente va mostrar a todos los usuarios.

  return (
    <ul className="users-list">
      {props.Users.map((user) => (
        <User
          UserName={user["Display name"]}
          Picture={user.Picture}
          Title={user.Title}
        />
      ))}
    </ul>
  );
}
