import React, { Component } from "react";
import { getEndpoint } from "./utils";

class Books extends Component {
	constructor() {
		super();
		this.state = {
			books: []
		};
	}

	componentDidMount() {
		this.getBooks();
	}

	async getBooks() {
		const response = await fetch(getEndpoint("/books"));
		const data = await response.json();
		this.setState({
			books: data
		});
	}

	render() {
		return (
			<div>
				<h1>Books</h1>
				{this.state.books.map(book => {
					return <li key={book._id}>{book.title}</li>;
				})}
			</div>
		);
	}
}

export default Books;
