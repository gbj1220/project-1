import { TurnedInTwoTone } from '@material-ui/icons';
import { createContext, useReducer } from 'react';

const initialState = {
	isAuth: false,
	user: null,
};

const signInReducer = (state, action) => {
	switch (action.type) {
		case 'SIGN_IN':
			console.log(action.payload);
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

		default:
			console.log('Default ran signInReducer');
			return initialState;
	}
};

export const mainContext = createContext({});

// Can also pass in props.children and get rid of the object for the param i.e. const MainContextProvider = (props.children)
const MainContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(signInReducer, initialState);

	return (
		<mainContext.Provider value={{ state, dispatch }}>
			{children}
		</mainContext.Provider>
	);
};

export default MainContextProvider;
