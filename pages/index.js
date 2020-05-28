import fetch from 'isomorphic-fetch';
import promise from 'es6-promise';
promise.polyfill();
import Layout from '../components/Layout';
import Prices from '../components/Prices';

const Index = ({price}) => (
	<Layout>
		<div>
			<h1>Welcome to Bitzprice</h1>
			<p>Check current Bitcoin rate</p>
			<Prices bpi={price.bpi} />
		</div>
	</Layout>
);

export async function getServerSideProps() {
	
	const {COIN_DESK} = process.env
	const res = await fetch(`${COIN_DESK}currentprice.json`,
	{
		method: 'GET',
		headers: {}
	});
	const data = await res.json();

	return {
		props: {
			price: data
		}
	};
};

export default Index;
