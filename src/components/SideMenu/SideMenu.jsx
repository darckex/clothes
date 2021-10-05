import React from "react"
import HeaderItem from "../Header/HeaderItem"
import HeaderItem2 from "../Header/HeaderItem2"
import "./SideMenu.scss"
const SideMenu = ({ show = 0, toggleMenu }) => {
	const handleClick = () => {
		toggleMenu && toggleMenu()
	}

	return (
		<div
			className={`side-menu ${show ? "show" : ""}`}
			onClick={handleClick}>
			<div className="overlay"></div>
			<div className="menu grid content-al-start">
				<HeaderItem to="/" text="Home" exact />
				<HeaderItem to="/products" text="Products" />
				<HeaderItem to="/about" text="About us" />
				<div className="grid grid-2">
					<HeaderItem2
						to="/login"
						icon="fas fa-user-circle"
						text="Login"
					/>
					<HeaderItem2
						to="/cart"
						icon="fas fa-shopping-cart"
						text="0"
					/>
				</div>
			</div>
		</div>
	)
}

export default SideMenu
