import React from "react"
import useInstagram from "hooks/use-instagram"
import { Link } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"
import { Box, Grid, Anchor, Text } from "grommet"
import { Favorite, Chat } from "grommet-icons"
import { CenteredText } from "styles/styles.js"
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
  opacity: 0;
  transition: all 0.3s ease 0s;
`
const Content = styled(Box)`
  z-index: 10;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
`
const Info = styled(Box)`
  opacity: 0;
  transition: all 0.4s ease 0s;
`
const Wrapper = styled(Anchor)`
  box-shadow: none;
  color: inherit;
  position: relative;
  overflow: hidden;
  > div img {
    transition: all 0.3s ease 0s !important;
  }
  &:hover {
    ${Overlay} {
      opacity: 1;
    }
    ${Info} {
      opacity: 1;
    }
  }
`

const InstagramPhoto = ({ photo }) => (
  <Wrapper href={`https://www.instagram.com/p/${photo.id}/`}>
    <Overlay />
    <Image fluid={photo.fluid} loading="lazy" />
    <Content justify="center">
      <Info gap="medium" alignSelf="center" direction="row">
        <Favorite color="white" />
        <Text color="white">{photo.likes}</Text>
        <Chat color="white" />
        <Text color="white">{photo.comments}</Text>
      </Info>
    </Content>
  </Wrapper>
)

const InstagramFeed = () => {
  const instaPosts = useInstagram()
  return (
    <section style={{padding: '1em 4em'}}>
      <CenteredText>
        <h2>Don't Miss A Beat</h2>
        <div>
          Follow along on{" "}
          <Link to="https://instagram.com/susanturis/">Instagram</Link> for
          little bits of inspiration, yoga and good energy:
        </div>
      </CenteredText>
      <Grid
        justifyContent="start"
        gap={"small"}
        columns={[`1fr`, `1fr`, `1fr`]}
        margin="1em 0 0 0"
      >
        {instaPosts.map(photo => (
          <InstagramPhoto key={photo.id} photo={photo} />
        ))}
      </Grid>
    </section>
  )
}

export default InstagramFeed
