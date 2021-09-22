import React from "react"
const RadioColor = ({ label, name, options = [] }) => {
	return <div className="radio-color">
		<div className="color-holder">
			<div className="color-item">
				<input type="radio" name={name} value={} />
				<div className="color bg-red"></div>
			</div>
		</div>
	</div>
}

export default RadioColor
