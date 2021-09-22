import React from "react"
import { Link } from "react-router-dom"
import Image from "../Image/Image"
import Tags from "../Tags/Tags"
import "./ProductItem.scss"

const ProductItem = ({ id = 0, image, name, price, colors = [] }) => {
	return (
		<Link to={`/products/${id}`} className="product-item">
			<Image src={image} className="cover" height={300} />
			<div className="text fw center marg-top2 lines line2">{name}</div>
			<div className="text fw-1 center marg-top1">${price} USD</div>
			<Tags className="content-center marg-top2" tags={colors} />
		</Link>
	)
}

export default ProductItem