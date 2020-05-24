import React from "react"
import { FaInstagram, FaFacebookSquare, FaTwitterSquare } from "react-icons/fa"

const socialIcons = [
  {
    id: `0-fb-link`,
    icon: <FaFacebookSquare className="social-icon facebook-icon" />,
    path: `https://www.facebook.com/susan-turis/`,
  },
  {
    id: `1-ig-link`,
    icon: <FaInstagram className="social-icon instagram-icon" />,
    path: `https://www.instagram.com/susan-turis/`,
  },
  {
    id: `2-twit-link`,
    icon: <FaTwitterSquare className="social-icon instagram-icon" />,
    path: `https://www.instagram.com/susan-turis/`,
  },
]

export default ({ styleClass }) => (
  <ul className={`social-links ${styleClass && styleClass}`}>
    {socialIcons.map(link => (
      <li key={link.id}>
        <a href={link.url} className="social-link">
          {link.icon}
        </a>
      </li>
    ))}
  </ul>
)
