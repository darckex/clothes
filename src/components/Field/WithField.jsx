import React from "react"
import { Field } from "react-final-form"
import Field1 from "./Field"

const WithField = (props) => {
	const { name, onChange, component, value, ...attr } = props
	if (component === "checkbox" || component === "radio") {
		attr.type = component
	}

	return (
		<Field name={name} type={attr.type} value={value}>
			{component !== "file"
				? ({ input, meta }) => (
						<Field1
							{...input}
							component={component}
							error={meta.touched ? meta.error : ""}
							onChange={(e) => {
								input.onChange(e)
								onChange && onChange(e)
							}}
							{...attr}
						/>
				  )
				: ({ input: { value, onChange, ...input }, meta }) => (
						<Field1
							{...input}
							value={value}
							component={component}
							error={meta.touched ? meta.error : ""}
							onChange={(files) => onChange(files)}
							{...attr}
						/>
				  )}
		</Field>
	)
}

export default WithField
