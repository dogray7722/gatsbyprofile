import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import { graphql } from 'gatsby'
import Head from '../components/Head'
import Header from '../components/header'
import Footer from '../components/Footer'
import '../styles/_background-image.scss'

const IndexPage = props => (
  <>
    <Head />
    <Header />
    <BackgroundImage
      className="masthead"
      fluid={props.data.indexImage.childImageSharp.fluid}
    >
      <div className="black-overlay">
        <div
          style={{
            marginLeft: '10%',
          }}
          className="context-box"
        >
          <h1 style={{ fontSize: '5.5rem', fontFamily: 'limelight' }}>
            Dave Gray
          </h1>
          <h2 style={{ fontSize: '3.5rem' }}>Voiceover Artist</h2>
        </div>
      </div>
    </BackgroundImage>
    <Footer />
  </>
)

export const pageQuery = graphql`
  query {
    indexImage: file(relativePath: { eq: "condensor_mic.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
