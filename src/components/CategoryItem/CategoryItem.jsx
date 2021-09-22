import React from "react"
import "./CategoryItem.scss"

const CategoryItem = ({ icon, text }) => {
	return (
		<div className="category-item pad5 bg-tan bord-rad-1 place-center gap5">
			<div className={`icon size10 ${icon}`}></div>
			<div className="text size3">{text}</div>
		</div>
	)
}

export default CategoryItem
