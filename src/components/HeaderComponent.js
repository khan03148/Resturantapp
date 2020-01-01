import React,{Component} from 'react';
import { Navbar,NavbarBrand,NavItem,Collapse,NavbarToggler,Nav,Jumbotron, Modal,ModalBody,ModalHeader,Button,
Form,FormGroup,Input,Label} from 'reactstrap';
import {NavLink} from 'react-router-dom';

class Header extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        }

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);

        
    }

    handleLogin = (event) => {
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();

    }

     toggleModal(){
         this.setState({
             isModalOpen: !this.state.isModalOpen
         })
     }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
   
    render(){
        return(
            <>
        <Navbar dark expand="md">
            <div className="container">
                <NavbarToggler onClick={this.toggleNav}/>
                
                <NavbarBrand  className="mr-auto" href="#">
                    <img src="assets/images/logo.png" height="30" width="41" alt="Ristorante con fusion"/>
                </NavbarBrand>
                
                <Collapse  navbar isOpen={this.state.isNavOpen}>
                <Nav navbar>
                    <NavItem>
                        <NavLink className="nav-link" to="/home">
                        <span className="fa fa-home fa-lg"></span>Home
                        </NavLink>
                    </NavItem>
                    
                    <NavItem>
                        <NavLink className="nav-link" to="/Menu">
                        <span className="fa fa-list fa-lg"></span>Menu
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink className="nav-link" to="/contactus">
                        <span className="fa fa-address-card fa-lg"></span>Contact Us
                        </NavLink>
                    </NavItem>
                   
                    <NavItem>
                        <NavLink className="nav-link" to="/aboutus">
                        <span className="fa fa-info fa-lg"></span>About
                        </NavLink>
                    </NavItem>
                </Nav>

                <Nav className="ml-auto" navbar>
                                <NavItem>
                                <Button outline onClick={this.toggleModal}>
                                    <span className="fa fa-sign-in fa-lg"></span>
                                     Login
                                </Button>
                                </NavItem>
                            </Nav>
                </Collapse>

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
<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
    <ModalHeader  toggle={this.toggleModal}>Login</ModalHeader>
       
            <ModalBody>
           
            <Form onSubmit={this.handleLogin}>
                <FormGroup>
                    <Label htmlFor="username">User Name</Label>
                    <Input type="text"  id="username" name="username" placeholder="User Name" innerRef={(input) => this.username = input}/>
                </FormGroup>

                <FormGroup>
                    <Label htmlFor="password">password</Label>
                    <Input type="password"  id="password" name="password" placeholder="password" innerRef={(input) => this.password = input}/>
                </FormGroup>

                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" name="remember"  innerRef={(input) => this.remember = input}/>
                        Remember Me
                    </Label>

                </FormGroup>
                <Button type="submit" value="submit" color="primary">Login</Button>
            </Form>
        </ModalBody>
        
</Modal>
    </>
        );
    }
}
export default Header;