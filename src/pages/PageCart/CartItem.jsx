import React from "react"
import Image from "../../components/Image/Image"

const CartItem = () => {
	return (
		<div className="cart-item flex gap1">
			<Image src="/" width={150} aspecRatio="1/1" />
			<div className="grid gap1">
				<div className="text size2 fw">Product Name Here</div>
			</div>
		</div>
	)
}

export default CartItem
