// import React from "react"
// // import PropTypes from 'prop-types'
// import { graphql, Link } from "gatsby"
// import Layout from "components/Layout"
// import SEO from "components/seo"
// import { BlogPosts, BlogMount, BlogSidebar } from "styles/styles"

// const Index = ({ data }) => {
//   const posts = data.allGhostPost.edges

//   return (
//     <Layout>
//       <SEO title={"Blog"} />
//       {/* <BlogHero /> */}
//       <BlogMount>
//         <BlogPosts>
//           {/* {posts.sort((nodeA, nodeB) => {
//                       return nodeB.node.published_at - nodeA.node.published_at
//                     }).map(({ node }) => (
//                         <BlogCard post={node} key={node.id} />
//                     ))}
//                     <p style={{ textAlign: "center", maxWidth: "700px", padding: "80px 0", fontWeight: 700, fontSize: "24px", display: "grid", margin: 0 }}>
//                       <Emoji text={"👻"} options={generateEmojiConfig({ className: 'emoji' })} />
//                       <br />It's pretty spooky down here.
//                       <p style={{ fontSize: '16px' }}>Why don't you head back <Link to={"/blog#"}><TextButton isBasic>to the top?</TextButton></Link></p>
//                     </p>*/}
//         </BlogPosts>
//         <BlogSidebar></BlogSidebar>
//       </BlogMount>
//     </Layout>
//   )
// }


// export default Index

// // This page query loads all posts sorted descending by published date
// // The `limit` and `skip` values are used for pagination
// export const pageQuery = graphql`
//   query PostQuery {
//     allGhostPost(sort: { order: DESC, fields: [published_at] }) {
//       edges {
//         node {
//           # Main fields
//         id
//         title
//         slug
//         featured
//         feature_image
//         excerpt
//         custom_excerpt
//         visibility
//         # Dates formatted
//         created_at_pretty: created_at(formatString: "DD MMMM, YYYY")
//         published_at_pretty: published_at(formatString: "DD MMMM, YYYY")
//         updated_at_pretty: updated_at(formatString: "DD MMMM, YYYY")
       
//         # SEO
//         meta_title
//         meta_description
//         og_description
//         og_image
//         og_title
//         twitter_description
//         twitter_image
//         twitter_title
        
//         # Tags
//         primary_tag {
//             name
//             slug
//             description
//             feature_image
//             meta_description
//             meta_title
//             visibility
//         }
//         tags {
//             name
//             slug
//             description
//             feature_image
//             meta_description
//             meta_title
//             visibility
//         }
//         # Content
//         plaintext
//         html
//         # Additional fields
//         url
     
//         uuid
//         page
       
//         comment_id
//         reading_time
//         }
//       }
//     }
//   }
// `
