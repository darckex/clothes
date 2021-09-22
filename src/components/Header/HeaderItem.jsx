import React from "react"
import { NavLink } from "react-router-dom"

const HeaderItem = ({ text, ...attr }) => {
	return (
		<NavLink className="link" activeClassName="active" {...attr}>
			{text}
		</NavLink>
	)
}

export default HeaderItem
