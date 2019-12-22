import React, {Component} from 'react';
import { Navbar,NavbarBrand } from 'reactstrap';
import Menu from './Menucomponent';
import DishDetail from './DishDetail';
import { Dishes } from './shared/dishes';


class Main extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      dishes : Dishes,
      selectedDish : null
    }
  }

  onDishSelect(dishId) {
    this.setState( {selectedDish: dishId })
   
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
      
        
        
        <Menu dishes={this.state.dishes} 
        
         onClick={(dishId)=> this.onDishSelect(dishId)}/>
        
        
         <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/>
        
    
    
    </div>
    );
  };

}
export default Main;
