import fetch from 'isomorphic-fetch';
import promise from 'es6-promise';
promise.polyfill();

import {fetchAPI} from '../lib/api_utils'


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

// graphql queries without using Apolo middleware

export async function getArticles() {
    const data = await fetchAPI(`query Articles {
      articles(sort: "published_at:desc") {
        id
        title
        category {
          id
          name
        }
        image {
          url
          alternativeText
        }
      }
    }`)
    return data.articles
  }
  
  export async function getArticle(id) {
    const data = await fetchAPI(
      `query Articles($id: ID!) {
      article(id: $id) {
        id
        title
        content
        image {
          url
          alternativeText
        }
        category {
          id
          name
        }
        published_at
      }
    }`,
      { variables: { id } }
    )
    return data.article
  }
  
  export async function getCategories() {
    const data = await fetchAPI(`query Categories {
      categories {
        id
        name
      }
    }`)
    return data.categories
  }
  
  export async function getCategory(id) {
    const data = await fetchAPI(
      `query Category($id: ID!) {
      category(id: $id) {
        id
        name
        articles {
          id
          title
          content
          image {
            url
            alternativeText
          }
          category {
            id
            name
          }
        }
      }
    }
  `,
      { variables: { id } }
    )
    return data.category
  }