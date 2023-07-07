import { useReducer, useState } from 'react';
// 2 - avançando no useReducer

const HookUseReducerII = () => {
  const initialTasks = [
    { id: 1, text: 'Fazer alguma coisa' },
    { id: 2, text: 'Fazer alguma coisa' },
  ];

  // função do reducer
  const taskReducer = (state, action) => {
    switch (action.type) {
      case 'ADD':
        const newTask = {
          id: Math.random(),
          text: taskText,
        };

        setTaskText('');

        return [...state, newTask];
      case 'DELETE':
        return state.filter((task) => task.id !== action.id);
      default:
        return state;
    }
  };

  // declaração do reduce                  taskReducer função que vai alterar o estado
  const [taskText, setTaskText] = useState('');
  const [tasks, dispatchTask] = useReducer(taskReducer, initialTasks);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatchTask({ type: 'ADD' });
  };

  const removeTask = (id) => {
    dispatchTask({ type: 'DELETE', id });
  };

  return (
    <div>
      <h3>Tarefas: </h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setTaskText(e.target.value)}
          value={taskText}
        />
        <input type="submit" value="Enviar" />
      </form>
      {tasks.map((task) => (
        <li key={task.id} onDoubleClick={() => removeTask(task.id)}>
          {task.text}
        </li>
      ))}
      <hr />
    </div>
  );
};

export default HookUseReducerII;
