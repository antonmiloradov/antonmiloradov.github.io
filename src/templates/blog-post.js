import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'

import FileLinks from './file-links'
import { rhythm, scale } from '../utils/typography'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    const { pathContext } = this.props
    const filename = pathContext.slug.replace(/\//g, '')

    return (
      <div>
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`}>
          <meta name="description" content="Антон Милорадов" />
        </Helmet>
        <h1>{post.frontmatter.title}</h1>

        <p
          style={{
            ...scale(-1 / 5),
            display: 'block',
            marginBottom: 0,
            marginTop: rhythm(-1),
          }}
        >
          {post.frontmatter.date}
        </p>
        <FileLinks filename={filename} />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
