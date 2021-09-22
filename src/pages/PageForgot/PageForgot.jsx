import React from "react"
import { Link } from "react-router-dom"
import Button from "../../components/Button/Button"
import Container from "../../components/Container/Container"
import Field from "../../components/Field/Field"

const PageLogin = () => {
	return (
		<Container className="page-forgot small pad-y5">
			<div className="grid gap5">
				<div className="text center title">FORGOT PASSWORD</div>
				<div className="text center sub-title">
					Please enter your email address
				</div>
				<Field component="input" label="Email" />
				<Button className="black-1">Send Email</Button>
			</div>
		</Container>
	)
}

export default PageLogin
