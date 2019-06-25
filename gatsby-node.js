exports.createPages = async ({ actions, graphql, reporter }) => {
    // This graphql is a "FUNCTION CALL!!!"
    const result = await graphql(`
        query {
            allMdx {
                nodes {
                    frontmatter {
                        slug
                    }
                }
            }
        }
    `);

    if(result.errors) {
        // This is gatsby's version of console.log
        reporter.panic('failed to create posts', result.errors);
    }

    const posts = result.data.allMdx.nodes;

    // Using forEach instead of map because we aren't returning anything here
    posts.forEach(post => {
        actions.createPage({
            path: post.frontmatter.slug,
            component: require.resolve('./src/templates/post.js'),
            context: {
                slug: post.frontmatter.slug,
            }
        },)
    });
}