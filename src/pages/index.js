import React from "react"
import Layout from "components/Layout"
import { Hero, Classes,  InstaFeed, Schedule} from "components/homepage"
import SEO from "components/seo"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Schedule/>
    <Classes />
<InstaFeed/>
  </Layout>
)

export default IndexPage
