
import { useState, useEffect } from 'react'
import './App.css'
import GifList from './components/GifList/GifList';


function App() {
  

  /* 01- Estado para la busqueda del usuario */
  const [query, setQuery] = useState("Sheldon");

  /* 02- Estado de los gifs */
  const [gifs, setGifs] = useState([]);
  

  /* 03- UseEffect para hacer el fecth ala api con apikey + la plalbra que inge4res el usuario */
  useEffect(() => {
    if(!query) return

    const fetchGifs = async () =>{

      try {
        const apiKey = import.meta.env.VITE_GIPHY_API_KEY;
        const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=20`;
        const response = await fetch(url);
        const {data} = await response.json();
        setGifs(data.data); //guardamos en array de gifs en el estado 
        
      } catch (error) {
        console.error("Error al obetenr los gifs", error)
      }
    }

    fetchGifs();
    

    
  }, [query]);// se disparara cada vez que cambie "query"



  /* 04- Funcion que se encargue de manejar el submit del formulario */

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.element.search.value.trim();
    if(searchValue){
      setQuery(searchValue);
      e.target.reset();
    }
  };

  

  return (
    <div classNAme ="App ">
      <h1>Buscador de Gifs🥷</h1>

      <form className = "search-form" onSubmit={handleSubmit}>

        <input 
        type="text" 
        name= "search"
        placeholder='Busca un gif'
        classNAme='search-input' />

        <button type='submit' className='search-btn'>
          Buscar
        </button>


      </form>

      <GifsList gifs={gifs} />
    </div>
  )
}

export default App
