import { useStaticQuery, graphql } from "gatsby"

const useInstagram = () => {
  const data = useStaticQuery(graphql`
    query {
      allInstaNode(limit: 12) {
        nodes {
          id
          likes
          comments
          
          caption
          username
          localFile {
            childImageSharp {
              fixed(width: 200, height: 200) {
                ...GatsbyImageSharpFixed
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
    caption: n.caption,
    username: n.username,
    likes: n.likes
  }))
}

export default useInstagram