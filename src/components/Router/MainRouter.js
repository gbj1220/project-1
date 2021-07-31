import { useContext } from 'react';
import { mainContext } from '../../context/context';
import SignIn from '../SignIn/SignIn';
import HomePage from '../HomePage/HomePage';
import NavBar from '../NavBar/NavBar';

export default function MainRouter() {
	const context = useContext(mainContext);

	let homePageHelper;
	context.state.isAuth
		? (homePageHelper = <HomePage />)
		: (homePageHelper = null);

	let signInPageHelper;
	!context.state.isAuth
		? (signInPageHelper = <SignIn />)
		: (signInPageHelper = null);

	return (
		<>
			<NavBar />
			{signInPageHelper}
			{homePageHelper}
		</>
	);
}
