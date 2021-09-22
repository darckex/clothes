import React from "react"
import { Link } from "react-router-dom"
import Button from "../../components/Button/Button"
import Container from "../../components/Container/Container"
import Field from "../../components/Field/Field"

import "./PageLogin.scss"

const PageLogin = () => {
	return (
		<Container className="page-login small pad-y5">
			<div className="grid gap5">
				<div className="text center title">LOGIN</div>
				<div className="text center sub-title">
					New to Clothes?{" "}
					<Link to="/signup" className="text blue">
						Sign up
					</Link>
				</div>
				<Field component="input" label="Email" />
				<Field component="input" type="password" label="Password" />
				<Link to="/forgot" className="text tan">
					Forgot password?
				</Link>
				<Button className="black-1">Login</Button>
			</div>
		</Container>
	)
}

export default PageLogin
