import React from 'react'
import Layout from 'components/Layout'
import SEO from 'components/seo'
// import {graphql} from 'gatsby'
// import ReactMarkdown from 'react-markdown'

const IyengarYoga = () => {

  return (
    <Layout>
      <SEO title='FAQ' description='Frequently asked questions about yoga classes and what to expect from an iyengar led virtual classroom'/>
  <section className="blog-template">
      <h1>FAQ</h1>
      <br/>
      <div className="section-center">
      <article className="blog-content">
      {/* <ReactMarkdown source={body}/> */}
      </article>
      </div>
      </section>
    </Layout>
  )
}

// export const query = graphql`
//   {
//     strapiFaq {
//       body
//     }
//   }
// `

export default IyengarYoga
