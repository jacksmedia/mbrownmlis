import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import booksy from "../images/header.png"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


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