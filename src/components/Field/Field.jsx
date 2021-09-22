import React from "react"
import Input from "./Input"
import Select from "./Select"
import Textarea from "./Textarea"
import Checkbox from "./Checkbox"
import Radio from "./Radio"

import "./Field.scss"
import Toggle from "./Toggle"
import Upload from "./Upload"
import Quant from "./Quant"

const Field = React.forwardRef((props, ref) => {
	const { className = "", component, ...attr } = props

	return (
		<div className={`${className} field`}>
			{component === "input" && <Input ref={ref} {...attr} />}
			{component === "select" && <Select ref={ref} {...attr} />}
			{component === "textarea" && <Textarea ref={ref} {...attr} />}
			{component === "checkbox" && <Checkbox ref={ref} {...attr} />}
			{component === "radio" && <Radio ref={ref} {...attr} />}
			{component === "toggle" && <Toggle ref={ref} {...attr} />}
			{component === "file" && <Upload {...attr} />}
			{component === "quant" && <Quant {...attr} />}
		</div>
	)
})

export default Field
