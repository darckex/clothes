import React from "react"
import Container from "../../components/Container/Container"
import CartItem from "./CartItem"
const PageCart = () => {
	return (
		<Container className="pad-y5">
			<div className="flex gap1">
				<div className="grow">
					<div className="text size4 fw">My Cart</div>
					<CartItem />
				</div>
				<div></div>
			</div>
		</Container>
	)
}

export default PageCart
