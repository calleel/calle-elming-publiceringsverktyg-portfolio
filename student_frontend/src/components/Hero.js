import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import { HeroWrapper } from "../elements/HeroElements"
// ...GatsbyImageSharpFluid

const query = graphql`
  {
    file(relativePath: { eq: "hero-img.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  // console.log(data)

  return (
    <HeroWrapper className="hero">
      <div className="section-center hero-center">
        <div class="hero-content-container">
          <article className="hero-info">
            <div>
              <h1>Calle Elming</h1>
              <div className="underline"></div>
              <h4>Blivande systemutvecklare</h4>
              <p>
                Studerar just nu till Systemutvecklare och är
                <br />
                alltid på jakt för att lära mig nya saker.
              </p>
              <p>
                Jag har erfarenhet av bland annat:
                <br />
                - HTML, CSS, Javascript
                <br />
                - Gatsby
                <br />
                - Strapi
                <br />- C# .NET, Blazor, MVC
              </p>

              <Link to="/contact" className="btn">
                kontakta mig
              </Link>
            </div>
          </article>
          <div class="image-container">
            <Image fluid={fluid} className="hero-img" />
          </div>
        </div>
      </div>
    </HeroWrapper>
  )
}
export default Hero
