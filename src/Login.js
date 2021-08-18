import React,{ useState} from 'react';

import {Card ,Form,Button,InputGroup,ModalFooter,Modal,ModalBody,ModalTitle ,Col,Row } from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faKey,faAt,faSave} from "@fortawesome/free-solid-svg-icons";





export default  Login =>{
    
   
    
   
        let [show, setShow] = useState(false);
  
        let handleClose = () => setShow(false);
        let handleShow = () => setShow(true);
      
        
        return(
            
            <>
            <Button variant="primary" onClick={handleShow}>
              Login
            </Button>
      
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Sign in </Modal.Title>
              </Modal.Header>
              <Modal.Body>              
              

                {/* form  elements  */}


                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
            
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>

              
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        );
    
}