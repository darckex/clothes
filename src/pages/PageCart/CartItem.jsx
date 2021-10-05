import React from "react"
import Image from "../../components/Image/Image"
import { server } from "../../settings"
import { tempData } from "../../temp/tempData"

const CartItem = ({ k, id, quantity, color, size }) => {
	const { name, image, price } = tempData.products[id]

	const total = Number(price) * Number(quantity)

	const handleRemove = () => {
		tempData.cart.splice(k, 1)
	}

	return (
		<div className="cart-item flex gap4 bord-bot pad-bot4 marg-bot4">
			<Image
				className="cover"
				src={`${server}/media/${image}`}
				width={100}
				aspecRatio="1/1"
			/>
			<div className="grid gap1 grow-1">
				<div className="flex content-space-between">
					<div className="text size2 fw-1">{name}</div>
					<div className="text fw-1 flex gap5 items-al-center">
						Total: $ {total}
						<div
							className="icon fas fa-times"
							onClick={handleRemove}></div>
					</div>
				</div>
				<div className="text gray1">
					Price: ${price} <br />
					Quantity: {quantity} <br />
					Size: {size} <br />
					Color: {color}
				</div>
			</div>
		</div>
	)
}

export default CartItem
