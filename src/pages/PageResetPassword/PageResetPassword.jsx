import React from "react"
import { Form } from "react-final-form"
import { useHistory } from "react-router"
import { postChangePassword } from "../../axios/axios"
import Button from "../../components/Button/Button"
import Container from "../../components/Container/Container"
import WithField from "../../components/Field/WithField"
import store from "../../redux/store"

const PageResetPassword = () => {
	const history = useHistory()
	const handleSubmit = async (values) => {
		const { resetPassword: { email, token } = {} } = store.getState()
		const res = await postChangePassword({ ...values, email, token })
		if (!res.res) return
		history.push("/login")
	}

	return (
		<Container className="page-reset-token small pad-y5">
			<Form onSubmit={handleSubmit}>
				{({ handleSubmit, submitting }) => (
					<form onSubmit={handleSubmit} className="grid gap5">
						<div className="text center title">RESET PASSWORD</div>
						<div className="text center sub-title">
							Please enter new password
						</div>
						<WithField
							name="password"
							component="input"
							type="password"
							label="Password"
						/>
						<Button
							className="black-1"
							type="submit"
							disabled={submitting}>
							Submit
						</Button>
					</form>
				)}
			</Form>
		</Container>
	)
}

export default PageResetPassword
