import React from "react"

const Footer = () => {
	return (
		<div className="footer bg-black-1 pad2 flex content-space-between">
			<div className="text white size0">
				Copyright © 2021 All rights reserved | Developed by{" "}
				<a
					className="text red size0"
					href="http://aandhinvest.com"
					target="_blank"
					rel="norel">
					A&H INVEST
				</a>
			</div>
			<div className="flex gap2">
				<a href="#" className="icon size3 blue fab fa-facebook"></a>
				<a href="#" className="icon size3 blue fab fa-twitter"></a>
				<a href="#" className="icon size3 blue fab fa-instagram"></a>
				<a href="#" className="icon size3 blue fab fa-linkedin"></a>
			</div>
		</div>
	)
}

export default Footer
