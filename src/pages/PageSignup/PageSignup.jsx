import React from "react"
import { Link } from "react-router-dom"
import Button from "../../components/Button/Button"
import Container from "../../components/Container/Container"
import Field from "../../components/Field/Field"

import "./PageSignup.scss"

const PageSignup = () => {
	return (
		<Container className="page-signup small pad-y5">
			<div className="grid gap5">
				<div className="text center title">SIGN UP</div>
				<div className="text center sub-title">
					Already a member?{" "}
					<Link to="/login" className="text blue">
						Login
					</Link>
				</div>
				<Field component="input" label="Name" />
				<Field component="input" label="Phone number" />
				<Field component="input" label="Email" />
				<Field component="input" type="password" label="Password" />
				<Button className="black-1">Sign up</Button>
			</div>
		</Container>
	)
}

export default PageSignup
