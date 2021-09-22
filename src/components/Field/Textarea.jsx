import React, { forwardRef, useState } from "react"

const Textarea = forwardRef((props, ref) => {
	const {
		label,
		error,
		success,
		readonly,
		onClick,
		onFocus,
		onBlur,
		onChange,
		...attr
	} = props
	const [state, setState] = useState({
		focus: false,
		rows: 3
	})

	const handleFocus = (e) => {
		setState({ ...state, focus: true })
		onFocus && onFocus(e)
	}

	const handleBlur = (e) => {
		setState({ ...state, focus: false })
		onBlur && onBlur(e)
	}

	const handleChange = (e) => {
		onChange && onChange(e)
		const perHeight = Math.ceil(e.target.offsetHeight / state.rows)
		let rows = Math.ceil(e.target.scrollHeight / perHeight)

		rows < 3 && (rows = 3)
		rows > 10 && (rows = 10)

		setState({
			...state,
			rows
		})
	}

	const focus = state.focus ? "focus" : ""
	let color = ""
	if (error) {
		color = "red"
	}

	if (success) {
		color = "green"
	}

	return (
		<label className={`input-holder ${color}`}>
			{label && <div className="label text marg-bottom1">{label}</div>}
			<div className={`icon-holder flex ${focus}`}>
				<textarea
					autoComplete="off"
					className="input text pad-x2 pad-y1"
					onClick={onClick}
					readOnly={readonly}
					onFocus={handleFocus}
					onBlur={handleBlur}
					onChange={handleChange}
					rows={state.rows}
					ref={ref}
					{...attr}
				/>
			</div>
			{error && <div className="text error">{error}</div>}
		</label>
	)
})

export default Textarea
