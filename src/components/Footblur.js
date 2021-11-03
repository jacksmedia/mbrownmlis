import * as React from "react"

const Footblur = () => {
  return(
    <div className="footer-img" alt="bookshelf picture copyright M Brown, 2013">
      <div className="floatybox">
        <span>M Brown, Master of Library and Information Science</span>
        <span>Coded and designed by <a href="https://jacks.media">Jacks Media</a>
        {`, `}{new Date().getFullYear()}</span>
        <span>All images copyright M Brown, 2015-2021.</span>
      </div>
    </div>
  )
}
export default Footblur