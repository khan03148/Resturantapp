import React,{Component} from 'react';
import {Modal,ModalHeader, ModalBody ,Button,Label, Col, Row } from 'reactstrap';
import {Control, LocalForm,Errors} from 'react-redux-form';



const required = (val) => val && val.length ;
const maxLength = (len) => (val) => (!val) || (val.length <= len);
const minLength = (len) =>  (val) => val && (val.length >= len) ;

class CommentForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            isModalOpen: false,
        }
    }

     toggelmodal = () => {
         this.setState({
             isModalOpen : ! this.state.isModalOpen,
         })

    }

    showdata = (values)=>{
        this.toggelmodal();
        
        this.props.addComment(this.props.dishId, values.rating, values.author, values.comments);
    }

   render(){
       return(
           <>
           <Modal isOpen={this.state.isModalOpen} toggle={this.toggelmodal}>
               <ModalHeader toggle={this.toggelmodal}>Comment Form</ModalHeader>
               <ModalBody>
                   <LocalForm onSubmit={ (values)=> this.showdata(values)}>
                       <Row className="form-group">
                        <Label htmlFor="rating"md={8}>Rating</Label>
                        <Col md={{md: 3, offset: 1}}>
                                    <Control.select model=".rating" name="rating"
                                        className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                    </Control.select>
                                </Col>
                       </Row>

                       <Row className="form-group">
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                            <Col md={10}>
                                    <Control.text model=".author" id="author" name="firstname"
                                        placeholder="First Name"
                                        className="form-control"
                                        validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                        />

                                <Errors
                                        className="text-danger"
                                        model=".firstname"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                                    
                                       
                             </Col>
                     </Row>

                     <Row className="form-group">
                                <Label htmlFor="comments" md={2}>Comments</Label>
                            <Col md={10}>
                                    <Control.textarea model=".comments" id="comments" name="comments"
                                        placeholder="comments here"
                                        className="form-control"
                                        />
                                    
                                       
                             </Col>
                     </Row>
                     <Row className="form-group">
                                <Col md={{size:10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                    save comment
                                    </Button>
                                </Col>
                            </Row>
          
                    
                   </LocalForm>
               </ModalBody>
           </Modal>


            <Button  onClick={this.toggelmodal} color="primary">
               <span className="fa fa-pencil fa-lg "></span>
               Submit comments
           </Button>
                    
           </>
       );
   }

}

export default CommentForm;