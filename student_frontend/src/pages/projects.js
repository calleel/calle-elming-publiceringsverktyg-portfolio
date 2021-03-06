import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import SEO from "../components/SEO"
import { ProjectPage } from "../elements/ProjectElements"
// ...GatsbyImageSharpFluid

// page for project
const ProjectsPage = ({
  data: {
    allStrapiProjects: { nodes: projects },
  },
}) => {
  return (
    <Layout>
      <SEO title="Projekt" description="Projektsidan" />
      <ProjectPage>
        <Projects projects={projects} title="Alla projekt" />
      </ProjectPage>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProjects {
      nodes {
        github
        id
        description
        title
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
  }
`

export default ProjectsPage
