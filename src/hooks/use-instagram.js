import { useStaticQuery, graphql } from "gatsby"

const useInstagram = () => {
  const data = useStaticQuery(graphql`
    query {
      allInstaNode(limit: 6) {
        nodes {
          id
          likes
          comments
          
          caption
          username
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return data.allInstaNode.nodes.map(n => ({
    ...n.localFile.childImageSharp,
    id: n.id,
    comments: n.comments,
    caption: n.caption,
    username: n.username,
    likes: n.likes
  }))
}

export default useInstagram