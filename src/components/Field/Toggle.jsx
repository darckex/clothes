import React from "react"
import { forwardRef } from "react"

const Toggle = forwardRef((props, ref) => {
	const { label, ...attr } = props
	return (
		<label className="toggle-holder flex al-center">
			<div className="toggle">
				<input ref={ref} {...attr} type="checkbox" />
				<div className="circle"></div>
			</div>
			{label && <div className="label text marg-left1">{label}</div>}
		</label>
	)
})

export default Toggle
