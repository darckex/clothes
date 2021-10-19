import React, { useEffect, useState } from "react"
import { getOrders } from "../../axios/axios"
import OrderItem from "./OrderItem"

const OrdersTab = () => {
	const [state, setState] = useState({
		orders: []
	})

	useEffect(() => {
		getOrders().then((r) => {
			if (!r.orders?.length) return
			setState((state) => ({
				...state,
				orders: r.orders
			}))
		})
	}, [])

	return (
		<div className="order-tab">
			<div className="text title-1">Orders</div>
			<div className="bord pad3 grid gap3 marg-top3">
				{state.orders.map((v, k) => (
					<OrderItem
						key={k}
						id={v.id}
						date={v.indate}
						products={v.products}
					/>
				))}
			</div>
		</div>
	)
}

export default OrdersTab
