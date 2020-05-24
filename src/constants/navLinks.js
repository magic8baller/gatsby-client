import { Link } from "gatsby"
import React from "react"
const routesData = [
  {
    id: 0,
    path: "/",
    name: "home",
  },
  {
    id: 1,
    path: "/bio/",
    name: "bio",
  },
  {
    id: 2,
    path: "/blog/",
    name: "blog",
  },
  {
    id: 5,
    path: "/iyengar/",
    name: "iyengar",
  },
  {
    id: 4,
    path: "/faq/",
    name: "faq",
  },
  {
    id: 5,
    path: "/contact/",
    name: "contact",
  },
]

export default ({ styleClass }) => (
  <ul className={`page-links ${styleClass && styleClass}`}>
    {routesData.map(route => (
      <li key={route.id}>
        <Link to={route.path}>{route.name}</Link>
      </li>
    ))}
  </ul>
)
