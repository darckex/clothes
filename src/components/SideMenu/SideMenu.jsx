import React from "react"
import HeaderItem from "../Header/HeaderItem"
import HeaderItem2 from "../Header/HeaderItem2"
import "./SideMenu.scss"
const SideMenu = ({ show = 0, toggleMenu, user }) => {
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
				<HeaderItem to="/products/1" text="Men" />
				<HeaderItem to="/products/2" text="Women" />
				<HeaderItem to="/about" text="About us" />
				<div className="grid grid-2">
					{!user?.id && (
						<HeaderItem2
							to="/login"
							icon="fas fa-user-circle"
							text="Login"
						/>
					)}
					{!!user?.id && (
						<HeaderItem2
							to="/profile"
							icon="fas fa-user-circle"
							text={user.name}
						/>
					)}
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
