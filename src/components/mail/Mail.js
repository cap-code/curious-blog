import React, { useState } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import { Container ,Row,Col,Button} from 'react-bootstrap';
import './style.css';


export default function Mail() {
    const [email,setEmail] = useState();
  const _handleSubmit = e=>{
    addToMailchimp(email)
    .then(data=>{
      console.log(data);
      alert(data.msg);
      setEmail("");
    });
   }

    return (
        <Container fluid className="row justify-content-center pb-5">
          <Row className="pt-5">
            <Col sm>
            <div className="search">
              <div className=" input-group">
                  <input type="text" value={email} placeholder="your email address" className="border-0 pl-5 text-dark" onChange={event =>setEmail(event.target.value)}/>
                  <Button variant="primary" className="ml-2" onClick={()=>{_handleSubmit()}}>Join now</Button>
              </div>
            </div>
            </Col>
          </Row>
        </Container>
    )
}
