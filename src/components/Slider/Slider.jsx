import React from "react"
import SwiperCore, { Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper-bundle.css"
import "swiper/components/navigation/navigation.scss"
import "swiper/components/pagination/pagination.scss"
import "./_Slider.scss"

SwiperCore.use([Navigation, Pagination])

const Slider = (props) => {
	const {
		className = "",
		spaceBetween,
		slidesPerView,
		children,
		...attr
	} = props

	const items = Array.isArray(children) ? children : [children]
	return (
		<Swiper
			className={`slider ${className}`}
			spaceBetween={spaceBetween}
			slidesPerView={slidesPerView}
			{...attr}>
			{items.map((item, k) => (
				<SwiperSlide
					key={k}
					style={{
						width: attr.slidesPerView === "auto" ? "unset" : "100%"
					}}>
					{item}
				</SwiperSlide>
			))}
		</Swiper>
	)
}

export default Slider
