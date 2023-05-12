//renderizando listas/key/previous state
//sempre que for utilizar lista deve colocar o key "Identificador"
import { useState } from 'react';

const ListRender = () => {
  const [List] = useState(['Alex', 'Paulo', 'Fabio', 'Caio', 'Carlos']);

  const [users, setUsers] = useState([
    { id: 1, name: 'Alexandre', age: 30 },
    { id: 2, name: 'Carlos', age: 28 },
    { id: 3, name: 'Fabio', age: 41 },
  ]);

  //previous state
  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);
    console.log(randomNumber);

    setUsers((prevUsers) => {
      return prevUsers.filter((user) => randomNumber !== user.id);
    });
  };

  return (
    <div>
      <ul>
        {/* a arrowfunction é continuado com parênteses porque no react o jsx é considerado objeto  */}
        {List.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>
      <button onClick={deleteRandom}> Delete random user</button>
    </div>
  );
};

export default ListRender;
