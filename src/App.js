import React, { useEffect, useState } from 'react';
import NavBar from './Component/Navbar';
import { Container } from 'react-bootstrap';
import MovieList from './Component/MovieList';
import MovieDetails from './Component/MovieDetails';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import axios from 'axios';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [pageCount,setPageCount]=useState(0)

  // Récupérer tous les films via Axios
  const getAllMovies = async () => {
   
      const res = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=en');
      setMovies(res.data.results); // Stocker les films dans le state
      setPageCount(res.data.total_pages)
  };
  // 
  const getPage = async (page) => {
   
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=en&page=${page}`);
    setMovies(res.data.results); // Stocker les films dans le state
 
};


  const search =async(word)=>{
    if(word===""){
      getAllMovies();
    }else{ 
      const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=52ef927bbeb21980cd91386a29403c78&query=${word}&language=ar`);
    setMovies(res.data.results);
    setPageCount(res.data.total_pages)}
    
  }

  // Utiliser useEffect pour lancer l'appel API au chargement du composant
  useEffect(() => {
    getAllMovies();
  }, []);

  return (
    <div className='font color-body'>
      <BrowserRouter>
        <NavBar search={search} />
        <Container>
          <Routes>
            <Route path='/' element={<MovieList movies={movies} getPage={getPage} pageCount={pageCount} />} />
            <Route path='/movie/:id' element={<MovieDetails />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
};

export default App;
