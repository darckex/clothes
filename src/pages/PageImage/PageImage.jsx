import React from "react"
import Image from "../../components/Image/Image"
import { server } from "../../settings"
import "./PageImage.scss"

const PageImage = ({ onClose, image }) => {
	const handleClick = () => {
		onClose && onClose()
	}

	return (
		<div className="page-image place-center">
			<div className="overlay" onClick={handleClick}></div>
			<Image
				className="contain"
				src={`${server}/media/${image}`}
				height="95%"
			/>
		</div>
	)
}

export default PageImage
