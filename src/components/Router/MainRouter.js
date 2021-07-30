import { useContext } from 'react';
import { mainContext } from '../../context/context';
import SignIn from '../SignIn/SignIn';
import HomePage from '../HomePage/HomePage';
import NavBar from '../NavBar/NavBar';

export default function MainRouter(props) {
	const context = useContext(mainContext);

	return (
		<div>
			{context.state.isAuth ? (
				<>
					<NavBar />
					<HomePage />
				</>
			) : (
				<>
					<NavBar />
					<SignIn />
				</>
			)}
		</div>
	);
}
