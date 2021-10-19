import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import Button from "../../components/Button/Button"
import Container from "../../components/Container/Container"
import store from "../../redux/store"
import CartItem from "./CartItem"
import { Form } from "react-final-form"
import "./PageCart.scss"
import WithField from "../../components/Field/WithField"
import { postOrder } from "../../axios/axios"
import { toast } from "react-toastify"
import { actionClearCart } from "../../redux/actions"
const PageCart = () => {
	const history = useHistory()
	const [state, setState] = useState({
		cart: store.getState().cart || [],
		user: store.getState().user || {}
	})

	useEffect(() => {
		const unsub = store.subscribe(() => {
			const { cart = [], type } = store.getState()

			if (type === "removeCart") {
				setState((state) => ({
					...state,
					cart
				}))
			}
		})

		return unsub
	}, [])

	const handleSubmit = (values) => {
		const { cart = [] } = store.getState()
		if (!cart.length) {
			toast("Cart is empty")
			return
		}

		postOrder({
			cart,
			name: values.name,
			phone: values.phone,
			address: values.address
		}).then((r) => {
			if (!r.res) return
			store.dispatch(actionClearCart())
			history.push("/profile/orders")
		})
	}

	return (
		<Container className="page-cart pad-y5">
			<div className={`holder flex gap10 items-al-start`}>
				<div className="grow-1 grid gap5">
					<div className="text size4 fw">My Cart</div>
					<div>
						{state.cart.map((v, k) => (
							<CartItem
								key={k}
								index={k}
								quantity={v.quantity}
								size={v.size}
								color={v.color}
							/>
						))}
					</div>
				</div>

				<Form
					onSubmit={handleSubmit}
					initialValues={{
						name: state.user.name,
						phone: state.user.phone,
						address: state.user.address
					}}>
					{({ handleSubmit, submitting }) => (
						<form
							onSubmit={handleSubmit}
							className="shrink-0 aside grid gap6">
							<div className="text size4 fw bord-bot pad-bot6">
								Order Details
							</div>

							<WithField
								name="name"
								component="input"
								label="Name"
							/>
							<WithField
								name="phone"
								component="input"
								label="Phone number"
							/>
							<WithField
								name="address"
								component="input"
								label="address"
							/>

							<Button
								className="black-1 w100 gap2"
								type="submit"
								disabled={submitting}>
								Place order
							</Button>
						</form>
					)}
				</Form>
			</div>
		</Container>
	)
}

export default PageCart
