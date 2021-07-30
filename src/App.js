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
