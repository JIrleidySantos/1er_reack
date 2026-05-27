import '../css/Search.css';

function Search({ searchValue, setSearchValue }) {
    return (
        <input
            className="TodoSearch"
            placeholder="Escribe el nombre de la tarea que deseas buscar"
            value={searchValue}
            onChange={(event) => {
                setSearchValue(event.target.value);
            }}
        />
    );
}

export { Search };