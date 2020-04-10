import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Img from 'gatsby-image'
import { Card, CardBody, CardSubtitle, Badge } from 'reactstrap'
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
                    <ul className="post-tags">
                    {post.tags.map(tag => (
                        <li key={tag}>
                            <Link to={post.slug}>
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
        }
    }
`

export default singlePost