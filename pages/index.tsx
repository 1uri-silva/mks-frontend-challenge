import { store } from '../src/store/index.store';
import { Provider } from 'react-redux';

import { GlobalCss } from '../styles/globals';
import HomeRoute from './HomeRoute';

export default function Home() {
	return (
		<>
			<Provider store={store}>
				<HomeRoute />
					<GlobalCss />
			</Provider>
		</>
	);
}
