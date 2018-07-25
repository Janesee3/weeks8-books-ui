import React, { Component } from "react";
import "./App.css";

class App extends Component {
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
		const response = await fetch("http://localhost:3000/books");
		const data = await response.json();
		this.setState({
			books: data
		});
	}

	render() {
		return (
			<div>
				{this.state.books.map(book => {
					return <li key={book._id}>{book.title}</li>;
				})}
			</div>
		);
	}
}

export default App;
