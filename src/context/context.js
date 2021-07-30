import { createContext, useReducer } from 'react';

const signInReducer = (state, action) => {
	switch (action.type) {
		case 'LOGIN':
			console.log(action.payload.username);
			break;
		default:
			console.log('DEFAULT CASE TRIGGERED');
	}
};

export const mainContext = createContext({});

const MainContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(signInReducer, []);
	return (
		<mainContext.Provider value={{ state, dispatch }}>
			{children}
		</mainContext.Provider>
	);
};

export default MainContextProvider;
