const BASE_URL = 'http://localhost:3000';
const api = new ApiData(`${BASE_URL}`);

const BACKEND_URL = 'http://localhost:3000';
fetch(`${BASE_URL}/test`)
  .then(response => response.json())
  .then(parsedResponse => console.log(parsedResponse));