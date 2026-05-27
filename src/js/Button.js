import { useState } from 'react';
import '../css/Button.css';

function Button({ addTask }) {

  const [openModal, setOpenModal] = useState(false);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {

    if (newTask.trim() === '') return;

    addTask(newTask);

    setNewTask('');
    setOpenModal(false);
  };

  return (
    <div>

      <button
        className="CreateTodoButton"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        +
      </button>

      {openModal && (
        <div className="modal">
          <div className="modal-content">

            <h2>Agregar tarea</h2>

            <input
              type="text"
              placeholder="Escribe una tarea"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />

            <br /><br />
            <div className="buttons-container">
              <button onClick={handleAddTask}>
                Agregar
              </button>
              <button
                onClick={() => {
                  setOpenModal(false);
                  setNewTask('');
                }}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export { Button };