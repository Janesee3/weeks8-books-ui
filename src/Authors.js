import React, { Component } from "react";
import { getEndpoint } from "./utils";

class Authors extends Component {
	constructor() {
		super();
		this.state = {
			authors: []
		};
	}

	componentDidMount() {
		this.getAuthors();
	}

	async getAuthors() {
		const response = await fetch(getEndpoint("/authors"));
		const data = await response.json();
		this.setState({
			authors: data
		});
	}

	render() {
		return (
			<div>
				<h1>Authors</h1>
				{this.state.authors.map(author => {
					return <li key={author._id}>{author.name}</li>;
				})}
			</div>
		);
	}
}

export default Authors;
