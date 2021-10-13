import React from "react"
import { Form } from "react-final-form"
import { useHistory } from "react-router"
import { getCheckReset } from "../../axios/axios"
import Button from "../../components/Button/Button"
import Container from "../../components/Container/Container"
import WithField from "../../components/Field/WithField"
import { actionResetPassword } from "../../redux/actions"
import store from "../../redux/store"

const PageResetToken = () => {
	const history = useHistory()
	const handleSubmit = async (values) => {
		const { resetPassword: { email } = {} } = store.getState()
		const res = await getCheckReset({ ...values, email })
		if (!res.res) return
		store.dispatch(actionResetPassword({ token: values.token }))
		history.push("/reset-password")
	}

	return (
		<Container className="page-reset-token small pad-y5">
			<Form onSubmit={handleSubmit}>
				{({ handleSubmit, submitting }) => (
					<form onSubmit={handleSubmit} className="grid gap5">
						<div className="text center title">RESET TOKEN</div>
						<div className="text center sub-title">
							Please enter reset token
						</div>
						<WithField
							name="token"
							component="input"
							label="Token"
						/>
						<Button
							className="black-1"
							type="submit"
							disabled={submitting}>
							Validate
						</Button>
					</form>
				)}
			</Form>
		</Container>
	)
}

export default PageResetToken
