import React, { useEffect, useState } from "react"
import CategoryItem from "../../components/CategoryItem/CategoryItem"
import Container from "../../components/Container/Container"
import Field from "../../components/Field/Field"
import ProductItem from "../../components/ProductItem/ProductItem"
import Slider from "../../components/Slider/Slider"
import { tempData } from "../../temp/tempData"
import useDimensions from "../../utility/useDimensions"

const PageProducts = () => {
	const [state, setState] = useState({
		slidesPerView: 5,
		grid: 4,
		categories: tempData.categories,
		products: tempData.products
	})
	const { vw } = useDimensions()

	useEffect(() => {
		const responsive = () => {
			var slidesPerView = 5,
				grid = 4
			if (vw < 767) {
				slidesPerView = 2
				grid = 2
			} else if (vw < 1023) {
				slidesPerView = 4
			}

			return { slidesPerView, grid }
		}
		const { slidesPerView, grid } = responsive()
		setState((state) => ({ ...state, slidesPerView, grid }))
	}, [vw])

	return (
		<Container className="page-products pad-y5">
			<Field component="input" placeholder="Search..." />
			<Slider
				className="marg-top5"
				spaceBetween={20}
				slidesPerView={state.slidesPerView}>
				{Object.values(state.categories).map((v, k) => (
					<CategoryItem key={k} icon={v.icon} text={v.name} />
				))}
			</Slider>
			<div className={`grid grid-${state.grid} gap3 marg-top5`}>
				{Object.values(state.products).map((v, k) => (
					<ProductItem
						key={k}
						id={v.id}
						image={v.image}
						name={v.name}
						price={v.price}
						colors={v.colors}
					/>
				))}
			</div>
		</Container>
	)
}

export default PageProducts
