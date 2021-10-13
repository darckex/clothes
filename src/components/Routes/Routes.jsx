import React, { useEffect } from "react"
import { Route, Switch, useLocation } from "react-router"
import PageAbout from "../../pages/PageAbout/PageAbout"
import PageProducts from "../../pages/PageProducts/PageProducts"
import PageHome from "../../pages/PageHome/PageHome"
import PageLogin from "../../pages/PageLogin/PageLogin"
import PageSignup from "../../pages/PageSignup/PageSignup"
import PageForgot from "../../pages/PageForgot/PageForgot"
import PageCart from "../../pages/PageCart/PageCart"
import PageCheckout from "../../pages/PageCheckout/PageCheckout"
import PageProduct from "../../pages/PageProduct/PageProduct"
import PageAddCart from "../../pages/PageAddCart/PageAddCart"
import PageProfile from "../../pages/PageProfile/PageProfile"
import PageResetToken from "../../pages/PageResetToken/PageResetToken"
import PageResetPassword from "../../pages/PageResetPassword/PageResetPassword"

const Routes = () => {
	const { pathname } = useLocation()

	useEffect(() => {
		document.querySelector(".app > .body").scrollTo(0, 0)
	}, [pathname])

	return (
		<>
			<Switch>
				<Route path="/" exact component={PageHome} />
				<Route
					path="/products/:category"
					exact
					component={PageProducts}
				/>
				<Route path="/products/:category/:id" component={PageProduct} />
				<Route path="/about" component={PageAbout} />
				<Route path="/login" component={PageLogin} />
				<Route path="/profile" component={PageProfile} />
				<Route path="/signup" component={PageSignup} />
				<Route path="/forgot" component={PageForgot} />
				<Route path="/reset-token" component={PageResetToken} />
				<Route path="/reset-password" component={PageResetPassword} />
				<Route path="/cart" component={PageCart} />
				<Route path="/checkout" component={PageCheckout} />
			</Switch>
			<Route
				path="/products/:category/:id/add-cart"
				exact
				component={PageAddCart}
			/>
		</>
	)
}

export default Routes
