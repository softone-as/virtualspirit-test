import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';

const configureStore = () => {
	const sagaMiddleware = createSagaMiddleware();
	const store = createStore(
		rootReducer,
		composeWithDevTools(applyMiddleware(sagaMiddleware))
	);
	sagaMiddleware.run(rootSaga);
	return store;
};
const store = configureStore(); // exported this instead;

export default store;
