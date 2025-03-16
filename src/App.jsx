import React, { useEffect, useState } from 'react'
import Search from './components/Search'

// const API_BASE_URL = 'https://api.themoviedb.org/3';
// const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
// const API_OPTIONS = {
// method: 'GET',
// headers: {
//   accept: 'application/json',
//  Authorizaton: `Bearer ${API_KEY}`
// }
// };

        const App = () => {

          const [searchTerm, setSearchTerm] = useState('');
          const [errorMessage, setErrorMessage] = useState('');
          const [movieList, setMovieList] = useState ([]);
          const [isLoading, setIsloading] = useState (false);

        const fetchMovies = async () => {
          
          setIsloading(true);
          setErrorMessage('');

          try{
            const endpoint=`${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
            const response = await fetch(endpoint, API_OPTIONS);

            if(!response.ok){
              throw new Error('Failed to fetch movies')
            }
            const data = await response.json()
            if(data.Response === 'False'){
              setErrorMessage(data.Error || 'Failed to fetch movies');
              setMovieList([]);
              return;
            }
            setMovieList(data.results || [])

          } catch (error){
            console.log(`Error fetching movies: ${error}`);
            setErrorMessage('Error fetching movies. Please try again later.');
          } finally {
            setIsloading(false);
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

      <section className='all-movies'>
        <h2>All movies</h2>
       {isLoading ? (
        <p className='text-white'>Loading...</p>
       ) : errorMessage ? (
        <p className='text-orange-500'>{errorMessage}</p>
       ) : (
        <ul>
          {movieList.map((movie) => (
            <p className='text-white'>{movie.title}</p>
          ))}
        </ul>
       )}
      </section>
      </div>

    </main>
  )
}

export default App
