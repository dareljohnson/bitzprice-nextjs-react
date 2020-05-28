import { NowRequest, NowResponse } from '@now/node'

module.exports = (request, response) => {
  const { name = 'World' } = request.query
  response.status(200).send(`Hello ${name}!`)
}

// Example deployment:
// https://https://bitzprice-nextjs-react.now.sh/api/hello?name=reader