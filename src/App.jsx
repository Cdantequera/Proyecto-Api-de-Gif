import { useState, useEffect } from 'react'
import './App.css'
import GifList from './components/GifList/GifList'; // ✅ Importación correcta

function App() {
  /* 01- Estado para la busqueda del usuario */
  const [query, setQuery] = useState("Sheldon");

  /* 02- Estado de los gifs */
  const [gifs, setGifs] = useState([]);

  /* 03- UseEffect para hacer el fetch ala api con apikey + la palabra que ingrese el usuario */
  useEffect(() => {
    if(!query) return

    const fetchGifs = async () => {
      try {
        const apiKey = import.meta.env.VITE_GIPHY_API_KEY;
        const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=20`;
        const response = await fetch(url);
        const {data} = await response.json();
        setGifs(data); // ✅ Corregido: data en lugar de data.data
      } catch (error) {
        console.error("Error al obtener los gifs", error)
      }
    }

    fetchGifs();
  }, [query]);

  /* 04- Funcion que se encargue de manejar el submit del formulario */
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value.trim(); // ✅ Corregido: elements en lugar de element
    if(searchValue){
      setQuery(searchValue);
      e.target.reset();
    }
  };

  return (
    <div className="App"> {/* ✅ Corregido: className en lugar de classNAme */}
      <h1>Buscador de Gifs🥷</h1>

      <form className="search-form" onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="search"
          placeholder='Busca un gif'
          className='search-input' /> {/* ✅ Corregido: className */}

        <button type='submit' className='search-btn'>
          Buscar
        </button>
      </form>

      <GifList gifs={gifs} /> {/* ✅ Corregido: GifList en lugar de GifsList */}
    </div>
  )
}

export default App