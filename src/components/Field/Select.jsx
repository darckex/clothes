import React, { forwardRef, useState } from "react"

const Select = forwardRef((props, ref) => {
	const {
		children,
		label,
		error,
		success,
		addon,
		readonly,
		onClick,
		onFocus,
		onBlur,
		...attr
	} = props

	const [state, setState] = useState({
		focus: false
	})

	const handleFocus = (e) => {
		setState({ ...state, focus: true })
		onFocus && onFocus(e)
	}

	const handleBlur = (e) => {
		setState({ ...state, focus: false })
		onBlur && onBlur(e)
	}

	const focus = state.focus ? "focus" : ""
	let icon = ""
	let color = ""

	if (error) {
		icon = "fa-exclamation-circle"
		color = "red"
	}

	if (success) {
		icon = "fa-check"
		color = "green"
	}

	return (
		<div className={`input-holder ${color}`}>
			{label && <div className="label text marg-bottom1">{label}</div>}
			<div className={`icon-holder flex ${focus}`}>
				<select
					className="input text pad-x2 pad-y1"
					onClick={onClick}
					readOnly={readonly}
					onFocus={handleFocus}
					onBlur={handleBlur}
					ref={ref}
					{...attr}>
					{children}
				</select>
				{icon && (
					<div
						className={`far ${icon} input-icon icon size2 ${color} place-center`}></div>
				)}
				{addon && (
					<div className="addon text size3 place-center pad-x2 bg-gray-1">
						{addon}
					</div>
				)}
			</div>
			{error && <div className="text error">{error}</div>}
		</div>
	)
})

export default Select
