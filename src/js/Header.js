import '../css/Header.css';

function Header({total,completedados}) {
  return (<h1 className="Pepito">Has completado {completedados} de {total} tareas</h1>);
}

export { Header };