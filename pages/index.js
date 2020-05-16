import fetch from 'isomorphic-fetch'
import promise from 'es6-promise'
import Layout from '../components/Layout'
import Prices from '../components/Prices'


const Index = (props) => (
    <Layout>
        <div>
            <h1>
                Welcome to Bitzprice
            </h1>
            <p>Check current Bitcoin rate</p>
            <Prices bpi={props.data.bpi} />
        </div>
    </Layout>  
)

Index.getInitialProps = async function () {
    promise.polyfill()
    const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json', 
    {
        method: "GET",
        headers: {
           
        }
    });
    const data = await res.json();

    return {
        data: data
    };
}





export default Index