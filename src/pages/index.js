import React from "react"
import Layout from "components/Layout"
import { Hero, Classes} from "components/homepage"
import SEO from "components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />

    <Classes />
  </Layout>
)

export default IndexPage
