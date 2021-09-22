import React from "react"
import { Route, Switch } from "react-router"
import PageAbout from "../../pages/PageAbout/PageAbout"
import PageProducts from "../../pages/PageProducts/PageProducts"
import PageHome from "../../pages/PageHome/PageHome"
import PageLogin from "../../pages/PageLogin/PageLogin"
import PageSignup from "../../pages/PageSignup/PageSignup"
import PageForgot from "../../pages/PageForgot/PageForgot"
import PageCart from "../../pages/PageCart/PageCart"
import PageCheckout from "../../pages/PageCheckout/PageCheckout"
import PageProduct from "../../pages/PageProduct/PageProduct"

const Routes = () => {
	return (
		<Switch>
			<Route path="/" exact component={PageHome} />
			<Route path="/products" exact component={PageProducts} />
			<Route path="/about" component={PageAbout} />

			<Route path="/login" component={PageLogin} />
			<Route path="/signup" component={PageSignup} />
			<Route path="/forgot" component={PageForgot} />
			<Route path="/cart" component={PageCart} />
			<Route path="/checkout" component={PageCheckout} />

			<Route path="/products/:id" component={PageProduct} />
		</Switch>
	)
}

export default Routes
