import React from "react"
import Title from "./Title"
import services from 'constants/classTypes'
const Classes = () => {
  return (
    <section className="section bg-grey">
         <Title title='class offerings'/>
      <div className="section-center services-center">
        {services.map(service => {
          const { id, title, subtitle,text } = service

          return (
            <article key={id} className="service">
             
              <h4>{title}</h4>
              <div className="underline"></div>
              <h5>{subtitle}</h5>
              <p>{text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Classes
