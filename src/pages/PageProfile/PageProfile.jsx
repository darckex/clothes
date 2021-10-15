import React from "react"
import { Route, Switch, useHistory } from "react-router"
import Container from "../../components/Container/Container"
import { actionLogin } from "../../redux/actions"
import store from "../../redux/store"
import OrdersTab from "./OrdersTab"
import "./PageProfile.scss"
import ProfileLinks from "./ProfileLinks"
import ProfileTab from "./ProfileTab"

const PageProfile = () => {
	const history = useHistory()
	const handleSignOut = () => {
		store.dispatch(actionLogin({ user: {}, jwt: "" }))
		history.replace("/")
	}

	return (
		<Container className="page-profile pad-y5">
			<div className="flex gap5 items-al-start">
				<div className="aside grid bord">
					<ProfileLinks
						text="My Profile"
						to={"/profile/my-profile"}
					/>
					<ProfileLinks text="Orders" to={"/profile/orders"} />
					<div
						className="text center red fw1 pad3 cursor-pointer"
						onClick={handleSignOut}>
						Sign out
					</div>
				</div>
				<div className="grow-1">
					<Switch>
						<Route
							path="/profile/my-profile"
							component={ProfileTab}
						/>
						<Route path="/profile/orders" component={OrdersTab} />
					</Switch>
				</div>
			</div>
		</Container>
	)
}

export default PageProfile
