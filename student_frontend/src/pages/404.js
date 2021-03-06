import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import SEO from "../components/SEO"


// 404 page
const Error = () => {
  return (
    <Layout>
      <SEO>
        <main className="error-page">
          <div className="error-container">
            <h1>Oj, Något gick fel</h1>
            <Link to="/" className="btn">
              Tillbaka Hem
            </Link>
          </div>
        </main>
      </SEO>
    </Layout>
  )
}

export default Error
