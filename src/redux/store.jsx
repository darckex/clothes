import { createStore } from "redux"
import reducer from "./reducer"

const defaultStore = () => {
	var localStore = localStorage.getItem("store")
	localStore = localStore ? JSON.parse(localStore) : {}

	return localStore
}

const store = createStore(
	reducer,
	defaultStore(),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
export default store
