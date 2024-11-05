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
            <br/>
              <a href="https://docs.google.com/document/d/1d8ZvldGPH3H1KHxos0sgMJUQm-Kltv_OVR5h4VUhiP0/edit?usp=sharing">Here is my Resume</a>.&nbsp;
              <a href="https://www.linkedin.com/in/emily-brown-9689a327/">Here is my LinkedIn</a>.&nbsp;
              Huzzah!
          </h3>
        )}
      </div>
    </div>
  )
}

export default Bio
