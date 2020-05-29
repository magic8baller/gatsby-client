import React from "react"

import useInstagram from "hooks/use-instagram"
import Image from "gatsby-image"

import { InstaSection, InstaFeed } from "styles/instaFeed.styles.js"
const InstagramFeed = () => {
  const instaPosts = useInstagram()
  return (
    <InstaSection>
      <h2>Instagram Posts from @susanturis</h2>

      <InstaFeed>
        {instaPosts.map(photo => (
          <li
            key={photo.id}
           
          >
            <Image
              fixed={photo.fixed}
              alt={photo.caption}
            />
            <div className="overlay">
              <img src={require('../../images/like.png')} alt="like heart icon" className="icon"/>
              <p className="text">{photo.likes}</p>
            </div>
          </li>
        ))}
      </InstaFeed>
      <a href={`https://instagram/susanturis`}>See more on Instagram &rarr;</a>
    </InstaSection>
  )
}

export default InstagramFeed
