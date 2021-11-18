import React, { useState, setState } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Bio from "../components/bio"
import DegreePicture from "../components/degreepicture"
import IO from "../components/io"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Post = styled.li`
  border-radius: 1vw;
  padding: 2rem;
  margin: 4.85rem 0.85rem 1.85rem 0.85rem;
  transition: background-color 3.3s ease;
  background-color: ${({ isVisible }) => (isVisible ? 'snow' : ' chocolate')};
`

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="" />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  } else {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="" />
        <Bio />
        <ol style={{ listStyle: `none` }} className="main-list mains">
          <AniLink cover direction="left" duration={1} bg="#330705" to='/aboutme' itemProp="url">
            <DegreePicture />
          </AniLink>
          {posts.map(post => {
            const title = post.frontmatter.title || post.fields.slug
            return (
              <IO rootMargin = '-10px'>
              {({isVisible})=>(
                <Post key={post.fields.slug} isVisible={isVisible} className="post-list-item ghost-books">
                  <article
                    className="ghost-books-hue"
                    itemScope
                    itemType="http://schema.org/Article"
                  >
                    <header>
                      <h1 className="landingpage-blogtitle glowy-text">
                        <AniLink cover direction="right" duration={1} bg="#330705" to={post.fields.slug} itemProp="url">
                          <span className="specialtimes" itemProp="headline">{title}</span>
                        </AniLink>
                      </h1>
                    </header>
                    <section>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: post.frontmatter.description || post.excerpt,
                        }}
                        itemProp="description"
                        className="post-lede"
                      />
                    </section>
                  </article>
                </Post>
              )}
              </IO>
            )
          })}
        </ol>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___pagination], order: ASC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          pagination
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
