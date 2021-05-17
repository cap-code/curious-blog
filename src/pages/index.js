import React from 'react';
import '../styles/style.css';
import Nav from '../components/navbar/NavBar';
import Footer from '../components/footer/Footer';
import '../components/layout.scss';
import { Button, Container, Row, Col } from 'react-bootstrap';
import {browse} from '../styles/index.module.css';
import { GatsbyImage,getImage, StaticImage } from 'gatsby-plugin-image';
import { graphql, Link } from 'gatsby';
import {ArrowRight} from 'react-bootstrap-icons';
import Mail from '../components/mail/Mail';

export default function index({data}) {
  return ( 
    <div>
        <Nav />
        <h1 className="display-4 mt-4 text-center pb-2 font-weight-bold">
          India's most badass community of 
        </h1>
        <h1 className="display-4 text-center pb-5 font-weight-bold">
        founders and makers
        </h1>
        <p className="text-center h5">P.S Besides being a badass  community , we also run an awesome weekly</p>
        <p className="text-center h5">newsletter with interviews and in-depth Breakdowns</p>
         <Mail />
        <Container fluid className = "row justify-content-center pb-5">
            <Row>
              <Col sm className="ml-3">
               <h2>Interviews, MakerCons and </h2>
               <h2>Hackathons</h2>
               <p>Interviews of people to help you understand the process to help you while creating your startup. </p>
               <p>Badass Events for Makers. Meeting like minded people is the only way to grow in tech.</p>
               <p>Hackathons are a great way to find your co founders. Create something people want from your living room floor</p>              
               <Link to="/interviews"><Button className={browse}>Browse all interviews</Button></Link>
              </Col>
              <Col sm>
              <GatsbyImage image={getImage(data.file)}  className="mt-2"alt="Banner" />  
              </Col>
            </Row>
        </Container>
         <h1 className=" display-4 mt-4 text-center pb-2 font-weight-bold">Learn from the folks who have</h1>
         <h1 className=" display-4  text-center pb-2 font-weight-bold">got sh*t done</h1>
         <p className=" h5 text-center">Interviews of people who have made real world </p>
         <p className="h5 text-center">products and communities.</p>
         <Container  fluid className="row justify-content-center mx-auto pt-5">
            <Row>
              <Col sm className="mt-3">
                <Link to="/" >
                    <StaticImage src="../images/thumbs/rectangle.png" alt="test" />
                </Link>
              </Col>
              <Col sm className="mt-3">
              <Link to="/" >
                    <StaticImage src="../images/thumbs/rectangle.png" alt="test" />
                </Link>
              </Col>
            </Row>
            <Row className="pb-4">
              <Col sm className="mt-3">
              <Link to="/" >
                    <StaticImage src="../images/thumbs/rectangle.png" alt="test" />
                </Link>
              </Col>
              <Col sm className="mt-3">
              <Link to="/" >
                    <StaticImage src="../images/thumbs/rectangle.png" alt="test" />
                </Link>
              </Col>
            </Row>
         </Container>
         <Container fluid className="row justify-content-center pb-5 mb-5">
            <Row>
              <Col sm>
              <Link to="/interviews" className="text-white h4 ">Browse all Interviews<ArrowRight /></Link>
              </Col>
            </Row>
         </Container>
         
         
        <Footer />
    </div>
   
  )
}

export const query = graphql`
query MyQuery {
  file(relativePath: {eq: "hero.png"}) {
    childImageSharp {
      gatsbyImageData(formats: [AUTO,WEBP],layout: FULL_WIDTH, placeholder: BLURRED)
      fluid (maxWidth: 700) {
        base64
        tracedSVG
        srcWebp
        srcSetWebp
        originalImg
        originalName
      }
    }
  }
}`

