import React, { useMemo, useState } from "react"
import { Link } from "react-router-dom"
import Button from "../../components/Button/Button"
import Container from "../../components/Container/Container"
import { tempData } from "../../temp/tempData"
import CartItem from "./CartItem"
import "./PageCart.scss"
const PageCart = () => {
	const [state, setState] = useState({
		cart: tempData.cart
	})

	const total = useMemo(() => {
		var total = 0
		tempData.cart.forEach((v) => {
			total += Number(tempData.products[v.id].price) * v.quantity
		})
		return total
	}, [tempData])

	return (
		<Container className="page-cart pad-y5">
			<div className={`holder flex gap10 items-al-start`}>
				<div className="grow-1 grid gap5">
					<div className="text size4 fw">My Cart</div>
					<div>
						{state.cart.map((v, k) => (
							<CartItem
								key={k}
								k={k}
								id={v.id}
								quantity={v.quantity}
								size={v.size}
								color={v.color}
							/>
						))}
					</div>
				</div>
				<div className="shrink-0 aside">
					<div className="text size4 fw bord-bot pad-bot6 marg-bot6">
						Order Summary
					</div>
					<div className="text size4 fw-1 flex content-space-between bord-bot pad-bot6 marg-bot6">
						<div>Subtotal</div>
						<div>${total}</div>
					</div>
					<div className="text size4 flex content-space-between bord-bot pad-bot6 marg-bot6">
						<div>Total</div>
						<div>${total}</div>
					</div>
					<Link to="/checkout">
						<Button className="black-1 w100 gap2">
							<div className="icon far fa-lock"></div>
							Checkout
						</Button>
					</Link>
				</div>
			</div>
		</Container>
	)
}

export default PageCart
