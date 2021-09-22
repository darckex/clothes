import React, { forwardRef } from "react"

const Checkbox = forwardRef((props, ref) => {
	const { label, ...attr } = props
	return (
		<label className="checkbox-holder flex al-center">
			<input ref={ref} type="checkbox" {...attr} />
			{label && <div className="label text marg-left1">{label}</div>}
		</label>
	)
})

export default Checkbox
