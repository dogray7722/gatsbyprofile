const path = require('path')
const _ = require('lodash')

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;

    const templates = {
        singlePost: path.resolve('src/templates/single-post.js'),
        tagPosts: path.resolve('src/templates/tag-posts.js')
    }

    return graphql(`
        {
            allContentfulBlogPost{
                edges{
                    node{
                        author
                        tags
                        title
                        slug
                    }
                }
            }
        }
    `).then(res => {
        if(res.errors) return Promise.reject(res.errors)

        const posts = res.data.allContentfulBlogPost.edges

        posts.forEach(({node}) => {
            createPage({
                path: node.slug,
                component: templates.singlePost,
                context: {
                    slug: node.slug
                }
            })
        });

        let tags = []
        _.each(posts, edge => {
            if(_.get(edge, 'node.tags')){
                tags = tags.concat(edge.node.tags)
            }
        })

        tags = _.uniq(tags)
        
        tags.forEach(tag => {            
            createPage({
                path: `/tag/${tag}`,
                component: templates.tagPosts,
                context: {
                    tag: tag
                }
            })
        })
    })
}