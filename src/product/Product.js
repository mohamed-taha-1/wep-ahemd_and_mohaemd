import React,{Component} from 'react';
// import Product from './product.json';
import './grid.css';
import {Card , Accordion,Button} from 'react-bootstrap';


export default   class Product extends Component{



    state={
        product:[
            {
                "id":1,
                img:process.env.PUBLIC_URL+`./images/t1.jpeg`,
                "productName":"T-shirt",
                "color":"white" ,
                "size":"sm",
                rate:5
    
            },
            {
                "id":2,
                img:process.env.PUBLIC_URL+`./images/t2.png`,
                "productName":"T-shirt2",
                "color":"white" ,
                "size":"sm",
                rate:5
    
            },
            {
                "id":3,
                img:process.env.PUBLIC_URL+`./images/t3.jpg`,
                "productName":"T-shirt3",
                "color":"white" ,
                "size":"sm",
                rate:4
    
            },
            {
                "id":4,
                img:process.env.PUBLIC_URL+`./images/j1.jpeg`,
                "productName":"jact",
                "color":"black" ,
                "size":"m",
                rate:4
    
            },
            {
                "id":5,
                img:process.env.PUBLIC_URL+`./images/j2.jpeg`,
                "productName":"jact2",
                "color":"black" ,
                "size":"m",
                rate:4
    
            },
            {
                "id":6,
                img:process.env.PUBLIC_URL+`./images/j3.jpeg`,
                "productName":"jact3",
                "color":"black" ,
                "size":"m",
                rate:5
    
            }
        ]
    };


    openProduct(name){


    for(var i=0;i<this.state.product.length;i++){
       if(this.state.product.size == name){

        this.state.product.map(p =>(
                   
                     
            <div className="grid_prodct_i"  id={p.size} key={p.id}>
               <img   src={p.img}  alt=''  width="100%" height="160px"/>
              
                <p style={{marginTop:'5px'}} >
                   <p style={{fontSize:'50', fontWeight:'bold'}}> {p.productName}  </p> 
                  
                      Color: {p.color}
                      <br/>
                      Size:{p.size}
                      <br/>
                      Rate : {p.rate}

                  </p>
            </div>
              
        
          ))
       }else{
        this.state.product.map(p =>(
                   
                     
            <div className="grid_prodct_i"  id={p.size} key={p.id}>
               <img   src={p.img}  alt=''  width="100%" height="160px"/>
              
                <p style={{marginTop:'5px'}} >
                   <p style={{fontSize:'50', fontWeight:'bold'}}> {p.productName}  </p> 
                  
                      Color: {p.color}
                      <br/>
                      Size:{p.size}
                      <br/>
                      Rate : {p.rate}

                  </p>
            </div>
              
        
          ))
       }
   }

}







    render(){
        return(
            
         
               <div className="grid_prodct">


                <p>choose  filter </p>
                <Accordion defaultActiveKey="0" style={{width:"150px"}}>
               
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Size </Accordion.Header>
                            <Accordion.Body>
                          
                                     <Button   variant="light" onClick={this.openProduct("sm")} style={{width:"90px",marginBottom:"10px"}}>Small</Button> 
                                                                          
                                     <Button   variant="light"    onClick={this.openProduct("m")} style={{width:"90px",marginBottom:"10px"}}>Medium</Button> 
                                     <Button   variant="light"  style={{width:"90px",marginBottom:"10px"}}>Large</Button> 
                                                                          
                                    
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Color </Accordion.Header>
                            <Accordion.Body>
                           
                                
                                     <Button   variant="light"  style={{width:"90px",marginBottom:"10px"}}>white</Button> 
                                     <Button   variant="light"  style={{width:"90px",marginBottom:"10px"}}>black</Button>                  
                                   
                                
                            </Accordion.Body>
                        </Accordion.Item>
                       
                       
                        </Accordion>

                <br/>
               <br/>
         
                {
                    {/* this.state.product.map(p =>(
                   
                     
                      <div className="grid_prodct_i"  id={p.size}>
                         <img   src={p.img}  alt=''  width="100%" height="160px"/>
                        
                          <p style={{marginTop:'5px'}} >
                             <p style={{fontSize:'50', fontWeight:'bold'}}> {p.productName}  </p> 
                            
                                Color: {p.color}
                                <br/>
                                Size:{p.size}
                                <br/>
                                Rate : {p.rate}

                            </p>
                      </div>
                        
                  
                    )) */}

               
                }
         </div>
          
        );
    }
}