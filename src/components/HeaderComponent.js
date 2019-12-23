import React,{Component} from 'react';
import { Navbar,NavbarBrand ,Jumbotron} from 'reactstrap';


class Header extends Component{
   
    render(){
        return(
            <>
        <Navbar className="navbar-dark">
            <div className="contianer">
                <NavbarBrand href="/">
                Ristorante con fusion
                </NavbarBrand>

            </div>
        </Navbar>
        <Jumbotron>
            <div className="container">
                <div className="row row-header">
                    <div className="col-12 col-sm-6">
                        <h1>Ristorante Con Fusion</h1>
                        <p1>We take inspiration from the world best cusines, and create a unique confusion experience.our lipsmaccking creation tickle your culinary senses!</p1>

                    </div>

                </div>

            </div>
        </Jumbotron>
            </>
        );
    }
}
export default Header;