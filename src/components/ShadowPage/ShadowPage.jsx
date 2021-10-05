import React from "react"
import reactDom from "react-dom"
import { useHistory } from "react-router"
import "./ShadowPage.scss"

const ShadowPage = ({ children }) => {
	const history = useHistory()
	const goBack = () => {
		history.goBack()
	}

	return reactDom.createPortal(
		<div className={`shadow-page text`}>
			<div className="overlay" onClick={goBack}></div>
			<div className="body">{children}</div>
		</div>,
		document.querySelector("#root")
	)
}

export default ShadowPage
