import { createContext, useReducer } from 'react';

const initialState = {
	isAuth: false,
	user: null,
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'SIGN_IN':
			if (
				action.payload.username === 'User' &&
				action.payload.password === 'abc123'
			) {
				return {
					isAuth: true,
					user: action.payload.username,
				};
			}
			break;

		case 'ADD_TO_CART':
			console.log('Added to cart');
			console.log(action.payload);

		default:
			console.log('signInReducer default');
			return initialState;
	}
};

export const mainContext = createContext({});

// Can also pass in props.children and get rid of the object for the param i.e. const MainContextProvider = (props.children)
const MainContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<mainContext.Provider value={{ state, dispatch }}>
			{children}
		</mainContext.Provider>
	);
};

export default MainContextProvider;
