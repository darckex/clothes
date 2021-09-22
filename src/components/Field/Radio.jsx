import React, { forwardRef } from "react"

const Radio = forwardRef((props, ref) => {
	const { label, value, ...attr } = props
	return (
		<label className="checkbox-holder flex al-center">
			<input ref={ref} type="radio" {...attr} />
			{label ||
				(value && (
					<div className="label text marg-left1">
						{label || value}
					</div>
				))}
		</label>
	)
})

export default Radio
