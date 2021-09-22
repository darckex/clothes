import React from "react"
import CategoryItem from "../../components/CategoryItem/CategoryItem"
import Container from "../../components/Container/Container"
import Field from "../../components/Field/Field"
import ProductItem from "../../components/ProductItem/ProductItem"
import Slider from "../../components/Slider/Slider"

const PageProducts = () => {
	return (
		<div className="page-products">
			<Container className="pad-y5">
				<Field component="input" placeholder="Search..." />
				<Slider
					className="marg-top5"
					spaceBetween={20}
					slidesPerView={6}>
					<CategoryItem icon="fas fa-tshirt" text="Mens Wear" />
					<CategoryItem icon="fas fa-mitten" text="Gloves" />
					<CategoryItem icon="fas fa-boot" text="Shoes" />
					<CategoryItem icon="fas fa-hat-cowboy-side" text="Hats" />
					<CategoryItem icon="fas fa-tshirt" text="Mens Wear" />
					<CategoryItem icon="fas fa-mitten" text="Gloves" />
					<CategoryItem icon="fas fa-boot" text="Shoes" />
					<CategoryItem icon="fas fa-hat-cowboy-side" text="Hats" />
				</Slider>
				<div className="grid grid-4 gap3 marg-top5">
					<ProductItem
						image="/"
						name="Product Name"
						price={800}
						colors={[
							{ text: "red", bg: "red" },
							{ text: "blue", bg: "blue" }
						]}
					/>
					<ProductItem
						image="/"
						name="Product Name"
						price={800}
						colors={[
							{ text: "red", bg: "red" },
							{ text: "blue", bg: "blue" }
						]}
					/>
					<ProductItem
						image="/"
						name="Product Name"
						price={800}
						colors={[
							{ text: "red", bg: "red" },
							{ text: "blue", bg: "blue" }
						]}
					/>
					<ProductItem
						image="/"
						name="Product Name"
						price={800}
						colors={[
							{ text: "red", bg: "red" },
							{ text: "blue", bg: "blue" }
						]}
					/>
					<ProductItem
						image="/"
						name="Product Name"
						price={800}
						colors={[
							{ text: "red", bg: "red" },
							{ text: "blue", bg: "blue" }
						]}
					/>
					<ProductItem
						image="/"
						name="Product Name"
						price={800}
						colors={[
							{ text: "red", bg: "red" },
							{ text: "blue", bg: "blue" }
						]}
					/>
					<ProductItem
						image="/"
						name="Product Name"
						price={800}
						colors={[
							{ text: "red", bg: "red" },
							{ text: "blue", bg: "blue" }
						]}
					/>
				</div>
			</Container>
		</div>
	)
}

export default PageProducts
