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
                    {data.allContentfulBlogPost.edges.map(({ node }) => ( 
                        <Post 
                            key={node.id}
                            title={node.title}
                            slug={node.slug}
                            author={node.author}
                            body={documentToReactComponents(node.body.json)}
                            date={node.date}
                            fluid={node.image.fluid}
                            tags={node.tags}
                        />
                    ))}
                </div>
                )
            }}
        />
</Layout>
)

//figure out how to sort contentful blog posts: (sort: {fields: [node___date], order: DESC})
const indexQuery = graphql`
    query newQuery {
    allContentfulBlogPost {
        edges{
            node{
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
    }
}`

export default BlogPage
