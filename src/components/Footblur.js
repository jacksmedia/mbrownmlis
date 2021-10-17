import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Footblur = (width, height) => {
  return(
    <div className="footsie">
      <StaticImage
        className="tiny-icon"
        layout="fixed"
        formats={["AUTO", "WEBP", "AVIF"]}
        src="./header.png"
        width={399}
        height={73}
        quality={95}
        alt="M Brown MLIS"
      />
      <div className="floatybox">
        <p>M Brown, Masters in Library and Information Science</p>
        <p>Coded and designed by <a href="https://jacks.media">Jacks Media</a>
        {`, `}{new Date().getFullYear()}</p>
      </div>
    </div>
  )
}
export default Footblur