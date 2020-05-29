import React from "react"
import { graphql } from "gatsby"
import Layout from "components/Layout"
import SEO from "components/seo"
import BlogList from 'components/blog/BlogList'

const Blog = ({ data }) => {
  const posts = data.allGhostPost.edges.map(({node}, idx) => ({node}))
  console.log(posts)
return (
  <Layout>
    <SEO title='blog' description='yoga blog iyengar'/>
<BlogList blogs={posts}/>
{/* <pre>{JSON.stringify(data.allGhostPost.edges, null, 4)}</pre> */}
  </Layout>
)}
export const query = graphql`
  {
    allGhostPost {
      edges {
        node {
          title
          tags {
            name
          }
          slug
          url
          reading_time
          created_at(locale: "en-US")
          feature_image
          featured
        }
      }
    }
  }
`

export default Blog