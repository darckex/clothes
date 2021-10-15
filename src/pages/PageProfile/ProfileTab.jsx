import React from "react"
import { Form } from "react-final-form"
import { postProfile } from "../../axios/axios"
import Button from "../../components/Button/Button"
import WithField from "../../components/Field/WithField"
import { actionUpdateProfile } from "../../redux/actions"
import store from "../../redux/store"

const ProfileTab = () => {
	const { user: { name, phone, address } = {} } = store.getState()

	const handleSubmit = (values) => {
		postProfile(values).then((r) => {
			if (!r.res) return
			store.dispatch(actionUpdateProfile(r.user))
		})
	}

	return (
		<div className="profile-tab">
			<div className="text title-1">My Profile</div>
			<Form
				onSubmit={handleSubmit}
				initialValues={{
					name,
					phone,
					address
				}}>
				{({ handleSubmit, submitting }) => (
					<form
						onSubmit={handleSubmit}
						className="bord pad3 grid gap3 marg-top3">
						<WithField name="name" component="input" label="Name" />
						<WithField
							name="phone"
							component="input"
							label="Phone number"
						/>
						<WithField
							name="address"
							component="input"
							label="Address"
						/>
						<Button
							type="submit"
							className="black-1"
							disabled={submitting}>
							Submit
						</Button>
					</form>
				)}
			</Form>
		</div>
	)
}

export default ProfileTab
