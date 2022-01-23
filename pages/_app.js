import Layout from '../Components/Common/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<div className='font-Inter'>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</div>
	);
}

export default MyApp;
