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
                        {data.allContentfulBlogPost.nodes.map(({ id, slug, image, title }) => (
                        <Card key={id}>
                            <Link to={slug}>
                                <Img className="card-image-top"
                                    fluid={image.fluid}/>
                            </Link>
                            <CardBody>
                                <CardTitle>
                                    <Link to={slug}>
                                        {title}
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

    const sidebarQuery = graphql`
        query sidebarQuery {
            allContentfulBlogPost(sort: {fields: date, order: DESC}, limit: 3) {
            nodes{
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
`


export default Sidebar
