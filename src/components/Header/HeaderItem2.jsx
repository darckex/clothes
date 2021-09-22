import React from "react"
import { NavLink } from "react-router-dom"

const HeaderItem2 = ({ icon, text, ...attr }) => {
	return (
		<NavLink className="flex al-center gap2 link" {...attr}>
			<div className={`icon size2 ${icon}`}></div>
			<div>{text}</div>
		</NavLink>
	)
}

export default HeaderItem2
