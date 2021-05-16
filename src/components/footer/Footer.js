import { Link } from 'gatsby';
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {KanbanFill,Facebook,Instagram,Twitter,GeoAlt,Envelope,Grid3x3GapFill} from 'react-bootstrap-icons';
import {footer,color,padd,link} from './footer.module.css';

export default function Footer() {
    return (
        <footer>
            <p className={padd}></p>
            <Container fluid>
                <Row>
                <Col sm>
                    <div >
                    <h6 className={color}>
                        <KanbanFill color="grey" size={20}/> UptimeMate</h6>  
                    <p className={color}>Let our designs, work for you, And save valuable time during your next buisness adventure  </p>
                    </div>
                </Col>  
                <Col sm>
                    <div >
                    <h6 className={color}>Legal</h6>  
                      <Link to="/" className={link}>general terms &#38; conditions</Link>
                      <Link to="/" className={link}>Data processing agreement</Link>
                      <Link to="/" className={link}>Privacy Statement</Link>
                    </div>    
                </Col>  
                <Col sm>
                    <div >
                    <h6 className={color}>Contact</h6>  
                    <p className={color}><GeoAlt color="grey"/> Kochi,682007</p>
                    <p className={color}>&nbsp; &nbsp; kalamaserry, startup mission</p>
                    <p className={color}>&nbsp; &nbsp;  ernakulam</p>
                    <p></p>
                    <p className={color}><Envelope color="grey"/> support@company.com</p>
                    </div>
                </Col> 
                <Col sm>
                <h6 className={color}>Latest news</h6>
                    <Container>
                        <Row>
                            <Col md="auto"> <Grid3x3GapFill color="grey" size={34}/> </Col>
                            <Col><p className={color}> Aliqua eu nulla esse excepteur duis do.Mollit fugiat enim amet quis.Id aute excepteur cupidatat dolor amet deserunt non anim officia Lorem mollit cillum.  </p></Col>
                        </Row>
                    </Container>
                    <Container>
                        <Row>
                            <Col md="auto"> <Grid3x3GapFill color="grey" size={34}/> </Col>
                            <Col><p className={color}> Aliqua eu nulla esse excepteur duis do.Mollit fugiat enim amet quis.Id aute excepteur cupidatat dolor amet deserunt non anim officia Lorem mollit cillum.  </p></Col>
                        </Row>
                    </Container>
                </Col>   
                </Row>
            </Container>
            <p className={padd}></p>
            <Container fluid className="row justify-content-center">
                <Row>
                    <Col>
                    <div >
                    <Link to="/"><Facebook color="grey" size={34}  className="px-1 py-1"/></Link>
                    <Link to="/"><Twitter color="grey" size={34} className="px-1 py-1"/></Link>
                    <Link to="/"><Instagram color="grey" size={34} className="px-1 py-1"/></Link>
                    </div>
                    </Col>
                </Row> 
            </Container>
            <Container fluid className="row justify-content-center">
            <Row>
                <Col>
                <small className={color}>&copy; 2020 company.All rights reserved</small>
                </Col>
                </Row>
            </Container>
        </footer>
    )
}
