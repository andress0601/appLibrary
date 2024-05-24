import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav';

import ShowPrestamos from './Views/Prestamos/ShowPrestamos';
import ShowLibros from './Views/Libros/ShowLibros';
import CreateLibros from './Views/Libros/CreateLibros';
import EditLibro from './Views/Libros/EditLibro';

//import Login from './Views/Login';
import Register from './Views/Register';

//import ProtectedRoutes from './Components/ProtectedRoutes';

function App() {
  return (
    

      <BrowserRouter>
        <Nav />
        <Routes>

          
          <Route path='/register' element={<Register/>}/>

          <Route path='/showPrestamos' element={<ShowPrestamos/>}/>
          <Route path='/show' element={<ShowLibros/>}/>
          <Route path='/create' element={<CreateLibros/>}/>
          <Route path='/edit' element={<EditLibro/>}/>

          

        </Routes>

      </BrowserRouter>
      
    
  );
}

export default App;
