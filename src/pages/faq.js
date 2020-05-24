import React from 'react'
import Layout from 'components/Layout'
import {graphql} from 'gatsby'
import ReactMarkdown from 'react-markdown'

const IyengarYoga = ({data: {strapiFaq: {body}}}) => {

  return (
    <Layout>
  <section className="blog-template">
      <h1>FAQ</h1>
      <br/>
      <div className="section-center">
      <article className="blog-content">
      <ReactMarkdown source={body}/>
      </article>
      </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    strapiFaq {
      body
    }
  }
`

export default IyengarYoga
