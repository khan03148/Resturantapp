import React,{Component} from 'react';
import { Card,CardImgOverlay,CardImg,CardTitle,CardBody,CardText } from 'reactstrap';

class DishDetail extends Component {
   

    componentDidMount(){
        console.log("componentdid mount did mount called")
    }

    componentDidUpdate(){
        console.log("didupdate called")
    }
   

renderDish(d) {
      
        return(
            
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg top  src={d.image} alt={d.name}/>
                    <CardBody> 
                        <CardTitle>{d.name}</CardTitle>
                        <CardText>{d.description}</CardText>
                    </CardBody>
                    
                </Card>
            </div>
        ); 
      
       
}

renderComments(comm) {
             
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

    
    render(){
console.log("redner invoked here")
        if(this.props.dish != null)
        
        return(
            <div className="contianer">
                   
                  <div className="row">
                    
                    {this.renderDish(this.props.dish)}
                    
                   
                   
                   {this.renderComments(this.props.dish.comments)}
               </div>
            </div>
           
          
        );
        else
        return(
            <div></div>
        ); 
    }
}
export default DishDetail;