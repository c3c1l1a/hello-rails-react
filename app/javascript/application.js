// Entry point for the build script in your package.json
//import "@hotwired/turbo-rails"
//
import React from 'react';
import ReactDOM from 'react-dom';
import RootController from "./controllers/root"

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
	return (
	  <Router>
	  	<Routes>
	  		<Route exact path="/" element={<RootController />}/>
	  	</Routes>
	  </Router>
	);
}

ReactDOM.render(
  <App/>,
  document.getElementById('root'),
);