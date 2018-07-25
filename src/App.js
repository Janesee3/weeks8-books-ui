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

	getURL() {
		if (process.env.REACT_APP_BOOKS_API) return process.env.REACT_APP_BOOKS_API;
    return LOCAL_HOST_API; 
    
    
	}

	async getBooks() {
		const response = await fetch(this.getURL() + "/books");
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
