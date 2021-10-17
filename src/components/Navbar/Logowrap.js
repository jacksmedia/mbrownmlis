import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Logowrap = () => {
	return(
		<div>
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
		</div>
	)
}

export default Logowrap
