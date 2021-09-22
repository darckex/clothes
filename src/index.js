import React from "react"
import ReactDOM from "react-dom"
import App from "./App.jsx"

import "./assets/css/reset.scss"
import "./assets/fonts/roboto.css"
import "./assets/fonts/fontawesome/fontawesome.css"
import "./assets/css/default.scss"

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
)
