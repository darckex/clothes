import React from "react"
import { Form } from "react-final-form"
import { useHistory } from "react-router"
import { postForgot } from "../../axios/axios"
import Button from "../../components/Button/Button"
import Container from "../../components/Container/Container"
import WithField from "../../components/Field/WithField"
import { actionResetPassword } from "../../redux/actions"
import store from "../../redux/store"

const PageLogin = () => {
	const history = useHistory()
	const handleSubmit = async (values) => {
		const res = await postForgot(values)
		if (!res.res) return
		store.dispatch(actionResetPassword({ email: values.email }))
		history.push("/reset-token")
	}

	return (
		<Container className="page-forgot small pad-y5">
			<Form onSubmit={handleSubmit}>
				{({ handleSubmit, submitting }) => (
					<form onSubmit={handleSubmit} className="grid gap5">
						<div className="text center title">FORGOT PASSWORD</div>
						<div className="text center sub-title">
							Please enter your email address
						</div>
						<WithField
							name="email"
							component="input"
							label="Email"
						/>
						<Button
							className="black-1"
							type="submit"
							disabled={submitting}>
							Send Email
						</Button>
					</form>
				)}
			</Form>
		</Container>
	)
}

export default PageLogin
