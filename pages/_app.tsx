import type { AppProps } from 'next/app';
import { Montserrat } from '@next/font/google';
import { Provider } from 'react-redux';

import { GlobalCss } from '../styles/globals';
import { store } from '../src/store/index.store';

const montserrat = Montserrat({
	weight: ['600', '300', '400', '700'],
	style: ['normal'],
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<main className={montserrat.className}>
				<GlobalCss />
				<Component {...pageProps} />
			</main>
		</Provider>
	);
}
