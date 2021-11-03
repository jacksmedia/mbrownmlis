/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const DegreePicture = () => {

  return (
    <div className="post-list-item ghost-books center-out mt-5">
      <div className="floatybox center-in">
        <StaticImage
          className="degree-picture"
          layout="fixed"
          formats={["AUTO", "WEBP", "AVIF"]}
          src="../images/myMLIS.gif"
          width={180}
          height={180}
          quality={95}
          alt="My MLIS, 2015"
        />
        <h1 className="landingpage-blogtitle glowy-text">About Me
        </h1>
      </div>
    </div>
  )
}

export default DegreePicture
