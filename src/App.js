import React from 'react';
import { Navbar,NavbarBrand } from 'reactstrap';
import Menu from './components/Menucomponent';
import './App.css';

function App() {
  return (
    <div className="App">
     <Navbar dark color="primary">
       <div className="contianer">
       <NavbarBrand href="/">
         Ristorante con fusion
       </NavbarBrand>

       </div>
     </Navbar>
     <Menu/>
    </div>
  );
}

export default App;
