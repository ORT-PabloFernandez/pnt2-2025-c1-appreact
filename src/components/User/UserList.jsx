import User from "./User";
import "./user.css";
import users from "../moc/users";

export default function UserList() {
  // TODO: Iterar por todos los usuarios que estan en moc/users.js
  // este componente va mostrar a todos los usuarios.
  console.log(users);
  return (
    <ul className="users-list">
      {users.map((user) => (
        <User
          UserName={user["Display name"]}
          Picture={`./img/${user["Display name"]}.jpg`}
          Title={user.Title}
        />
      ))}
    </ul>
  );
}
