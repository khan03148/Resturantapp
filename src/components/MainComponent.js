import React, {Component} from 'react';
import Menu from './Menucomponent';
import Home from './home'
import Contact from './contactus';
import About from './aboutus'
import DishDetail from './DishDetail';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from './shared/dishes';
import { COMMENTS } from './shared/comments';
import { PROMOTIONS } from './shared/promotions';
import { LEADERS } from './shared/leaders';


import {Switch , Route ,Redirect} from 'react-router-dom';

class Main extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
    };
  }
  



  render() {
   
    const DishwithId =({match}) => {
      return(
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
        comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
              
   
      );

    }
    
    return (
    
    <div>
       
      <Header/>
        <Switch>
          <Route path="/Home" component={()=>  <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
              leader={this.state.leaders.filter((leader) => leader.featured)[0]}
          />}/>
          <Route exact path="/Menu" component={ () => <Menu dishes={this.state.dishes} />}/>
          
          <Route path="/menu/:dishId" component={DishwithId}/>
          
          <Route exact path="/Contactus" component={Contact}/>
          <Route path="/aboutus" component={() => <About leader={this.state.leaders}/>}/>
         
          <Redirect to="/Home" />
        </Switch>
         <Footer/>
    </div>
    );
  };

}
export default Main;
