import React from 'react'
import Layout from 'components/Layout'
import SEO from 'components/seo'

const IyengarYoga = () => {

  return (
    <Layout>
      <SEO title='about iyengar' description='brief introduction to iyengar yoga philosophies and class experience'/>
  <section className="blog-template">
      <div className="section-center">
      <h1>About Iyengar Yoga</h1>
      <article className="blog-content">
      {/* <ReactMarkdown source={data.about.nodes[0].body}/> */}
      </article>
      </div>
      </section>
    </Layout>
  )
}


// export const query = graphql`
//   {
//     about: allStrapiAboutIyengar {
//       nodes {
//         body
//       }
//     }
//   }
// `


export default IyengarYoga
