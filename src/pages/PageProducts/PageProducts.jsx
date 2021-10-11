import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import Button from "../../components/Button/Button"
import Container from "../../components/Container/Container"
import Field from "../../components/Field/Field"
import ProductItem from "../../components/ProductItem/ProductItem"
import { tempData } from "../../temp/tempData"
import useDimensions from "../../utility/useDimensions"
import "./PageProducts.scss"

const PageProducts = () => {
	const { category } = useParams()

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
			<div className="text title-1 marg-bot5">Women</div>
			<Field component="input" placeholder="Search..." />
			<div className="holder flex gap5 items-al-start marg-top5">
				<div className="grid gap3 grow-1 aside">
					<div className="grid gap3 bg-white pad2">
						<div className="text fw">Seasons</div>
						{Object.values(tempData.seasons).map((v, k) => (
							<Field
								key={k}
								component="checkbox"
								value={v.id}
								label={v.name}
							/>
						))}
						<Button className="tan small">Submit</Button>
					</div>
					<div className="grid gap3 bg-white pad2">
						<div className="text fw">Categories</div>
						{Object.values(tempData.categories).map((v, k) => (
							<Field
								key={k}
								component="checkbox"
								value={v.id}
								label={v.name}
							/>
						))}
						<Button className="tan small">Submit</Button>
					</div>
				</div>

				<div className={`grid grid-${state.grid} gap3`}>
					{Object.values(state.products).map((v, k) => (
						<ProductItem
							key={k}
							id={v.id}
							image={v.image}
							name={v.name}
							price={v.price}
							colors={v.colors}
							topCategory={v.topCategory}
						/>
					))}
				</div>
			</div>
		</Container>
	)
}

export default PageProducts
