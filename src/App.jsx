// import React, { useEffect, useState } from 'react'
// import { useDebounce } from 'react-use';
// import Search from './components/Search'
// import Spinner from './components/Spinner';
// import MovieCard from './components/MovieCard';


// const API_BASE_URL = '/api';
// const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
// const API_OPTIONS = {
// method: 'GET',
// headers: {
//   accept: 'application/json',
//  Authorizaton: `Bearer ${API_KEY}`
// }
// };

//         const App = () => {

//           const [searchTerm, setSearchTerm] = useState('');
//           const [errorMessage, setErrorMessage] = useState('');
//           const [movieList, setMovieList] = useState ([]);
//           const [isLoading, setIsloading] = useState (false);
//           const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('')

//           // Debounce the search term to prevent making too many API requests
// // by waiting for the user to stop typing for 500 ms
//             useDebounce(()=>setDebouncedSearchTerm(searchTerm), 500, [searchTerm])

//         const fetchMovies = async (query = '') => {
//           setIsloading(true);
//           setErrorMessage('');

//           try{
//             const endpoint = query 
//             ?`${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}&api_key=${API_KEY}`
//             :`${API_BASE_URL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`;
//             const response = await fetch(endpoint, API_OPTIONS);

//             if(!response.ok){
//               throw new Error('Failed to fetch movies')
//             }
//             const data = await response.json()
//             if(data.Response === 'False'){
//               setErrorMessage(data.Error || 'Failed to fetch movies');
//               setMovieList([]);
//               return;
//             }
//             setMovieList(data.results || [])

//           } catch (error){
//             console.log(`Error fetching movies: ${error}`);
//             setErrorMessage('Error fetching movies. Please try again later.');
//           } finally {
//             setIsloading(false);
//           }
//         }
//             useEffect(()=>{
//             fetchMovies(debouncedSearchTerm)
//             }, [debouncedSearchTerm])

//   return (
//     <main>
//       <div className="pattern"/>
//       <div className="wrapper">
//         <header>
//           <img src="./hero.png" alt="Hero Banner" />
//           <h1>Find <span className='text-gradient'>Movies</span> You Enjo without the Hassle</h1>
//          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
//        </header>

//       <section className='all-movies'>
//         <h2 className='mt-[40px]'>All movies</h2>
//        {isLoading ? (
//         <Spinner />
//        ) : errorMessage ? (
//         <p className='text-orange-500'>{errorMessage}</p>
//        ) : (
//         <ul>
//           {movieList.map((movie) => (
//             <MovieCard key={movie.id} movie={movie}/>
//           ))}
//         </ul>
//        )}
//       </section>
//       </div>

//     </main>
//   )
// }

// export default App
