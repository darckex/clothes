import React, { useState } from "react"
import Container from "../Container/Container"
import HeaderItem from "./HeaderItem"
import HeaderItem2 from "./HeaderItem2"
import SideMenu from "../SideMenu/SideMenu"
import Logo from "../../assets/images/default/white-logo.svg"

import "./Header.scss"
import Image from "../Image/Image"

const Header = () => {
	const [state, setState] = useState({
		show: 0
	})
	const toggleMenu = () => {
		setState({
			...state,
			show: !state.show
		})
	}

	return (
		<div className="header bg-black-1">
			<Container className="pad-y4">
				<div className="flex space-between items-al-center">
					<Image src={Logo} height={60} width={"auto"} />
					<div className="flex gap2 al-center hide-m">
						<HeaderItem to="/" text="Home" exact />
						<HeaderItem to="/products/1" text="Men" />
						<HeaderItem to="/products/2" text="Women" />
						<HeaderItem to="/about" text="About us" />
					</div>
					<div className="flex gap5 hide-m">
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
					<div className="show-m" onClick={toggleMenu}>
						<div className="icon size2 fas fa-bars white pad2"></div>
					</div>
				</div>
			</Container>
			<SideMenu key={0} show={state.show} toggleMenu={toggleMenu} />
		</div>
	)
}

export default Header
