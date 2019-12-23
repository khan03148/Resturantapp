import React, {Component} from 'react';
import Menu from './Menucomponent';
import Home from './home'
import DishDetail from './DishDetail';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Dishes } from './shared/dishes';
import {Switch , Route ,Redirect} from 'react-router-dom';

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
       
      <Header/>
        
        
        <Menu dishes={this.state.dishes} 
        
         onClick={(dishId)=> this.onDishSelect(dishId)}/>
        
        
         <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/>
        
    
    <Footer/>
    </div>
    );
  };

}
export default Main;
