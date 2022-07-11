import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Card from './card/Card';
import Error from './main/Error';
import Main from './main/Main';

function App() {
	return (
		<BrowserRouter>
			<div className='container'>
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/card/:username/:reponame" element={<Card />} />
					<Route path="/error" element={<Error />} />
					<Route path='*' element={<Main />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
