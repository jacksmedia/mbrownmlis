import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Footblur = () => {
  return(
    <div className="footer-img" alt="bookshelf picture copyright M Brown, 2013">
      <div className="floatybox">
        <span>M Brown, Masters in Library and Information Science</span>
        <span>Coded and designed by <a href="https://jacks.media">Jacks Media</a>
        {`, `}{new Date().getFullYear()}</span>
      </div>
    </div>
  )
}
export default Footblur