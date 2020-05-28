import fetch from 'isomorphic-fetch';
import promise from 'es6-promise';
promise.polyfill();
import Layout from '../components/Layout';
import Prices from '../components/Prices';
import { getPrice } from '../lib/api'

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
    const price_data = await getPrice()
	return {
		props: {
			price: price_data
		}
	};
};

export default Index;
