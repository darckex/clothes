import { BrowserRouter } from "react-router-dom"
import Header from "./components/Header/Header"
import Routes from "./components/Routes/Routes"

function App() {
	return (
		<div className="app text">
			<BrowserRouter>
				<Header />
				<div className="body">
					<Routes />
				</div>
			</BrowserRouter>
		</div>
	)
}

export default App
