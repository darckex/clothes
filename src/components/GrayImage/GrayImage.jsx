import React from "react"
import { server } from "../../settings"
import Image from "../Image/Image"
import "./GrayImage.scss"

const GrayImage = ({ image, text }) => {
	return (
		<div className="gray-image flex content-center items-al-center">
			<Image src={`${server}/media/${image}`} aspectRatio="1/1" />
			<div className="overlay"></div>
			<div className="text center white size4 fw">{text}</div>
		</div>
	)
}

export default GrayImage
