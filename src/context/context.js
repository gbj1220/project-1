import { createContext, useReducer } from 'react';

const signInReducer = (state, action) => {
	switch (action.type) {
		case 'SIGN_IN':
			console.log(action.payload.username);
			break;
		default:
			console.log('signInReducerRan');
			console.log(action.payload);
	}
};
export const mainContext = createContext({});
// Can also pass in props.children and get rid of the object for the param i.e. const MainContextProvider = (props.children)
const MainContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(signInReducer, []);
	return (
		<mainContext.Provider value={{ state, dispatch }}>
			{children}
		</mainContext.Provider>
	);
};

export default MainContextProvider;
