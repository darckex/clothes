import React from "react"
import { Form } from "react-final-form"
import { Link } from "react-router-dom"
import { getLogin } from "../../axios/axios"
import Button from "../../components/Button/Button"
import Container from "../../components/Container/Container"
import WithField from "../../components/Field/WithField"
import { actionLogin } from "../../redux/actions"
import store from "../../redux/store"
import { useHistory } from "react-router"

import "./PageLogin.scss"

const PageLogin = () => {
	const history = useHistory()

	const handleSubmit = async (values) => {
		const res = await getLogin(values)
		if (!res.res) return

		store.dispatch(actionLogin({ user: res.user, jwt: res.jwt }))
		history.replace("/")
	}

	return (
		<Container className="page-login small pad-y5">
			<Form onSubmit={handleSubmit}>
				{({ handleSubmit }) => (
					<form onSubmit={handleSubmit} className="grid gap5">
						<div className="text center title">LOGIN</div>
						<div className="text center sub-title">
							New to Clothes?{" "}
							<Link to="/signup" className="text blue">
								Sign up
							</Link>
						</div>
						<WithField
							name="email"
							component="input"
							label="Email"
						/>
						<WithField
							name="password"
							component="input"
							type="password"
							label="Password"
						/>
						<Link to="/forgot" className="text tan">
							Forgot password?
						</Link>
						<Button className="black-1" type="submit">
							Login
						</Button>
					</form>
				)}
			</Form>
		</Container>
	)
}

export default PageLogin
