import React from "react"

const Button = (props) => {
	const { className = "", type = "button", children, ...attr } = props
	return (
		<button className={`btn ${className}`} type={type} {...attr}>
			{children}
		</button>
	)
}

export default Button
