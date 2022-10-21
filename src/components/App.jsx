import { Route, Routes, NavLink } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Home } from '../Pages/Home';


export const App = () => {
  return (
    <div>
      <nav>

      </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='/movies' element={<Movies/>} />
        <Route path='/movies/:movieId' element={<MovieDetails/>}/> */}
      </Routes>
    
    </div>
  );
};

export default App;