// import libraries
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ScrollToTop } from 'react-router-scroll-to-top';

// import app components


// import app pages
import { Home } from './pages/homepage/home';
import { FouroFour } from './pages/pagenotfound/fourofour'

// import app Context
import injectContext from "./store/appContext";

const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-flask-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
			<ScrollToTop />
					<Switch>
					<Route exact path="/">
							<Home />
					</Route>						
					<Route>
						<FouroFour />
					</Route> 
					</Switch>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
