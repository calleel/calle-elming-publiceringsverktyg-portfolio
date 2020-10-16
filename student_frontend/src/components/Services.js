import React from "react"
import Title from "./Title"
import services from "../constants/services"
import { Sections } from "../elements/SectionElements"

// Services component
const Services = () => {
  return (
    <Sections className="section bg-grey">
      <Title title="Tjänster" />
      <div className="section-center services-center">
        {services.map(service => {
          //  destructure
          const { id, icon, title, text } = service

          return (
            <article key={id} className="service">
              {icon}
              <h4>{title}</h4>
              <div className="underline"></div>
              <p>{text}</p>
            </article>
          )
        })}
      </div>
    </Sections>
  )
}

export default Services
