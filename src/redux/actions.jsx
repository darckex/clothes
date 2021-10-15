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
export const actionUpdateProfile = (data) => {
	const { user = {} } = store.getState()
	return {
		type: "updateProfile",
		store: true,
		payload: {
			user: { ...user, ...data }
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
export const actionAddCart = (data = {}) => {
	const { cart = [] } = store.getState()
	return {
		type: "addCart",
		store: true,
		payload: {
			cart: [...cart, data]
		}
	}
}
export const actionRemoveCart = (data) => {
	const { cart = [] } = store.getState()
	cart.splice(data, 1)
	return {
		type: "removeCart",
		store: true,
		payload: {
			cart
		}
	}
}
export const actionClearCart = () => {
	return {
		type: "removeCart",
		store: true,
		payload: {
			cart: []
		}
	}
}
