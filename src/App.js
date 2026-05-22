
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
                {text:'cortar', completed: false},
                {text:'Leer', completed: true}]


function App() {
  return (
    <React.Fragment>

      <Header total={5} completedados={3} />
  
      <Search />

      <TodoList>
        {tasks.map(task => ( <Item key={task.text} text={task.text} completed={task.completed}/>
        ))}
      </TodoList>
      
      <Button />
      
    </React.Fragment>
  );
}

export default App;
