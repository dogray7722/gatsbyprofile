import React from 'react'

import Layout from  '../components/layout'
import SEO from '../components/seo'
import { Row, Col } from 'reactstrap'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

const AboutPage = ({ data }) => (
    <Layout pageTitle="About">
        <SEO title="About"></SEO>
        <Row>
            <Col md="6">
            <div>
            <p>An experienced and talented voice actor, Dave Gray has quite the special set of skills when it comes creating high quality voice over recordings.  Having voiced a number of works for the Colorado Society Talking Book Library, Dave is passionate about creating quality reads that connect with the audience emotionally, and which provide a lasting impact on listeners.  Having narrated both fiction and non-fiction works, Dave is a consummate professional.  He takes pride in his reads and works with the content creator to really focus on the intent of every piece.</p>

            </div>
            </Col>
            <Col md="6">
                <Img fluid={data.file.childImageSharp.fluid}></Img>
            </Col>
        </Row>
        <Row>
            <Col style={{paddingTop: '10px'}}md="12">
            <p>Dave is available for work in whatever niche you may require whether that be in Audio Books, online training, character voice for animations, or reading commercial copy.  If you find Dave Gray's voice work would add value to your next audio project, and you most undoubtedly will, feel free to reach out via the contact page.  I can promise you, you won't regret it!</p>
            </Col>
        </Row>
    </Layout>
)

export const ImageQuery = graphql`
query {
    file(relativePath: { eq: "profile_pic.jpg"}) {
        childImageSharp {
            fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
            }
        }
    }
}
`

export default AboutPage