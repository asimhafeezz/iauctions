import "./styles/main.scss"

import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from "react-router-dom"
import { Detail, Listings, Login, Signup } from "./components"

const App: React.FC = () => {
	return (
		<Router>
			<Switch>
				<Redirect exact from='/' to='/login' />
				<Route exact path='/login' component={Login} />
				<Route exact path='/signup' component={Signup} />
				<Route exact path='/listings' component={Listings} />
				<Route exact path='/detail/:id' component={Detail} />
			</Switch>
		</Router>
	)
}

export default App
