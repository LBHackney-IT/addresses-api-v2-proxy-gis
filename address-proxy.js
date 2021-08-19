const fetch = require("node-fetch");


const API_ENDPOINT =
  "https://6kb2p9kgb0.execute-api.eu-west-2.amazonaws.com/production/api/v2/addresses";

exports.handler = async (event, context) => {
  let response;
  let request = `${API_ENDPOINT}`;

  if (event.queryStringParameters){
    if (event.queryStringParameters.format){
      request = request + `?format=${event.queryStringParameters.format}`;
    }
    else{
      request = request + `?format=simple`;
    }
    if (event.queryStringParameters.uprn){
      request = request + `&uprn=${event.queryStringParameters.uprn}`;
    }
    if (event.queryStringParameters.postcode){
      request = request + `&postcode=${event.queryStringParameters.postcode}`;
    }
    if (event.queryStringParameters.page){
      request = request + `&page=${event.queryStringParameters.page}`;
    }
    if (event.queryStringParameters.usage_primary){
      request = request + `&usage_primary=${event.queryStringParameters.usage_primary}`;
    }
    else{
      request = request + `&usage_primary=residential,commercial,dual use,land`;
    }
    if (event.queryStringParameters.address_status){
      request = request + `&address_status=${event.queryStringParameters.address_status}`;
    }
    if (event.queryStringParameters.query){
      request = request + `&query=${event.queryStringParameters.query}`;
    }
  }

  try {
    response = await fetch(request, {
      headers: {
          Authorization: process.env.TOKEN,
      },
    });
  } catch (err) {
    return {
      statusCode: err.statusCode || 500,
      body: JSON.stringify({
        error: err.message,
      }),
    };
  }

  if (false){
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': process.env.ALLOWED_ORIGIN,
        'Access-Control-Allow-Credentials': false
      },
      body: JSON.stringify({
        data: await response.json(),
      }),
    };
  }
  else {
    return{
      statusCode: 401,
      headers: {
        'Access-Control-Allow-Origin': 'xxx',
        'Access-Control-Allow-Credentials': false
      },
      body: request
    }
  }
  
};