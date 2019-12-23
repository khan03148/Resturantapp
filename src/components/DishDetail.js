import React from 'react';

import { Card,CardImgOverlay,CardImg,CardTitle,CardBody,CardText } from 'reactstrap';

function RenderDish ({dish}){
      
        return(
            
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg top  src={dish.image} alt={dish.name}/>
                    <CardBody> 
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                    
                </Card>
            </div>
        ); 
}


function RenderComments ({comm}) {
             
if(comm != null)
        return(
            <div className="col-12 col-md-5 m-1">
              <h4>Comments</h4>
               <ul className="list-unstyled">
                    
                   {comm.map( (d) => {
                       return(
                        <li key={d.id}>
                            <p>{d.comment}</p>
                            <p>--{d.author}, {d.date}</p>
                        </li>
                            );
                   
                   })}
                        
                    
                    
                </ul>
            </div>
            );

        else
            return(
                <div> </div>
            );
        
        
    }

    
    const DishDetail = (props) => {

        if(props.dish != null)
        
        return(
            <div className="contianer">
                   
                  <div className="row">
                    
                    <RenderDish dish={props.dish} />
                    
                   
                   
                   <RenderComments comm={props.dish.comments}/>
               </div>
            </div>
           
          
        );
        else
        return(
            <div></div>
        ); 
    }

export default DishDetail;