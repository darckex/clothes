import { server } from "../settings"
import axios from "axios"
import { toast } from "react-toastify"
import store from "../redux/store"

axios.defaults.baseURL = `${server}/api`
axios.defaults.headers.post["Content-Type"] = "application/json"

axios.interceptors.response.use(
	(r) => {
		if (r.data.message) {
			toast(r.data.message)
		}
		return r
	},
	(e) => {
		return Promise.reject(e)
	}
)

export const postRegister = async (data) => {
	const res = await axios.post("/post-register.php", data)

	return res.data
}

export const postProfile = async (data) => {
	const { user, jwt } = store.getState()
	const res = await axios.post("/post-profile.php", {
		user,
		jwt,
		...data
	})

	return res.data
}

export const getLogin = async (data) => {
	const res = await axios.get("/get-login.php", { params: data })

	return res.data
}

export const postForgot = async (data) => {
	const res = await axios.post("/post-forgot.php", data)
	return res.data
}

export const getCheckReset = async (data) => {
	const res = await axios.post("/get-check-reset.php", data)
	return res.data
}

export const postChangePassword = async (data) => {
	const res = await axios.post("/post-change-password.php", data)
	return res.data
}

export const getProducts = async (data) => {
	const res = await axios.get("/get-products.php", { params: data })
	return res.data
}

export const getSeasons = async (data) => {
	const res = await axios.get("/get-seasons.php", { params: data })
	return res.data
}

export const getCategories = async (data) => {
	const res = await axios.get("/get-categories.php", { params: data })
	return res.data
}

export const postOrder = async (data) => {
	const { user, jwt } = store.getState()
	const res = await axios.post("/post-order.php", {
		user,
		jwt,
		...data
	})
	return res.data
}
