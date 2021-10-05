const reducer = (state = {}, action) => {
	let ret = {}
	switch (action.type) {
		default: {
			ret = {
				type: action.type,
				option: action.option,
				...action.payload
			}
			break
		}
	}

	const setStorage = async () => {
		if (
			!action.type.includes("@@INIT") &&
			!action.type.includes("@@redux")
		) {
			const { type, option, ...data } = ret
			const oldStorage = JSON.parse(localStorage.getItem("store"))
			localStorage.setItem(
				"store",
				JSON.stringify({ ...oldStorage, ...data })
			)
		}
	}
	if (action.store) {
		setStorage()
	}

	return { ...state, ...ret }
}
export default reducer
