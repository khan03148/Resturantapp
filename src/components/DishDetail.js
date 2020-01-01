import React from 'react';
import {Link} from 'react-router-dom';
import { Card,CardImgOverlay,CardImg,CardTitle,CardBody,CardText,BreadcrumbItem, Breadcrumb ,Button} from 'reactstrap';
import CommentForm from './commentform';
import { Loading } from './LoadingComponent';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';





function RenderDish ({dish}){
      
        return(
            
            <>
            
    <FadeTransform in transformProps={{
         exitTransform: 'scale(0.5) translateY(-50%)'}}>
                <Card>
                    <CardImg top  src={dish.image} alt={dish.name}/>
                    <CardBody> 
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                    
                </Card>
     </FadeTransform>
            </>
        ); 
}

const RenderComments =({comments, addComment, dishId})=> {
    
             
if(comments != null)



        return(
            <>
            <Stagger in>
              <h4>Comments</h4>

               <ul className="list-unstyled">
                    
                   {comments.map( (d) => {
                       return(
                    <Fade in>   
                        <li key={d.id}>
                            <p>{d.comment}</p>
                            <p>--{d.author}, {d.date}</p>
                            
                        </li>
                    </Fade> );
                   })}
               
                </ul>
                </Stagger>
                <CommentForm dishId={dishId} addComment={addComment} />

            </>
            );

        else
            return(
                <div> </div>
            );
        
        
    }

    
const DishDetail = (props) => {
   
    if (props.isLoading) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errMess) {
        return(
            <div className="container">
                <div className="row">            
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }
    else if (props.dish != null) 
        
        return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>

                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>                
            </div>
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish} />
                   
                </div>
                
                <div className="col-12 col-md-5 m-1">
                <RenderComments comments={props.comments}
                        addComment={props.addComment}
                        dishId={props.dish.id} />
                </div>
                
                

               

            </div>
        </div>
        );
        else
        return(
            <div></div>
        ); 
    }

export default DishDetail;
