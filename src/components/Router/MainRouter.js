import { useContext } from 'react';
import { mainContext } from '../../context/context';
import SignIn from '../SignIn/SignIn';
import HomePage from '../HomePage/HomePage';
import NavBar from '../NavBar/NavBar';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import { rows } from '../ShoppingCart/ShoppingCart';

export default function MainRouter() {
	const context = useContext(mainContext);
	const cartItems = rows;

	let homePageHelper;
	context.state.isAuth
		? (homePageHelper = <HomePage />)
		: (homePageHelper = null);

	let signInPageHelper;
	!context.state.isAuth
		? (signInPageHelper = <SignIn />)
		: (signInPageHelper = null);

	let displayCartHelper;
	context.state.isAuth && cartItems.length > 1
		? (displayCartHelper = <ShoppingCart />)
		: (displayCartHelper = null);

	return (
		<>
			<NavBar />
			{signInPageHelper}
			{homePageHelper}
			{displayCartHelper}
		</>
	);
}
