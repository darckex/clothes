import { BrowserRouter } from "react-router-dom"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Routes from "./components/Routes/Routes"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useEffect, useState } from "react"
import store from "./redux/store"

function App() {
	const [state, setState] = useState({
		user: store.getState().user
	})

	useEffect(() => {
		const unsub = store.subscribe(() => {
			const { type, user } = store.getState()
			if (type === "login") {
				setState((state) => ({ ...state, user }))
			}
		})

		return unsub
	}, [])

	return (
		<div className="app text">
			<ToastContainer />
			<BrowserRouter>
				<Header user={state.user} />
				<div className="body">
					<Routes />
					<Footer />
				</div>
			</BrowserRouter>
		</div>
	)
}

export default App
