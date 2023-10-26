

import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';

const LesenCard = ({data}) => {
  console.log(data);
  return (
    <Container className=" d- flex m-4 mx-auto bg-dark p-2">
      <Row className="g-4 d-flex justify-content-center">
     
        {data.map(({image,hour,name,id}) => {
          
          
          return (
            <Col
              
              key={id}
              className="col-12  col-md-6 col-lg-4 "
              
            >
              <Card className="p-4 ">
              <div className="d-flex ">              
                <img src={image} alt="" height="15%" width="15%"/>
                <Card.Body>
                  <h6><span className="text-warning">Lesson Name:</span>{name}</h6>
                  <h6><span className="text-warning">Lesson Hour:</span>{hour}</h6>
                   
                </Card.Body></div> 
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>

  )}
      
     
  
export default LesenCard