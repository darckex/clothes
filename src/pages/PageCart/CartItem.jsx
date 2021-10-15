import React, { useState } from "react"
import Image from "../../components/Image/Image"
import { actionRemoveCart } from "../../redux/actions"
import store from "../../redux/store"
import { server } from "../../settings"

const CartItem = ({ index, quantity, color, size }) => {
	const [state, setState] = useState({
		remove: ""
	})
	const { name, image } = store.getState().cart[index]

	const handleRemove = () => {
		setState({ ...state, remove: "remove" })
		setTimeout(() => {
			store.dispatch(actionRemoveCart(index))
			setState((state) => ({ ...state, remove: "" }))
		}, 300)
	}

	return (
		<div
			className={`cart-item flex gap4 bord-bot pad-bot4 marg-bot4 ${state.remove}`}>
			<Image
				className="cover"
				src={`${server}/media/${image}`}
				width={100}
				aspecRatio="1/1"
			/>
			<div className="grid gap1 grow-1 content-al-start">
				<div className="flex content-space-between">
					<div className="text size2 fw-1">{name}</div>
					<div className="text fw-1 flex gap5 items-al-center">
						<div
							className="icon fas fa-times cursor-pointer"
							onClick={handleRemove}></div>
					</div>
				</div>
				<div className="text gray1">
					Quantity: {quantity} <br />
					Size: {size} <br />
					Color: {color}
				</div>
			</div>
		</div>
	)
}

export default CartItem
