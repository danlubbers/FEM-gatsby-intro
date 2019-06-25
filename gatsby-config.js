module.exports = {
    siteMetadata: {
      title: 'Frontend Masters Gatsby Workshop',
      description:
        'A site we built together during a full-day Frontend Masters Gatsby workshop!',
    },
    plugins: ['gatsby-plugin-emotion', 
    'gatsby-plugin-react-helmet',
    {
        // This will load all MDX files into the Layout Template
        resolve: 'gatsby-mdx',
        options: {
            defaultLayouts: {
                default: require.resolve('./src/components/layout.js')
            }
        }
    }
],
  };