import React, { useCallback, useEffect, useRef, useState } from "react"
import Image from "../Image/Image"

import "./Upload.scss"

function Upload(props) {
	const {
		name,
		label = "Upload File",
		multiple,
		onChange,
		onAdd,
		onDelete,
		error,
		value,
		...attr
	} = props

	const [state, setState] = useState({
		files: [],
		images: []
	})

	const inputRef = useRef()

	const addFiles = useCallback(
		(files) => {
			onAdd && onAdd(files)
			const filesArr = Array.prototype.slice.call(files)
			const storedFiles = multiple ? state.files : []
			const storedImages = multiple ? state.images : []

			filesArr.forEach((file) => {
				storedFiles.push(file)
				storedImages.push(URL.createObjectURL(file))
			})

			setState((state) => ({
				...state,
				files: storedFiles,
				images: storedImages
			}))
		},
		[multiple, onAdd, state]
	)

	useEffect(() => {
		addFiles(value)
	}, [addFiles, value])

	useEffect(() => {
		const dt = new DataTransfer()
		state.files.forEach((file) => {
			dt.items.add(file)
		})
		inputRef.current.files = dt.files
		onChange && onChange(dt.files)
	}, [state, onChange])

	const handleChange = (e) => {
		const files = e.target.files
		addFiles(files)
		e.target.value = ""
	}

	const removeFile = (k) => {
		onDelete && onDelete(k)

		const files = state.files
		const images = state.images

		files.splice(k, 1)
		images.splice(k, 1)

		setState({
			...state,
			files,
			images
		})
	}

	return (
		<div className="upload pad1">
			<label>
				<input
					multiple={multiple}
					type="file"
					hidden
					onChange={handleChange}
					{...attr}
				/>
				<input
					multiple={multiple}
					type="file"
					hidden
					name={name}
					ref={inputRef}
				/>
				<div className="btn blue w100">{label}</div>
			</label>
			<div className={`grid gap1 marg-top2 ${multiple ? "col2" : ""}`}>
				{state.images.map((image, k) => (
					<div className="pos-rel" key={k}>
						<div
							className="icon red size1 pos-abs pos-top1 pos-right1 fas fa-times"
							onClick={() => removeFile(k)}
						/>
						<Image className="contain" src={image} />
					</div>
				))}
			</div>
			{error && <div className="text error">{error}</div>}
		</div>
	)
}

export default Upload
