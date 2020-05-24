import React from "react"
import { graphql } from "gatsby"

const Blog = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

export const query = graphql`
  {
    allStrapiBlogs {
      nodes {
        body
        category
        description
        title
        slug
        image {
          formats {
            medium {
              url
            }
          }
        }
      }
    }
  }
`

export default Blog
