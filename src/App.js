import { useContext } from 'react';
import HomePage from './components/HomePage/HomePage';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import NavBar from './components/NavBar/NavBar';
import SignIn from './components/SignIn/SignIn';
import MainContextProvider from './context/context';

import './App.css';
import MainRouter from './components/Router/MainRouter';

function App() {
	return (
		<div className='App'>
			<MainContextProvider>
				<MainRouter />
			</MainContextProvider>
		</div>
	);
}

export default App;
