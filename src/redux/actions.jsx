import store from "./store"

export const actionLogin = (data) => {
	return {
		type: "login",
		store: true,
		payload: {
			user: data.user,
			jwt: data.jwt
		}
	}
}
export const actionResetPassword = (data) => {
	const { resetPassword = {} } = store.getState()
	return {
		type: "resetPassword",
		payload: {
			resetPassword: {
				...resetPassword,
				...data
			}
		}
	}
}
