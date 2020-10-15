import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"
import { Link } from "gatsby"
import ReactMarkdown from "react-markdown"
import SEO from "../components/SEO"
import downloadFile from "../../static/SohailCV2020.pdf"
import { AboutPageWrapper, AboutCenter, AboutArticle, AboutStack, CVBtn } from "../elements/AboutElements"

// ...GatsbyImageSharpFluid
const About = ({
  data: {
    about: { nodes },
  },
}) => {
  //console.log(nodes)
  const { info, stack, title, image } = nodes[0]
  return (
    <Layout>
      <SEO title="CV" description="Sohails CV" />
      <AboutPageWrapper>
        <AboutCenter>
          <Image fluid={image.childImageSharp.fluid} className="about-img" />
          <AboutArticle>
            {/* <Title title={title} />
                <p>{info}</p> */}
            <ReactMarkdown source={info} />
            <AboutStack>
              {stack.map(item => {
                return <span key={item.id}>{item.title}</span>
              })}
            </AboutStack>

            <CVBtn>
              <a href={downloadFile} download>
                Ladda ner fullständig CV
              </a>
              {` `}
            </CVBtn>
            <Link to="/contact" className="btn">
              kontakta mig
            </Link>
          </AboutArticle>
        </AboutCenter>
        <></>
      </AboutPageWrapper>
    </Layout>
  )
}

export const query = graphql`
  {
    about: allStrapiAbout {
      nodes {
        stack {
          id
          title
        }
        title
        info
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default About
