import React, { useEffect, useState } from "react"
import Field from "../../components/Field/Field"
import Image from "../../components/Image/Image"
import ProductItem from "../../components/ProductItem/ProductItem"
import Slider from "../../components/Slider/Slider"
import CategoryItem from "../../components/CategoryItem/CategoryItem"
import HomeSection from "./HomeSection"
import useDimensions from "../../utility/useDimensions"
import "./PageHome.scss"
import { tempData } from "../../temp/tempData"
import { server } from "../../settings"

const PageHome = () => {
	const { vw } = useDimensions()

	const [state, setState] = useState({
		slidesPerView: 4,
		categories: tempData.categories
	})

	useEffect(() => {
		const slidesPerView = () => {
			if (vw < 767) {
				return 2
			} else {
				return 4
			}
		}
		setState((state) => ({ ...state, slidesPerView: slidesPerView() }))
	}, [vw])

	return (
		<div className="page-home">
			<div className="place-center banner">
				<Image
					className="cover bg-black-1"
					src={`${server}/media/banner.jpg`}
					height={600}
					width="100%"
				/>
				<div className="holder pad4 place-center gap2">
					<div className="welcome text center">Welcome</div>
					<Field component="input" placeholder="Search..." />
				</div>
			</div>
			<div className="slogan bg-tan text blue center pad2"></div>
			<HomeSection title="CATEGORIES" subTitle="Looking for clothes">
				<Slider spaceBetween={20} slidesPerView={state.slidesPerView}>
					{Object.values(state.categories).map((v, k) => (
						<CategoryItem key={k} icon={v.icon} text={v.name} />
					))}
				</Slider>
			</HomeSection>
			<HomeSection title="TRENDING" subTitle="Must have items">
				<Slider spaceBetween={20} slidesPerView={state.slidesPerView}>
					{Object.values(tempData.products).map((v, k) => (
						<ProductItem
							key={k}
							id={v.id}
							image={v.image}
							name={v.name}
							price={v.price}
							colors={v.colors}
						/>
					))}
				</Slider>
			</HomeSection>
			<HomeSection title="RECOMMENDED" subTitle="Picked just for you">
				<Slider spaceBetween={20} slidesPerView={state.slidesPerView}>
					{Object.values(tempData.products).map((v, k) => (
						<ProductItem
							key={k}
							id={v.id}
							image={v.image}
							name={v.name}
							price={v.price}
							colors={v.colors}
						/>
					))}
				</Slider>
			</HomeSection>
		</div>
	)
}

export default PageHome
