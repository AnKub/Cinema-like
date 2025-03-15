import React, { useEffect, useState } from 'react'
import Search from './components/Search'

const API_BASE_URL = 'http://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS ={
method: 'GET',
headers: {
  accept: 'application/json',
 Authorizaton: `Beatet ${API_KEY}`
}
}

        const App = () => {

          const [searchTerm, setSearchTerm] = useState('');
          const [errorMessage, setErrorMessage] = useState('');

        const fetchMovies = async () => {
          try{
            const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`
            const response = await fetch(endpoint, API_OPTIONS);
            alert (response)
          } catch (error){
            console.log(`Error fetching movie error: ${error}`);
            setErrorMessage('Error fetching movies, Please try again later.');
          }
        }

useEffect(()=>{
fetchMovies()
}, [])

  return (
    <main>
      <div className="pattern"/>
      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="Hero Banner" />
          <h1>Find <span className='text-gradient'>Movies</span> You Enjo without the Hassle</h1>
         <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
       </header>

      <section className='all=movies'>
        <h2>All movie</h2>

        {errorMessage && <p className='error-message'>{errorMessage}</p>};
      </section>
      </div>

    </main>
  )
}

export default App
