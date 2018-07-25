import React, { Component } from "react";
import "./App.css";
import { getEndpoint } from "./utils";

class App extends Component {
	constructor() {
		super();
		this.state = {
			books: [],
			authors: []
		};
	}

	componentDidMount() {
		this.getBooks();
		this.getAuthors();
	}

	async getBooks() {
		await this._getDataAndUpdateState(getEndpoint("/books"), "books");
	}

	async getAuthors() {
		await this._getDataAndUpdateState(getEndpoint("/authors"), "authors");
	}

	async _getDataAndUpdateState(endpoint, stateKey) {
		const response = await fetch(endpoint);
		const data = await response.json();
		this.setState({
			[stateKey]: data
		});
	}

	render() {
		return (
			<div>
				<h1>Books</h1>
				{this.state.books.map(book => {
					return <li key={book._id}>{book.title}</li>;
				})}

				<h1>Authors</h1>
				{this.state.authors.map(author => {
					return <li key={author._id}>{author.name}</li>;
				})}
			</div>
		);
	}
}

export default App;
