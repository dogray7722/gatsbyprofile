import React from 'react'
import { Card, CardBody, CardTitle, Form, FormGroup, Input } from 'reactstrap'
import { graphql, StaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'

const Sidebar = () => (
    <div>
        <Card>
            <CardBody>
                <CardTitle className="text-center text-uppercase mb-3">Newsletter
                </CardTitle>
                <Form className="text-center">
                    <FormGroup>
                        <Input type="email" placeholder="Your email address here"/>
                    </FormGroup>
                    <button className="btn btn-outline-success text-uppercase">Subscribe
                    </button>
                </Form>
            </CardBody>
        </Card>
        <Card>
            <CardBody>
                <CardTitle className="text-center text-uppercase mb-3">
                    Recent Posts
                </CardTitle>
                <StaticQuery 
                query={sidebarQuery} 
                render={(data) => (
                    <div>
                        {data.allContentfulBlogPost.edges.map(({ node }) => (
                        <Card>
                            <Link to={node.slug}>
                            <Img className="card-image-top"
                                fluid={node.image.fluid}/>
                            </Link>
                        <CardBody>
                            <CardTitle>
                                <Link to={node.slug}>
                                    {node.title}
                                </Link>
                            </CardTitle>
                        </CardBody>
                        </Card>
                        ))}
                    </div>) 
                }/>
            </CardBody>
        </Card>
    </div>
)


//TODO Figure out how to sort: ( sort: { fields: [frontmatter___date], order: DESC} limit: 3 )
    const sidebarQuery = graphql`
        query sidebarQuery {
            allContentfulBlogPost {
            edges{
                node{
                    title
                    slug 
                    image {
                        fluid{
                        ...GatsbyContentfulFluid
                       }
                    }
                }
            }
        }
    }
`


export default Sidebar
