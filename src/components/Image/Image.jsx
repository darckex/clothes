import React, { useState, useEffect } from "react"
import Default from "../../assets/images/default/default-thumb.png"

import "./Image.scss"

const Image = (props) => {
	const {
		className = "",
		src,
		def = Default,
		onError,
		alt = "Default",
		height,
		width,
		aspectRatio,
		...attr
	} = props

	const [state, setState] = useState({
		src,
		loading: "loading"
	})

	useEffect(() => {
		setState((state) => ({
			...state,
			src
		}))
	}, [src])

	const handleError = (e) => {
		setState({
			...state,
			src: def
		})

		onError && onError(e)
	}

	const handleLoad = () => {
		setState({
			...state,
			loading: ""
		})
	}

	return (
		<div
			className={`image shrink-0 ${className} ${state.loading}`}
			style={{ height, width, aspectRatio }}
			{...attr}>
			<img
				src={state.src || "/"}
				onLoad={handleLoad}
				onError={handleError}
				alt={alt}
			/>
		</div>
	)
}

export default Image
