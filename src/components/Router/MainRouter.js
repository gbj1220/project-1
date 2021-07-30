import { useContext } from 'react';
import { mainContext } from '../../context/context';
import SignIn from '../SignIn/SignIn';
import HomePage from '../HomePage/HomePage';

export default function MainRouter(props) {
	const context = useContext(mainContext);

	return (
		<div>
			{context.state.isAuth ? (
				<>
					<HomePage />
				</>
			) : (
				<>
					<SignIn />
				</>
			)}
		</div>
	);
}
