import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import { getProducts } from "../../axios/axios"
import Button from "../../components/Button/Button"
import Container from "../../components/Container/Container"
import Image from "../../components/Image/Image"
import { server } from "../../settings"
import "./PageProduct.scss"

const PageProduct = () => {
	const { id, category } = useParams()

	const [state, setState] = useState({
		image: "",
		name: "",
		description: "",
		price: ""
	})

	useEffect(() => {
		getProducts({ filter: { ["p.id"]: id } }).then((r) => {
			if (!r.products.length) return
			const product = r.products[0]

			setState((state) => ({
				...state,
				image: product.image,
				name: product.name,
				description: product.description,
				price: product.price
			}))
		})
	}, [id])

	return (
		<Container className="page-product pad-y5">
			<div className="holder flex gap5">
				<Image
					src={`${server}/media/${state.image}`}
					className="contain bg-black shrink-0"
					height={400}
					aspectRatio="1/1"
				/>
				<div className="flex dir-col gap5">
					<div className="text size3 fw">{state.name}</div>
					{!!state.price && state.price !== "0.00" && (
						<div className="text bg-black-1 white pad-x3 pad-y1 self-al-start">
							$ {state.price}
						</div>
					)}
					<div className="text black-1">{state.description}</div>
					<div className="flex grow-1 items-al-end gap2">
						<Link to={`/products/${category}/${id}/add-cart`}>
							<Button className="black-1 gap2">
								<div className="icon white fas fa-cart-plus"></div>
								Add to cart
							</Button>
						</Link>
						{/* <div className="icon size5 far fa-heart red cursor-pointer"></div> */}
					</div>
				</div>
			</div>
		</Container>
	)
}

export default PageProduct
