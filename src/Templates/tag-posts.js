import React from 'react'
import { graphql } from 'gatsby' 
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import Layout from '../components/layout'
import Post from '../components/Post'

const tagPosts = ({ data, pageContext }) => {
    
    const { tag } = pageContext
    const pageHeader = `Posts tagged with ${tag}`
    return (        
        <Layout pageTitle={pageHeader}>
            {data.allContentfulBlogPost.edges.map(({node}) => (
                <Post 
                    key={node.id}
                    title={node.title}
                    slug={node.slug}
                    author={node.author}
                    date={node.date}
                    body={documentToReactComponents(node.body.json)}
                    fluid={node.image.fluid}
                    tags={node.tags}
                    />
            ))}
        </Layout>
    )
}

export const tagQuery = graphql`
    query($tag: String!){
        allContentfulBlogPost(
            filter: { tags: { in: [$tag]}}
            sort: {fields: date, order: DESC}
        ){
            edges{
                node{
                    id
                    title
                    date(formatString: "MMM Do YYYY")
                    author
                    tags
                    image {
                        fluid(maxWidth: 650){
                            ...GatsbyContentfulFluid
                        }
                    }
                    slug
                    body {
                        json
                    }
                }
            }
        }
    }
`

export default tagPosts