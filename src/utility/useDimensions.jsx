import { useState, useEffect } from "react"

export default function useDimensions() {
	const hasWindow = typeof window !== "undefined"

	function getWindowDimensions() {
		const vw = hasWindow ? window.innerWidth : null
		const vh = hasWindow ? window.innerHeight : null
		return {
			vw,
			vh
		}
	}

	const [windowDimensions, setWindowDimensions] = useState(
		getWindowDimensions()
	)

	useEffect(() => {
		if (hasWindow) {
			function handleResize() {
				setWindowDimensions(getWindowDimensions())
			}

			window.addEventListener("resize", handleResize)
			return () => window.removeEventListener("resize", handleResize)
		}
	}, [hasWindow])

	return windowDimensions
}
