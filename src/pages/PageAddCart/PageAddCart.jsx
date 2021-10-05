import React from "react"
import Button from "../../components/Button/Button"
import Field from "../../components/Field/Field"
import ShadowPage from "../../components/ShadowPage/ShadowPage"

const PageAddCart = () => {
	return (
		<ShadowPage>
			<div className="page-add-cart pad2 grid gap3">
				<div className="text title-1 marg-bot5">ADD TO CART</div>
				<div className="pad2 bg-gray-2 grid gap2">
					<div className="text size2 fw">Color</div>
					<div className="flex wrap gap2">
						<Field component="radio" name="color" value="white" />
						<Field component="radio" name="color" value="blue" />
						<Field component="radio" name="color" value="red" />
						<Field component="radio" name="color" value="green" />
					</div>
				</div>
				<div className="pad2 bg-gray-2 grid gap2">
					<div className="text size2 fw">Size</div>
					<div className="flex wrap gap2">
						<Field component="radio" name="size" value="Large" />
						<Field component="radio" name="size" value="Medium" />
						<Field component="radio" name="size" value="Small" />
					</div>
				</div>
				<div className="flex content-space-between items-al-center">
					<Field component="quant" />
					<Button className="black-1">Add to cart</Button>
				</div>
			</div>
		</ShadowPage>
	)
}

export default PageAddCart
