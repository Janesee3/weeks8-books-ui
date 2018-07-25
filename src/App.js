import React, { Component } from "react";
import "./App.css";
import { getEndpoint } from "./utils";
import Authors from "./Authors";
import Books from "./Books";

class App extends Component {
	constructor() {
		super();
		this.state = {
			books: [],
			authors: []
		};
	}

	render() {
		return (
			<div>
				<Books />
				<Authors />
			</div>
		);
	}
}

export default App;
