import React from 'react'
import BackgroundImage from 'gatsby-background-image' 
import { graphql } from 'gatsby'
import Header from '../components/header'
import Footer from '../components/Footer'

import '../styles/background-image.scss'

const IndexPage = (props) => (
    <>
    <Header />
    <BackgroundImage 
        className="masthead"
        fluid={props.data.indexImage.childImageSharp.fluid}   
    >
    <div className="black-overlay">
        <div className="context-box">
            <h1>Dave Gray</h1>    
            <h3>Audio Books Voiceover Artist</h3>
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
				fluid(maxWidth: 1920)	{
					...GatsbyImageSharpFluid			
			}
		}
	}
}
`

export default IndexPage