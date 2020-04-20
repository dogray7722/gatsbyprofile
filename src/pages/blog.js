import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql, StaticQuery } from 'gatsby'
import Post from '../components/Post'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'

const BlogPage = () => (

<Layout pageTitle="New in My World">
    <SEO title="Blog" />
        <StaticQuery 
            query={indexQuery}
            render = { data => {
            return (
                <div>
                    {data.allContentfulBlogPost.nodes.map(({ id, title, slug, author, body, date, image, tags }) => ( 
                        <Post 
                            key={id}
                            title={title}
                            slug={slug}
                            author={author}
                            body={documentToReactComponents(body.json)}
                            date={date}
                            fluid={image.fluid}
                            tags={tags}
                        />
                    ))}
                </div>
                )
            }}
        />
</Layout>
)

const indexQuery = graphql`
    query newQuery {
    allContentfulBlogPost(sort: {fields: date, order: DESC}) {
        nodes{
            id
            title
            slug
            tags
            date(formatString: "MMM Do YYYY")
            image {
                fluid{
                    ...GatsbyContentfulFluid
                }
            }
            body {
                json
            }
        }
    }
}`

export default BlogPage
