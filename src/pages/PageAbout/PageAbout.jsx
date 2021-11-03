import React, { useEffect, useState } from "react"
import Button from "../../components/Button/Button"
import Container from "../../components/Container/Container"
import Field from "../../components/Field/Field"
import Image from "../../components/Image/Image"
import { server } from "../../settings"
import useDimensions from "../../utility/useDimensions"
import PageImage from "../PageImage/PageImage"

import "./PageAbout.scss"
const PageAbout = () => {
	const [state, setState] = useState({
		flex: "flex",
		openImage: ""
	})
	const { vw } = useDimensions()
	useEffect(() => {
		const flex = vw < 767 ? "grid" : "flex"
		setState((state) => ({ ...state, flex }))
	}, [vw])

	const openImage = (image) => {
		setState((state) => ({
			...state,
			openImage: image
		}))
	}

	return (
		<Container className="page-about pad-y10 marg-top6 place-center">
			<div className="text title-1 center">About Us</div>
			<div className="holder grid gap4 marg-top6">
				<div className="text center fw-1">
					Favori is an emerging private label garment manufacturing
					factory, that has been working for small to large fashion
					brands all over the world. Located in Lebanon, with more
					than 20 years of work teams experience.
				</div>
				<div className="text center fw-1">
					We are dedicated clothing manufacturers mainly targeting
					wholesale and retails. We deal with different categories of
					clothing such as women blouses and trousers, shirts for men
					and women, jackets, jeans, uppers etc., From plain to chic,
					from casual to formal, we are able to manufacture a
					varieties of clothes for our clients.
				</div>
				<div className="text center fw-1">
					Our work is our passion and we love to explore new
					possibilities of fashion for brands out there.
				</div>

				<div className="grid grid-4 gap3">
					<Image
						onClick={() => openImage("about-1.png")}
						src={`${server}/media/about-1.png`}
					/>
					<Image
						onClick={() => openImage("about-2.png")}
						src={`${server}/media/about-2.png`}
					/>
					<Image
						onClick={() => openImage("about-3.png")}
						src={`${server}/media/about-3.png`}
					/>
					<Image
						onClick={() => openImage("about-4.png")}
						src={`${server}/media/about-4.png`}
					/>
				</div>
			</div>

			<div
				className={`contact pad-y10 marg-y10 ${state.flex} gap5 al-start space-between w100`}>
				<div className="grid gap6">
					<div className="text desc center fw-1">
						Have any questions or concerns?
						<br />
						We're always ready to help!
					</div>
					<div className="grid gap1">
						<div className="text center fw">Call us at</div>
						<div className="text center fw-1">
							+961 70 605 067
							<br />
							+961 76 760 000
							<br />
							<br />
							<div className="text fw center">
								Or send us an email to
							</div>
							<a href="mailto:favorifashion@outlook.com">
								favorifashion@outlook.com
							</a>
							<br />
						</div>
					</div>
					<div className="grid gap1">
						<div className="text fw center">Our Office</div>
						<div className="text fw-1 center">
							Salim salam, Facing Bank Audi, Beirut, Lebanon.
						</div>
						<div className="text fw center">Headquarter</div>
						<div className="text fw-1 center">
							Mar Elias, Youssef Najjar Str., Medco Center.
						</div>
					</div>
				</div>
				<div className="grid gap2 items-start">
					<Field
						className={`${state.flex ? "w100" : "small"}`}
						component="input"
						placeholder="Name"
					/>
					<Field
						className={`${state.flex ? "w100" : "small"}`}
						component="input"
						placeholder="Email"
					/>
					<Field
						className={`${state.flex ? "w100" : "small"}`}
						component="input"
						placeholder="Subject"
					/>
					<Field
						className={`${state.flex ? "w100" : "small"}`}
						component="textarea"
						placeholder="Message"
						rows={5}
					/>
					<Button className="black-1 small">Submit</Button>
				</div>
			</div>

			{!!state.openImage && (
				<PageImage
					onClose={() => openImage("")}
					image={state.openImage}
				/>
			)}
		</Container>
	)
}

export default PageAbout
