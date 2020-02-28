import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql, StaticQuery } from 'gatsby'
import Post from '../components/Post'

const BlogPage = () => (

<Layout pageTitle="New in My World">
    <SEO title="Blog" />
        <StaticQuery 
            query={indexQuery}
            render = { data => {
            return (
                <div>
                    {data.allMarkdownRemark.edges.map(({ node }) => ( 
                        <Post 
                            key={node.id}
                            title={node.frontmatter.title}
                            slug={node.fields.slug}
                            author={node.frontmatter.author}
                            body={node.excerpt}
                            date={node.frontmatter.date}
                            fluid=              {node.frontmatter.image.childImageSharp.fluid}
                            tags={node.frontmatter.tags}
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
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
        edges{
            node{
                id
                frontmatter{
                    title
                    date(formatString: "MMM Do YYYY")
                    author
                    tags
                    image {
                        childImageSharp {
                            fluid(maxWidth: 800) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
                fields{
                    slug
                }
            excerpt
            }
        }
    }
}`

export default BlogPage
