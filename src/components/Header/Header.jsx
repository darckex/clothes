import React, { useEffect, useState } from "react"
import Container from "../Container/Container"
import HeaderItem from "./HeaderItem"
import HeaderItem2 from "./HeaderItem2"
import SideMenu from "../SideMenu/SideMenu"
import Logo from "../../assets/images/default/white-logo.svg"

import "./Header.scss"
import Image from "../Image/Image"
import store from "../../redux/store"

const Header = ({ user }) => {
	const [state, setState] = useState({
		show: 0,
		cartLength: store.getState().cart?.length || 0
	})

	useEffect(() => {
		const unsub = store.subscribe(() => {
			const { cart = [], type } = store.getState()
			if (type === "addCart" || type === "removeCart") {
				setState((state) => ({
					...state,
					cartLength: cart.length
				}))
			}
		})

		return unsub
	}, [])

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
						{!user?.id && (
							<HeaderItem2
								to="/login"
								icon="fas fa-user-circle"
								text="Login"
							/>
						)}
						{!!user?.id && (
							<HeaderItem2
								to="/profile/my-profile"
								icon="fas fa-user-circle"
								text={user.name}
							/>
						)}
						<HeaderItem2
							to="/cart"
							icon="fas fa-shopping-cart"
							text={state.cartLength}
						/>
					</div>
					<div className="show-m" onClick={toggleMenu}>
						<div className="icon size2 fas fa-bars white pad2"></div>
					</div>
				</div>
			</Container>
			<SideMenu
				cartLength={state.cartLength}
				user={user}
				show={state.show}
				toggleMenu={toggleMenu}
			/>
		</div>
	)
}

export default Header
