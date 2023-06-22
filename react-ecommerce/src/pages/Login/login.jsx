import { React } from "react";
import img1 from "./loginassest/loginpic.jpg";
import "./Login.css";
// import { loginpic} from "../../assets/loginpic.jpg";
// import "node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Button, Row, Col, Form, FormGroup, FormControl, FormText, FormLabel, Container} from "react-bootstrap"
export const LogIn = () =>{

    return(

        <div className="login">
          
          
          
    <Container>
    <Form>
        <Row>
          <Col md>
          <FormGroup controlId='formEmail' >
            <FormLabel>Email Address</FormLabel>
            <FormControl type='email' placeholder='Example@gmail.com'></FormControl>
            <FormText className='text-muted'>
              we'll never shear your email address trust us</FormText>
          </FormGroup>
          </Col>
          
          <Col md>
          <FormGroup controlId='forPassword'>
            <FormLabel>Password</FormLabel>
            <FormControl type='password' placeholder='Password'></FormControl>
          </FormGroup>
          </Col>
        </Row>
        <Button varlant='secondary' type='submite' >Login</Button>
      </Form>
      
      </Container>
      {/* <img className="loginpic" src={img1} height={350} width={1300} /> */}
      {/* height={100} width={10}  */}
      
      </div>
      )
    } ;