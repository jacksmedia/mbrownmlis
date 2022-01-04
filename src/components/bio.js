/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="center-out mt-5">
      <div className="floatybox sepia-porthole center-in">
        <StaticImage
          className="bio-avatar"
          layout="fixed"
          formats={["AUTO", "WEBP", "AVIF"]}
          src="../images/brookside.jpeg"
          width={300}
          height={300}
          quality={95}
          alt="Profile picture"
        />
        {author?.name && (
          <h3 className="white-text">
            Written by {author.name}, {author?.summary || null}
            {` `}
            <br/><a href={social}>
              Here is my LinkedIn
            </a>.&nbsp;Huzzah!
          </h3>
        )}
      </div>
    </div>
  )
}

export default Bio
