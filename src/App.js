import React, { Component } from "react";
import "./App.css";

const LOCAL_HOST_API = "http://localhost:3000";

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
		const response = await fetch(
			process.env.REACT_APP_BOOKS_API + "/books" || LOCAL_HOST_API + "/books"
		);
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
