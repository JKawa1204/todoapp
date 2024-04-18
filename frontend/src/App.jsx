import { useState, useEffect } from 'react';
import { CreateTodo } from './Componenets/CreateTodo';
import { Todos } from './Componenets/Todos';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/todos")
      .then(async (res) => {
        const json = await res.json();
        setTodos(json.todos);
      })
      .catch(error => {
        console.error('Error fetching todos:', error);
      });
  }, []); // Empty dependency array ensures the effect runs only once after initial render


  

  return (
    <div>
      <CreateTodo />
      {todos ? <Todos todos={todos} /> : <p>Loading todos...</p>}
    </div>
  );
}

export default App;
