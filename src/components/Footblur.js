import * as React from "react"

const Jahr = new Date().getFullYear()

const Footblur = () => {
  return(
    <div className="footer-img" alt="bookshelf picture copyright M Brown, 2013">
      <div className="floatybox">
        <span>M Brown, Master of Library and Information Science</span>
        <span>Coded and designed by <a href="https://jacks.media">Jacks Media</a>
        {`, `}{Jahr}</span>
        <span>All images copyright M Brown, 2015-{Jahr}.</span>
      </div>
    </div>
  )
}
export default Footblur