import React, { useEffect, useState } from "react"
import Field from "../../components/Field/Field"
import Image from "../../components/Image/Image"
import ProductItem from "../../components/ProductItem/ProductItem"
import Slider from "../../components/Slider/Slider"
import HomeSection from "./HomeSection"
import useDimensions from "../../utility/useDimensions"
import "./PageHome.scss"
import { tempData } from "../../temp/tempData"
import { server } from "../../settings"
import GrayImage from "../../components/GrayImage/GrayImage"
import { Link, useHistory } from "react-router-dom"
import { getProducts } from "../../axios/axios"
import { Form } from "react-final-form"
import WithField from "../../components/Field/WithField"

const PageHome = () => {
	const history = useHistory()
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
			if (!r.products?.length) return
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
			if (!r.products?.length) return
			setState((state) => ({
				...state,
				recommendedProducts: r.products
			}))
		})
	}, [])

	const handleSearch = ({ search, gender }) => {
		console.log(`gender`, gender)
		history.push(`/products/${gender}`, { search })
	}

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
					<Form
						onSubmit={handleSearch}
						initialValues={{ gender: "1" }}>
						{({ handleSubmit }) => (
							<form onSubmit={handleSubmit} className="flex">
								<WithField
									name="search"
									className="search"
									component="input"
									placeholder="Search..."
								/>
								<WithField
									name="gender"
									className="gender"
									component="select">
									<option value="1">Men</option>
									<option value="2">Women</option>
								</WithField>
							</form>
						)}
					</Form>
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

			<HomeSection title="TRENDING" subTitle="Must have items">
				<Slider
					spaceBetween={20}
					slidesPerView={state.slidesPerView}
					navigation>
					{state.trendingProducts.map((v, k) => (
						<ProductItem
							key={k}
							id={v.id}
							gender={v.gender}
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
							gender={v.gender}
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
