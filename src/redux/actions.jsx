export const actionTest = (data) => {
	return {
		type: "test",
		store: 1,
		payload: {
			test: data
		}
	}
}
export const actionAddCategories = (data) => {
	return {
		type: "addCategories",
		payload: {
			categories: data
		}
	}
}
export const actionAddProducts = (data) => {
	return {
		type: "addProducts",
		payload: {
			products: data
		}
	}
}
