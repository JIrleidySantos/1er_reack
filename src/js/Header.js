import '../css/Header.css';

function Header({total,completedados}) {
  return (<h1 className="TodoCounter">
    <span>Has completado {completedados} de {total} tareas</span>
  </h1>);
}

export { Header };