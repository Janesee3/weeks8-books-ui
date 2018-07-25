export const getEndpoint = route => {
	if (process.env.REACT_APP_BOOKS_API)
		return `${process.env.REACT_APP_BOOKS_API}${route}`;
	return `http://localhost:3000${route}`;
};
