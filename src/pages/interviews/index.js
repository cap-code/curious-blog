import React from 'react'
import Navbar from '../../components/navbar/NavBar';
import Footer from '../../components/footer/Footer';
import { Button, Container, Row, Col} from 'react-bootstrap';
import './index.css';
import '../../styles/style.css';
import { graphql, Link } from 'gatsby';
import { GatsbyImage,getImage } from 'gatsby-plugin-image';
import Mail from '../../components/mail/Mail';

export default function index({data}) {
    const interviews = data.allMarkdownRemark.nodes;
    console.log(data);
    return (
        <div>
            <Navbar />
            <h1 className=" display-4 mt-4 text-center pb-2 font-weight-bold">Learn from the folks who have</h1>
            <h1 className=" display-4  text-center pb-2 font-weight-bold">got sh*t done</h1>
            <p className=" h5 text-center pt-5">Interviews of people who have made real world </p>
            <p className="h5 text-center">products and communities.</p>
            <Mail />
            <div className="inter">
            {interviews.map(interview=>(
                    <div className="intercard" key={interview.id}>
                     <GatsbyImage image={getImage(interview.frontmatter.thumbs.childImageSharp.gatsbyImageData)} alt="test" />
                     <h3 className=" text-center text-white">{interview.frontmatter.title}</h3>
                     <h3 className=" text-center text-white">#{interview.frontmatter.number}</h3>
                     <p className="text-white">{interview.frontmatter.date}</p>
                     <p className="text-white">{interview.frontmatter.about}</p>
                     <Link to={"/interviews/"+interview.frontmatter.title}><Button variant="light" className="text-dark" size="lg">watch it</Button>
                    </Link>  
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    )
}

export const query = graphql`
query InterviewQuery {
    allMarkdownRemark {
      nodes {
        id
        frontmatter {
          title
          date
          number
          about
          thumbs {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, formats: PNG, placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`