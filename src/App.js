import { BrowserRouter as Routes, Route, Switch } from 'react-router-dom';
import FormPost from './pages/FormPost';
import Home from './pages/Home';

function App() {
	return (
		<Routes>
			<Switch>
				<Route path='/' component={Home} exact />
				<Route path='/post/new' component={FormPost} exact />
				<Route path='/post/edit/:id' component={FormPost} exact />
			</Switch>
		</Routes>
	);
}

export default App;
