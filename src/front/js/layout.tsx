// libreary imports
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ScrollToTop } from 'react-router-scroll-to-top';

// import app pages Start

// app Context import
import injectContext from "./store/appContext";

// import app components Start


const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-flask-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
			<ScrollToTop />
					<Switch>
						{
						/* 
						App routes to exact path
						<Route exact path="/">
							<Home />
						</Route>
						App route in case page does not exist
						<Route>
							<h1>Not found!</h1>
						</Route> 
						*/
						}
					</Switch>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
