import React from "react"
import { Link } from "react-router-dom"
import Button from "../../components/Button/Button"
import Container from "../../components/Container/Container"
import { Form } from "react-final-form"
import WithField from "../../components/Field/WithField"
import { postRegister } from "../../axios/axios"
import "./PageSignup.scss"
import store from "../../redux/store"
import { actionLogin } from "../../redux/actions"
import { useHistory } from "react-router"

const PageSignup = () => {
	const history = useHistory()

	const handleSubmit = async (values) => {
		const res = await postRegister(values)
		if (!res.res) return
		store.dispatch(actionLogin({ user: res.user, jwt: res.jwt }))
		history.replace("/")
	}

	return (
		<Container className="page-signup small pad-y5">
			<Form onSubmit={handleSubmit}>
				{({ handleSubmit }) => (
					<form onSubmit={handleSubmit} className="grid gap5">
						<div className="text center title">SIGN UP</div>
						<div className="text center sub-title">
							Already a member?{" "}
							<Link to="/login" className="text blue">
								Login
							</Link>
						</div>
						<WithField name="name" component="input" label="Name" />

						<WithField
							name="phone"
							component="input"
							label="Phone number"
						/>
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
						<WithField
							name="address"
							component="input"
							label="Address"
						/>
						<Button className="black-1" type="submit">
							Sign up
						</Button>
					</form>
				)}
			</Form>
		</Container>
	)
}

export default PageSignup
