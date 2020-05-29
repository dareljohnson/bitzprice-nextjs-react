import fetch from 'isomorphic-fetch';
import promise from 'es6-promise';
promise.polyfill();


export async function fetchAPI(query, {variables} = {}){
    const res = await fetch(
        `${
            process.env.API_URL || 'https//strapi-vercel-webinar.herokuapp.com'
        }.replace(/\/$/,'')/graphql`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                query,
                variables
            }),
        }
    )

    const json = await res.json()
    if(json.errors){
        console.log(json.errors)
        throw new Error('Failed to fetch API!')
    }
}