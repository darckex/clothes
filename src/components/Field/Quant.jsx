import React, { useEffect, useState } from "react"
import Button from "../Button/Button"
import Field from "./Field"

const Quant = (props) => {
	const { value, min = 0, max, onChange, disabled, ...attr } = props
	const [state, setState] = useState({
		value: Number(value) || 0
	})

	useEffect(() => {
		setState((state) => ({
			...state,
			value: Number(value) || 0
		}))
	}, [value])

	const handleChange = (change) => {
		let value = state.value + change
		if (value < min) {
			if (change === -1) {
				value = 0
			} else {
				value = min
			}
		}
		onChange && onChange(value)

		setState({ ...state, value })
	}

	const changeValue = (e) => {
		const value = Number(e.target.value)
		onChange && onChange(value)
		setState({ ...state, value })
	}

	const handleBlur = (e) => {
		let value = Number(e.target.value)
		if (value < min && value > 0) {
			value = min
		}
		onChange && onChange(value)
		setState({ ...state, value })
	}

	return (
		<div className="flex quant content-stretch" disabled={disabled}>
			<Button
				className="black-1 small shrink-0"
				onClick={() => handleChange(-1)}>
				<div className="icon size1 fas fa-minus"></div>
			</Button>

			<Field
				inputClass="text center"
				component="input"
				type="number"
				placeholder="0"
				value={state.value}
				min={min}
				max={max}
				onChange={changeValue}
				onBlur={handleBlur}
				{...attr}
			/>

			<Button
				className="black-1 small shrink-0"
				onClick={() => handleChange(1)}>
				<div className="icon size1 fas fa-plus"></div>
			</Button>
		</div>
	)
}

export default Quant
