import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "components/Layout"
import ReactMarkdown from "react-markdown"
import SEO from "components/seo"

const BlogTemplate = ({
  data: {
    blog: { title, description, slug, category, body, image },
  },
}) => (
  <Layout>
    <SEO title={title} description={description} />
    <section className="blog-template">
      <div className="section-center">
        <article className="blog-content">
          <ReactMarkdown source={body} />
        </article>
        <Link to="/blog" className="btn center-btn">
          Blog
        </Link>
      </div>
    </section>
  </Layout>
)

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      body
      category
      description
      image {
        formats {
          medium {
            url
          }
        }
      }
      title
      slug
    }
  }
`

export default BlogTemplate
