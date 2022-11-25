import type { AppProps } from 'next/app';
import { Montserrat } from '@next/font/google';

const montserrat = Montserrat({
	weight: ['600', '300'],
	style: ['normal'],
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<main className={`${montserrat.className} font-sans`}>
			<Component {...pageProps} />
			);
		</main>
	);
}
