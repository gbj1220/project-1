import HomePage from './components/HomePage/HomePage';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import NavBar from './components/NavBar/NavBar';
import SignIn from './components/SignIn/SignIn';

import './App.css';

function App() {
	return (
		<div className='App'>
			<NavBar />
			<SignIn />
			<ShoppingCart />
			<HomePage />
		</div>
	);
}

export default App;
