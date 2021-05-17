import React from 'react'
import Navbar from '../components/navbar/NavBar';
import Footer from '../components/footer/Footer';
import '../styles/style.css';
import {search} from '../styles/index.module.css';
import { graphql, Link } from 'gatsby';
import { Container,Row,Col,Button } from 'react-bootstrap';
import { StaticImage } from 'gatsby-plugin-image';
import {ArrowRight} from "react-bootstrap-icons";
import Mail from '../components/mail/Mail';


export default function interviewDetails({data}) {
    const datas = data.markdownRemark;
    return (
        <div>
            <Navbar />
            <Container fluid className="text-center mt-5">
                <h1>{datas.frontmatter.title} #{datas.frontmatter.number}</h1>
            </Container>
            <Container fluid className="text-center w-50 mt-4">
                <p>{datas.frontmatter.about}</p>
            </Container>
            <Container fluid className="row justify-content-center">
                <Row>
                    <Col>
                    <StaticImage src="../images/featured/youtube.png" alt="youtube"/>
                    </Col>
                </Row>                    
            </Container>
            <Container className="text-center">
                <h4>How all it got started?</h4>
                <div dangerouslySetInnerHTML={{__html:datas.html}}></div>
            </Container>
            <Container fluid className="row justify-content-center pb-5 mb-5">
            <Row>
              <Col sm>
              <Link to="/interviews" className="text-white h4 ">Browse all Interviews<ArrowRight /></Link>
              </Col>
            </Row>
         </Container>
         <Mail />
            <Footer />
        </div>
    )
}

export const query = graphql`
query details($title:String) {
    markdownRemark(frontmatter:{title:{eq:$title}}) {
      id
      html
      frontmatter {
        title
        number
        date
        about
        featured {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats:[WEBP,PNG])
          }
        }
      }
    }
  }
  `