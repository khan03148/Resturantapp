import React, {Component} from 'react';
import Menu from './Menucomponent';
import Home from './home'
import Contact from './contactus';
import About from './aboutus'
import DishDetail from './DishDetail';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {Switch , Route ,Redirect, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { addComment, fetchDishes } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';







const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

const mapDispatchToProps = dispatch => ({
  
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
  fetchDishes: () => { dispatch(fetchDishes())},
  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))}

});



class Main extends Component {
  
  constructor(props) {
    super(props);

   
  }
  
  componentDidMount() {
    this.props.fetchDishes();
  }


  render() {
   
    const HomePage = ()=> {
      return(
          <Home 
              dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
              dishesLoading={this.props.dishes.isLoading}
              dishesErrMess={this.props.dishes.errMess}
              promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
              leader={this.props.leaders.filter((leader) => leader.featured)[0]}
          />
      );
    }

     const DishWithId = ({match}) => {
      return(
          <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
            isLoading={this.props.dishes.isLoading}
            errMess={this.props.dishes.errMess}
            comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
            addComment={this.props.addComment}
          />
      );
    };
    
    return (
    
    <div>
       
      <Header/>
      <TransitionGroup>
      <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
            <Switch>
              <Route path="/Home" component={HomePage}/>  
              <Route exact path="/Menu" component={ () => <Menu dishes={this.props.dishes} />}/>
              
              <Route path="/menu/:dishId" component={DishWithId}/>
              
              <Route exact path='/contactus' component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
              <Route path="/aboutus" component={() => <About leader={this.props.leaders}/>}/>
            
              <Redirect to="/Home" />
            </Switch>
        </CSSTransition>
      </TransitionGroup>
         <Footer/>
    </div>
    );
  };

}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
