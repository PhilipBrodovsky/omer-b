import Example from '../containers/Example';

import { Link, Route, Switch } from 'react-router-dom';

import { RegisterPage, LoginPage } from '../pages';

import './App.css';

function App() {
	return (
		<div className="App">
			<div className="navbar">
				<Link to="/">home</Link>
				<Link to="/login">login</Link>
				<Link to="/register">sign up</Link>
			</div>
			<hr />
			<div className="main">
				<Switch>
					<Route exact path="/">
						HOME PAGE
					</Route>
					<Route exact path="/login">
						<LoginPage />
					</Route>
					<Route exact path="/register">
						<RegisterPage />
					</Route>
				</Switch>
			</div>
			<hr />
			<Example />
		</div>
	);
}

export default App;
