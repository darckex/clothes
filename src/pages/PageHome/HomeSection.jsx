import React from "react"
import Container from "../../components/Container/Container"

const HomeSection = ({ title, subTitle, children }) => {
	return (
		<Container className="category pad-y4">
			<div className="text title center marg-top10">{title}</div>
			<div className="line marg-top4"></div>
			<div className="text sub-title center marg-top4 marg-bot8">
				{subTitle}
			</div>
			{children}
		</Container>
	)
}

export default HomeSection
