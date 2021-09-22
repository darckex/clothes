import React from "react"
import "./Tags.scss"

const Tags = ({ className = "", tags = [] }) => {
	return (
		<div className={`tags flex wrap gap1 ${className}`}>
			{tags.map((v, k) => (
				<div
					key={k}
					className={`tag size0 text white bg-${v.bg || "black"}`}>
					{v.text}
				</div>
			))}
		</div>
	)
}

export default Tags
