import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { ContactPage, ContactForm, FormGroup, FormButton } from "../elements/ContactElements"

const contact = () => {
  return (
    <Layout>
      <SEO title="Kontakt" description="Kontaktsidan" />
      <ContactPage>
        <ContactForm>
          <h3>kontakta mig</h3>
          <form action="https://formspree.io/f/xwkwvzkb" method="POST">
            <FormGroup>
              <input
                type="text"
                placeholder="namn"
                name="name"
              />
              <input
                type="email"
                placeholder="epost"
                name="email"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="meddelande"
              ></textarea>
            </FormGroup>
            <FormButton type="submit">
              Kontakta mig
            </FormButton>
          </form>
        </ContactForm>
      </ContactPage>
    </Layout>
  )
}

export default contact
