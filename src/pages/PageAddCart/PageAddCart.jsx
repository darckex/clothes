import React, { useEffect, useState } from "react"
import { Form } from "react-final-form"
import { useHistory, useParams } from "react-router"
import { getProducts } from "../../axios/axios"
import Button from "../../components/Button/Button"
import WithField from "../../components/Field/WithField"
import ShadowPage from "../../components/ShadowPage/ShadowPage"
import { actionAddCart } from "../../redux/actions"
import store from "../../redux/store"

const PageAddCart = () => {
	const { id } = useParams()
	const history = useHistory()
	const [state, setState] = useState({
		image: "",
		price: "",
		name: "",
		colors: [],
		sizes: [],
		minOrder: 0
	})

	useEffect(() => {
		console.log(`effect`)
		setState((state) => ({
			...state,
			image: "",
			price: "",
			name: "",
			colors: [],
			sizes: [],
			minOrder: 0
		}))
		getProducts({ filter: { ["p.id"]: id } }).then((r) => {
			if (!r.res || !r.products.length) return
			const product = r.products[0]
			setState((state) => ({
				...state,
				image: product.image,
				price: product.price,
				name: product.name,
				colors: product.colors.split(","),
				sizes: product.sizes.split(","),
				minOrder: Number(product.min_order)
			}))
		})
	}, [id])

	const handleSubmit = (values) => {
		console.log(`values`, values)
		store.dispatch(
			actionAddCart({
				id,
				image: state.image,
				name: state.name,
				quantity: values.quant,
				size: values.size,
				color: values.color
			})
		)
		history.goBack()
	}

	const handleValidate = (values) => {
		const errors = {}

		if (!values.color && state.colors[0] !== "")
			errors.color = "Select color"
		if (!values.size && state.sizes[0] !== "") errors.size = "Select size"
		return errors
	}

	return (
		<ShadowPage>
			<Form
				initialValues={{ quant: state.minOrder }}
				validate={handleValidate}
				onSubmit={handleSubmit}>
				{({ handleSubmit, errors, submitFailed }) => (
					<form
						onSubmit={handleSubmit}
						className="page-add-cart pad2 grid gap3">
						<div className="text title-1 marg-bot5">
							ADD TO CART
						</div>

						<div className="pad2 bg-gray-2 grid gap2">
							<div className="text size2 fw">Color</div>
							{submitFailed && (
								<div className="text error">{errors.color}</div>
							)}
							{!!state.colors.length && (
								<div className="flex wrap gap2">
									{state.colors.map((v, k) => (
										<WithField
											key={k}
											name="color"
											component="radio"
											value={v}
										/>
									))}
								</div>
							)}
						</div>

						<div className="pad2 bg-gray-2 grid gap2">
							<div className="text size2 fw">Size</div>
							{submitFailed && (
								<div className="text error">{errors.size}</div>
							)}
							<div className="flex wrap gap2">
								{state.sizes.map((v, k) => (
									<WithField
										key={k}
										name="size"
										component="radio"
										value={v}
									/>
								))}
							</div>
						</div>

						<div className="flex content-space-between items-al-center">
							<WithField
								name="quant"
								component="quant"
								min={state.minOrder}
							/>
							<Button className="black-1" type="submit">
								Add to cart
							</Button>
						</div>
					</form>
				)}
			</Form>
		</ShadowPage>
	)
}

export default PageAddCart
