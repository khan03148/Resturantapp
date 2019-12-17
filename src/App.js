import React, {Component} from 'react';
import { Navbar,NavbarBrand } from 'reactstrap';
import Menu from './components/Menucomponent';

import { Dishes } from './components/shared/dishes';

class App extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      dishes : Dishes
    }
  }
  render() {
  
    return (
    
    <div>
        <Navbar dark color="primary">
        <div className="contianer">
            <NavbarBrand href="/">
            Ristorante con fusion
          </NavbarBrand>

        </div>
        </Navbar>
        <Menu dishes={this.state.dishes}/>
    </div>
    );
  };
}

export default App;
