import React from "react"
import Field from "../../components/Field/Field"
import Image from "../../components/Image/Image"
import ProductItem from "../../components/ProductItem/ProductItem"
import Slider from "../../components/Slider/Slider"
import CategoryItem from "../../components/CategoryItem/CategoryItem"
import HomeSection from "./HomeSection"

import "./PageHome.scss"

const PageHome = () => {
	return (
		<div className="page-home">
			<div className="place-center banner">
				<Image className="cover" src="/" height={600} width="100%" />
				<div className="holder pad4 place-center gap2">
					<div className="welcome text center">Welcome</div>
					<Field component="input" placeholder="Search..." />
				</div>
			</div>
			<div className="slogan bg-tan text blue center pad2">
				merch just one click away
			</div>
			<HomeSection title="CATEGORIES" subTitle="Looking for clothes">
				<Slider spaceBetween={20} slidesPerView={4}>
					<CategoryItem icon="fas fa-tshirt" text="Mens Wear" />
					<CategoryItem icon="fas fa-mitten" text="Gloves" />
					<CategoryItem icon="fas fa-boot" text="Shoes" />
					<CategoryItem icon="fas fa-hat-cowboy-side" text="Hats" />
				</Slider>
			</HomeSection>
			<HomeSection title="TRENDING" subTitle="Must have items">
				<Slider spaceBetween={20} slidesPerView={4}>
					<ProductItem
						image="/"
						name="This is an item"
						price={80}
						colors={[
							{ text: "red", bg: "red" },
							{ text: "blue", bg: "blue" }
						]}
					/>
					<ProductItem
						image="/"
						name="This is an item"
						price={80}
						colors={[
							{ text: "red", bg: "red" },
							{ text: "blue", bg: "blue" }
						]}
					/>
					<ProductItem
						image="/"
						name="This is an item"
						price={80}
						colors={[
							{ text: "red", bg: "red" },
							{ text: "blue", bg: "blue" }
						]}
					/>
					<ProductItem
						image="/"
						name="This is an item"
						price={80}
						colors={[
							{ text: "red", bg: "red" },
							{ text: "blue", bg: "blue" }
						]}
					/>
				</Slider>
			</HomeSection>
			<HomeSection title="RECOMMENDED" subTitle="Picked just for you">
				<Slider spaceBetween={20} slidesPerView={4}>
					<ProductItem
						image="/"
						name="This is an item"
						price={80}
						colors={[
							{ text: "red", bg: "red" },
							{ text: "blue", bg: "blue" }
						]}
					/>
					<ProductItem
						image="/"
						name="This is an item"
						price={80}
						colors={[
							{ text: "red", bg: "red" },
							{ text: "blue", bg: "blue" }
						]}
					/>
					<ProductItem
						image="/"
						name="This is an item"
						price={80}
						colors={[
							{ text: "red", bg: "red" },
							{ text: "blue", bg: "blue" }
						]}
					/>
					<ProductItem
						image="/"
						name="This is an item"
						price={80}
						colors={[
							{ text: "red", bg: "red" },
							{ text: "blue", bg: "blue" }
						]}
					/>
				</Slider>
			</HomeSection>
		</div>
	)
}

export default PageHome
