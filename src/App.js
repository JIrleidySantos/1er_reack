
import { Item } from './js/Item';
import { Button } from './js/Button';
import './App.css';
import React from 'react';
import { TodoList } from './js/TodoList';
import { Header} from './js/Header';
import { Search } from './js/Search';


const tasks = [{text:'Revisar examenes', completed: true},
                {text:'Escrbir', completed: false},
                {text:'Pegar', completed: true}, 
                {text:'nadar', completed: true},
                {text:'cortar', completed: false},
                {text:'dibujar', completed: false},
                {text:'Leer', completed: false}]


function App() {

  const [tasks_m, setTasks] = React.useState(tasks);
  
  const numberTasksCompleted = 
  tasks_m.filter(task => task.completed).length;

  const totalTasks = tasks_m.length;

  const [searchValue, setSearchValue] = React.useState('');

  const searchTodos = tasks_m.filter((tasks_m)=> {
    const searchText = searchValue.toLowerCase();
    return tasks_m.text.toLowerCase().includes(searchText.toLowerCase());
  });

  const completedTasks = (text) => {
    const newTasks = [...tasks_m];
    const indexTasks = newTasks.findIndex(tasks_m => tasks_m.text === text);
    newTasks[indexTasks].completed = true;
    setTasks(newTasks);
  }

  const deleteTasks = (text) => {
    const newTasks = [...tasks_m];
    const indexTasks = newTasks.findIndex(tasks_m => tasks_m.text === text);
    newTasks.splice(indexTasks, 1);
    setTasks(newTasks)
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
          onDelete={() => deleteTasks(task.text)}/>
        ))}
      </TodoList>
      
      <Button />
      
    </React.Fragment>
  );
}

export default App;
