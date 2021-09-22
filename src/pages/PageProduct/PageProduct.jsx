import React from "react"
import Container from "../../components/Container/Container"
import Field from "../../components/Field/Field"
import Image from "../../components/Image/Image"

const PageProduct = () => {
	return (
		<Container className="page-product pad-y5">
			<div className="flex gap5">
				<Image
					src="/"
					className="cover shrink-0"
					height={400}
					aspectRatio="1/1"
				/>
				<div className="flex dir-col gap5">
					<div className="text size3 fw">The name of the product</div>
					<div className="text bg-black-1 white pad-x3 pad-y1 self-al-start">
						$ 80
					</div>

					<div className="grid gap1">
						<div className="text">Color</div>
						<div className="flex wrap gap1">
							<Field
								component="radio"
								name="color"
								value="red"
								checked
							/>
							<Field
								component="radio"
								name="color"
								value="blue"
							/>
						</div>
					</div>

					<Field component="select" label="Size">
						<option>Small</option>
						<option>Medium</option>
						<option>Large</option>
					</Field>

					<div className="flex grow-1 items-al-end gap2">
						<Field component="quant" />
						<div className="icon size5 far fa-heart red cursor-pointer"></div>
					</div>
				</div>
			</div>
		</Container>
	)
}

export default PageProduct
