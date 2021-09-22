import React from "react"
import Container from "../Container/Container"
import HeaderItem from "./HeaderItem"
import HeaderItem2 from "./HeaderItem2"

import "./Header.scss"

const Header = () => {
	return (
		<div className="header bg-black-1">
			<Container className="pad-y4">
				<div className="flex space-between">
					<div className="logo text size5 white flex al-center">
						LOGO
					</div>
					<div className="flex gap2 al-center">
						<HeaderItem to="/" text="Home" exact />
						<HeaderItem to="/products" text="Products" />
						<HeaderItem to="/about" text="About us" />
					</div>
					<div className="flex gap5">
						<HeaderItem2
							to="/login"
							icon="fas fa-user-circle"
							text="Log in"
						/>
						<HeaderItem2
							to="/cart"
							icon="fas fa-shopping-cart"
							text="0"
						/>
					</div>
				</div>
			</Container>
		</div>
	)
}

export default Header
