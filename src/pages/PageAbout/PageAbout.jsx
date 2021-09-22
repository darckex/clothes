import React from "react"
import Button from "../../components/Button/Button"
import Container from "../../components/Container/Container"
import Field from "../../components/Field/Field"

import "./PageAbout.scss"
const PageAbout = () => {
	return (
		<Container className="page-about pad-y10 marg-top6 place-center">
			<div className="text title-1 center">About Us</div>
			<div className="holder grid gap4 marg-top6">
				<div className="text center fw-1">
					Celebrity fans are at the receiving end of the celebrities’
					popular marketing strategy, as they function primarily as
					brand purchasers.
				</div>
				<div className="text center fw-1">
					Mashahir.shop strives to provide celebrities and social
					media influencers with their fans, a very creative bundle of
					ideas and concepts that facilitate the communication between
					both parts by making it easy, and not limited with distances
					and difficulties.
				</div>
				<div className="text center fw-1">
					From gifts, releases, to souvenirs… with just a click, you
					will have the ability to shop online and have anything
					delivered to your door in a very much modern and convenient
					way, that’s is considered as a new experience in the Arab
					world, bringing your beloved celebrities and influencers
					closer.
				</div>
			</div>

			<div className="contact pad-y10 marg-y10 flex gap5 al-start space-between w100">
				<div className="grid gap6">
					<div className="text desc center fw-1">
						Have any questions or concerns?
						<br />
						We're always ready to help!
					</div>
					<div className="grid gap1">
						<div className="text center fw">Call us at</div>
						<div className="text center fw-1">
							+9611547334/5
							<br />
							+96170962333
							<br />
							or send us an email to:
							<br />
							info@Aandhinvest.com
							<br />
						</div>
					</div>
					<div className="grid gap1">
						<div className="text fw center">Out Office</div>
						<div className="text fw-1 center">
							Boulevard Camille Chamoun, Galerie Semaane, Galaxy
							Complex, Block B, 3rd Floor
						</div>
					</div>
				</div>
				<div className="grid gap2 items-start">
					<Field
						className="small"
						component="input"
						placeholder="Name"
					/>
					<Field
						className="small"
						component="input"
						placeholder="Email"
					/>
					<Field
						className="small"
						component="input"
						placeholder="Subject"
					/>
					<Field
						className="small"
						component="textarea"
						placeholder="Message"
						rows={5}
					/>
					<Button className="black-1 small">Submit</Button>
				</div>
			</div>
		</Container>
	)
}

export default PageAbout
