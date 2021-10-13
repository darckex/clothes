import React from "react"
import { NavLink } from "react-router-dom"

const ProfileLinks = ({ to, text }) => {
	return (
		<NavLink
			className="text fw1 pad2"
			activeClassName="bg-black-1 white"
			to={to}>
			{text}
		</NavLink>
	)
}

export default ProfileLinks
