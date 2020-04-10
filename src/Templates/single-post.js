import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Img from 'gatsby-image'
import { Card, CardBody, CardSubtitle, CardText, Badge } from 'reactstrap'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import { graphql, Link } from 'gatsby'

const singlePost = ({ data }) => {
    const post = data.contentfulBlogPost

    return (
        <Layout>
        <SEO title={post.title}></SEO>
        <h1>{post.title}</h1> 
            <Card>
                <Img className="card-time-top" fluid=
                {post.image.fluid}/>
                <CardBody>
                    <CardSubtitle>
                    <span className="text-info">{post.date}</span>{' '}by{' '}
                    <span className="text-info">{post.author}</span>
                    </CardSubtitle>
                    <CardText>{documentToReactComponents(post.body.json)}</CardText>
                    <ul className="post-tags">
                    {post.tags.map(tag => (
                        <li key={tag}>
                            <Link to={`tag/${tag}`}>
                                <Badge color="primary">
                                    {tag}
                                </Badge>
                            </Link>
                        </li>
                    ))}
                    </ul>
                </CardBody>
            </Card>
    </Layout>
    )
}

export const postQuery = graphql`
query blogPostBySlug($slug: String!){
    contentfulBlogPost( slug: { eq: $slug} ){
        title
        date(formatString: "MMM Do YYYY")
        author
        tags
        image {
            fluid{
                ...GatsbyContentfulFluid
                }
            }
        body{
            json
        }
        }
    }
`

export default singlePost