import React, { useEffect, useState } from "react"
import { Form, FormSpy } from "react-final-form"
import { useParams } from "react-router"
import { getCategories, getProducts, getSeasons } from "../../axios/axios"
import Container from "../../components/Container/Container"
import Field from "../../components/Field/Field"
import WithField from "../../components/Field/WithField"
import ProductItem from "../../components/ProductItem/ProductItem"
import useDebounce from "../../hooks/useDebounce"
import useDimensions from "../../utility/useDimensions"
import "./PageProducts.scss"

const PageProducts = () => {
	const { category } = useParams()

	const [state, setState] = useState({
		categoryName: "",
		slidesPerView: 5,
		grid: 4,
		categories: [],
		products: [],
		seasons: [],
		filterValues: {},
		search: ""
	})

	const { vw } = useDimensions()

	let formSub

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

	useEffect(() => {
		setState((state) => ({
			...state,
			categories: [],
			products: [],
			search: ""
		}))

		typeof formSub.reset === "function" && formSub.reset()
	}, [category])

	useDebounce(
		async () => {
			formSub.change("categories", [])
			getCategories({
				seasons: state.filterValues.seasons
			}).then((r) => {
				setState((state) => ({ ...state, categories: r.categories }))
			})
		},
		[category, state.filterValues.seasons],
		150
	)

	useDebounce(
		async () => {
			getProducts({
				filter: {
					gender: category
				},
				seasons: state.filterValues.seasons,
				categories: state.filterValues.categories,
				search: state.search
			}).then((r) => {
				setState((state) => ({ ...state, products: r.products }))
			})
		},
		[
			category,
			state.filterValues.seasons,
			state.filterValues.categories,
			state.search
		],
		150
	)

	useEffect(() => {
		getSeasons().then((r) => {
			setState((state) => ({ ...state, seasons: r.seasons }))
		})
	}, [])

	const handleFilterChange = (values) => {
		setState((state) => ({ ...state, filterValues: values }))
	}

	return (
		<Container className="page-products pad-y5">
			<div className="text title-1 marg-bot5">{state.categoryName}</div>
			<Field
				component="input"
				placeholder="Search..."
				onChange={(e) =>
					setState((state) => ({ ...state, search: e.target.value }))
				}
				value={state.search}
			/>
			<div className="holder flex gap5 items-al-start marg-top5">
				<Form onSubmit={handleFilterChange}>
					{({ handleSubmit, form }) => {
						formSub = form
						return (
							<form
								onSubmit={handleSubmit}
								className="grid gap3 grow-1 aside">
								<FormSpy
									subscription={{
										values: true
									}}
									onChange={form.submit}
								/>

								{/* <div className="grid gap3 bg-white pad2">
									<div className="flex content-space-between">
										<div className="text fw">Seasons</div>
										<div
											className="text red cursor-pointer"
											onClick={form.reset}>
											Clear
										</div>
									</div>
									{state.seasons.map((v, k) => (
										<WithField
											name="seasons"
											key={k}
											component="checkbox"
											value={v.id}
											label={v.name}
										/>
									))}
								</div> */}

								<div className="grid gap3 bg-white pad2">
									<div className="flex content-space-between">
										<div className="text fw">
											Categories
										</div>
										<div
											className="text red cursor-pointer"
											onClick={form.reset}>
											Clear
										</div>
									</div>
									<div className="grid wrap gap3">
										{state.categories
											// .filter((v) => v.count > 0)
											.map((v, k) => (
												<WithField
													name="categories"
													key={k}
													component="checkbox"
													value={v.id}
													label={v.name}
												/>
											))}
									</div>
								</div>
							</form>
						)
					}}
				</Form>

				<div className={`grid grid-${state.grid} gap3`}>
					{state.products.map((v, k) => (
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
				</div>
			</div>
		</Container>
	)
}

export default PageProducts
