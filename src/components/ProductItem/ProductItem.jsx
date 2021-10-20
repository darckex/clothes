import React from "react"
import { Link } from "react-router-dom"
import { server } from "../../settings"
import Image from "../Image/Image"
import Tags from "../Tags/Tags"
import "./ProductItem.scss"

const ProductItem = ({ id, gender, image, name, price, colors }) => {
	return (
		<Link to={`/products/${gender}/${id}`} className="product-item">
			<Image
				src={`${server}/media/${image}`}
				className="cover"
				aspectRatio="3/4"
			/>
			<div className="text fw center marg-top2 lines line2">{name}</div>
			{!!Number(price) && (
				<div className="text fw-1 center marg-top1">${price} USD</div>
			)}
			{!!colors && (
				<Tags
					className="content-center marg-top2"
					tags={colors.split(",")}
				/>
			)}
		</Link>
	)
}

export default ProductItem
