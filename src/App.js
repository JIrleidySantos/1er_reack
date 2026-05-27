
import { Item } from './js/Item';
import { Button } from './js/Button';
import './App.css';
import React from 'react';
import { TodoList } from './js/TodoList';
import { Header } from './js/Header';
import { Search } from './js/Search';


/*const tasks = [{text:'Revisar examenes', completed: true},
                {text:'Escrbir', completed: false},
                {text:'Pegar', completed: true}, 
                {text:'nadar', completed: true},
                {text:'cortar', completed: false},
                {text:'dibujar', completed: false},
                {text:'Leer', completed: false}]*/


function App() {
  const API_URL = 'http://localhost:60/ReatService/Service.php';

  const [tasks_m, setTasks] = React.useState([]);
  //const [tasks_m, setTasks] = React.useState(tasks);
  const [loading, setLoading] = React.useState(true);
  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);

  const loadTasks = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error('Error al consumir el servicio:', error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    loadTasks();
  }, []);

  const numberTasksCompleted =
    tasks_m.filter(task => task.completed).length;

  const totalTasks = tasks_m.length;


  const searchTodos = tasks_m.filter((task) => {

    if (!task || !task.text) {
      return false;
    }

    const searchText = (searchValue || "").toLowerCase();

    return task.text
      .toLowerCase()
      .includes(searchText);

  });

  const completedTasks = (text) => {
    const newTasks = [...tasks_m];
    const indexTasks = newTasks.findIndex(tasks_m => tasks_m.text === text);
    newTasks[indexTasks].completed = true;
    setTasks(newTasks);
  }

  const deleteTasks = async (id) => {

    try {

      await fetch(API_URL, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: id
        })
      });

      const newTasks = tasks_m.filter(task => task.id !== id);

      setTasks(newTasks);

    } catch (error) {

      console.error('Error al eliminar:', error);

    }

  }
  const addTask = async (text) => {

    try {

      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          text: text
        })
      });

      const data = await response.text();

      console.log(data);

      const newTask = JSON.parse(data);

      setTasks((prevTasks) => [...prevTasks, newTask]);

    } catch (error) {

      console.error(error);

    }

  }

  return (
    <React.Fragment>

      <Header completed={numberTasksCompleted} total={totalTasks} />

      <Search searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {searchTodos.map(task => (
          <Item key={task.text}
            text={task.text}
            completed={task.completed}
            onCompleted={() => completedTasks(task.text)}
            onDelete={() => deleteTasks(task.id)} />
        ))}
      </TodoList>

      <Button addTask={addTask} />

    </React.Fragment>
  );
}

export default App;
