
import Container from "react-bootstrap/Container";


import Navbar from "react-bootstrap/Navbar";

import resim from "../img/esrayalcin.png"



// import {Container, Form, Nav, NavDropdown, Navbar,Button} from "react-bootstrap";
function MyNavbar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <img className="me-auto" src={resim} alt="" width="150px" />
          <h1 className="me-auto" style={{color:"#B69A59"}}>Lesson Reminder</h1>
        </Container>
      </Navbar>
    
      </>
  );
}

export default MyNavbar;