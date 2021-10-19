import React from "react"

const OrderItem = ({ id, date, products }) => {
	return (
		<div className="grid gap2 bord-bot pad-bot3">
			<div className="text fw">{id}</div>
			<div className="text gray2">
				<span className="text fw">Date:</span> {date} <br />
				<span className="text fw">Products</span>: {products} <br />
			</div>
		</div>
	)
}

export default OrderItem
