import React from 'react';
import {Link} from 'react-router-dom';
import { Card,CardImgOverlay,CardImg,CardTitle,CardBody,CardText,BreadcrumbItem, Breadcrumb } from 'reactstrap';

function RenderDish ({dish}){
      
        return(
            
            <>
                <Card>
                    <CardImg top  src={dish.image} alt={dish.name}/>
                    <CardBody> 
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                    
                </Card>
            </>
        ); 
}


function RenderComments ({comments}) {
    
             
if(comments != null)



        return(
            <>
              <h4>Comments</h4>

               <ul className="list-unstyled">
                    
                   {comments.map( (d) => {
                       return(
                        <li key={d.id}>
                            <p>{d.comment}</p>
                            <p>--{d.author}, {d.date}</p>
                        </li>
                            );
                   
                   })}
                        
                    
                    
                </ul>
            </>
            );

        else
            return(
                <div> </div>
            );
        
        
    }

    
const DishDetail = (props) => {
   

        if(props.dish != null)
        
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
                    <RenderComments comments={props.comments} />
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