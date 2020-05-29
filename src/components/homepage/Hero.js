import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "constants/socialLinks"
import FlowersBg from 'images/light-orange-indian-lehenga.png'
import {css} from 'styled-components'

const query = graphql`
  {
    file(relativePath: { eq: "side_angle.jpg" }) {
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

  return (
    <header className="hero">
      <div className="section-center hero-center" css={{backgroundImage: `url(${FlowersBg})`}}>
        <article className="hero-info">
          <div>
            {/* <div className="under"></div> */}
            <h1>i'm Susan</h1>
            <h4>certified iyengar yoga instructor</h4>
            <Link to="/contact" className="btn">
              take a class
            </Link>
            <SocialLinks />
          </div>
        </article>
        <Image fluid={fluid} className="hero-img" />
      </div>
    </header>
  )
}

export default Hero