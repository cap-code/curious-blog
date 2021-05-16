const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {

  const { data } = await graphql(`
    query Articles {
      allMarkdownRemark {
        nodes {
          frontmatter {
            title
          }
        }
      }
    }
  `)

  data.allMarkdownRemark.nodes.forEach(node => {
    actions.createPage({
      path: '/interviews/'+ node.frontmatter.title,
      component: path.resolve('./src/templates/interview-details.js'),
      context: { title: node.frontmatter.title }
    })
  })

}