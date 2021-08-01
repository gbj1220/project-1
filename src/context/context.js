import { createContext, useReducer } from 'react';
import { rows } from '../components/ShoppingCart/ShoppingCart';
import { v4 as uuidv4 } from 'uuid';

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
			} else {
				return {
					isAuth: false,
					user: null,
				};
			}

		case 'ADD_TO_CART':
			const newObj = {
				Product: action.payload.product,
				Price: action.payload.price,
				id: uuidv4(),
			};
			return (
				rows.push(newObj),
				{
					isAuth: true,
				}
			);

		case 'DELETE_FROM_CART':
			console.log('DeleteFromCart Ran');

		case 'LOG_OUT':
			return {
				isAuth: false,
				user: null,
			};

		default:
			console.log('reducer default');
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
