import React, { forwardRef, useState } from "react"

const Input = forwardRef((props, ref) => {
	const {
		inputClass = "",
		type,
		label,
		error,
		success,
		icon,
		addon,
		onClick,
		onFocus,
		onBlur,
		...attr
	} = props

	const [state, setState] = useState({
		focus: false,
		password: type === "password"
	})

	const handleFocus = (e) => {
		setState({ ...state, focus: true })
		onFocus && onFocus(e)
	}

	const handleBlur = (e) => {
		setState({ ...state, focus: false })
		onBlur && onBlur(e)
	}

	const togglePassword = () => {
		setState({ ...state, password: !state.password })
	} // styles

	const focus = state.focus ? "focus" : ""
	let show = ""
	let color = ""
	let eye = state.password ? "fa-eye" : "fa-eye-slash"

	if (error) {
		show = "fa-exclamation-circle"
		color = "red"
	}

	if (success) {
		show = "fa-check"
		color = "green"
	}

	return (
		<label className={`input-holder ${color}`}>
			{label && <div className="label text  marg-bottom1">{label}</div>}
			<div className={`icon-holder ${focus}`}>
				{icon && (
					<div
						className={`input-icon icon blue size2 place-center ${icon}`}></div>
				)}
				<input
					className={`input ${inputClass}`}
					ref={ref}
					type={
						type === "password"
							? state.password
								? type
								: ""
							: type
					}
					onClick={onClick}
					onFocus={handleFocus}
					onBlur={handleBlur}
					autoComplete="off"
					{...attr}
				/>
				{show && (
					<div
						className={`input-icon far ${show} icon size2 ${color} place-center`}></div>
				)}
				{type === "password" && (
					<div
						className={`input-icon far ${eye} icon size2 place-center`}
						onClick={togglePassword}></div>
				)}
				{addon && (
					<div className="addon text size3 place-center pad-x2 bg-gray-1">
						{addon}
					</div>
				)}
			</div>
			{!!error && <div className="text error">{error}</div>}
		</label>
	)
})

export default Input
