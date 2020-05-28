
export async function getPrice(){
    //const API_URL = "https://api.coindesk.com/v1/bpi/"
    const {COIN_DESK} = process.env
        
    const res = await fetch(`${COIN_DESK}currentprice.json`,
    {
        method: 'GET',
        headers: {}
    });
    const data = await res.json();

    return data
}
