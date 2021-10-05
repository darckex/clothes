import React, { useState } from "react"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import Button from "../../components/Button/Button"
import Container from "../../components/Container/Container"
import Image from "../../components/Image/Image"
import { server } from "../../settings"
import { tempData } from "../../temp/tempData"
import "./PageProduct.scss"

const PageProduct = () => {
	const { id } = useParams()
	const [state, setState] = useState({
		image: tempData.products[id].image,
		name: tempData.products[id].name,
		description: tempData.products[id].description,
		price: tempData.products[id].price,
		colors: tempData.products[id].colors,
		size: tempData.products[id].size
	})
	return (
		<Container className="page-product pad-y5">
			<div className="holder flex gap5">
				<Image
					src={`${server}/media/${state.image}`}
					className="contain bg-black shrink-0"
					height={400}
					width={400}
					aspectRatio="1/1"
				/>
				<div className="flex dir-col gap5">
					<div className="text size3 fw">{state.name}</div>
					<div className="text bg-black-1 white pad-x3 pad-y1 self-al-start">
						$ {state.price}
					</div>
					<div className="text black-1">{state.description}</div>
					<div className="flex grow-1 items-al-end gap2">
						<Link to={`/products/${id}/add-cart`}>
							<Button className="black-1 gap2">
								<div className="icon white fas fa-cart-plus"></div>
								Add to cart
							</Button>
						</Link>
						<div className="icon size5 far fa-heart red cursor-pointer"></div>
					</div>
				</div>
			</div>
		</Container>
	)
}

export default PageProduct
