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
import GrayImage from "../../components/GrayImage/GrayImage"
import { Link } from "react-router-dom"
import { getProducts } from "../../axios/axios"

const PageHome = () => {
	const { vw } = useDimensions()

	const [state, setState] = useState({
		slidesPerView: 4,
		trendingProducts: [],
		recommendedProducts: [],
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

	useEffect(() => {
		getProducts({
			filter: {
				trending: 1
			}
		}).then((r) => {
			setState((state) => ({
				...state,
				trendingProducts: r.products
			}))
		})

		getProducts({
			filter: {
				recommended: 1
			}
		}).then((r) => {
			setState((state) => ({
				...state,
				recommendedProducts: r.products
			}))
		})
	}, [])

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
			<div className="bg-tan pad2"></div>

			<HomeSection title="CATEGORIES" subTitle="Shop for elegance">
				<div className="flex gap5 content-center">
					<Link to="/products/1">
						<GrayImage image="category-men.jpg" text="SHOP MEN" />
					</Link>
					<Link to="/products/2">
						<GrayImage
							image="category-women.jpg"
							text="SHOP WOMEN"
						/>
					</Link>
				</div>
			</HomeSection>

			{/* <HomeSection title="CATEGORIES" subTitle="Looking for clothes">
				<Slider spaceBetween={20} slidesPerView={state.slidesPerView}>
					{Object.values(state.categories).map((v, k) => (
						<CategoryItem key={k} icon={v.icon} text={v.name} />
					))}
				</Slider>
			</HomeSection> */}

			<HomeSection title="TRENDING" subTitle="Must have items">
				<Slider
					spaceBetween={20}
					slidesPerView={state.slidesPerView}
					navigation>
					{state.trendingProducts.map((v, k) => (
						<ProductItem
							key={k}
							id={v.id}
							genderId={v.gender_id}
							image={v.image}
							name={v.name}
							price={v.price}
							colors={v.colors}
						/>
					))}
				</Slider>
			</HomeSection>

			<HomeSection title="RECOMMENDED" subTitle="Picked just for you">
				<Slider
					spaceBetween={20}
					slidesPerView={state.slidesPerView}
					navigation>
					{state.recommendedProducts.map((v, k) => (
						<ProductItem
							key={k}
							id={v.id}
							genderId={v.gender_id}
							image={v.image}
							name={v.name}
							price={v.price}
							colors={v.color}
						/>
					))}
				</Slider>
			</HomeSection>
		</div>
	)
}

export default PageHome
