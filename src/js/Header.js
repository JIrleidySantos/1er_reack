import '../css/Header.css';

function Header({completed, total}) {
  return (<h1 className="TodoCounter">
    <span>Has completado <span>{completed}</span> de <span>{total}</span> tareas</span>
  </h1>);
}

export { Header };