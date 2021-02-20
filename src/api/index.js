export const request = async (endpoint, method, body) => {
  const headers = { Accept: 'application/json' };

  const response = await fetch(endpoint, {
    headers,
    method,
    body: JSON.stringify(body),
  });

  return response.json();
};

const SECTION = 'viewed';
const PERIOD = '7';
// Add your own API key, generated from NY Times API
const API_KEY = '';
const API_ENDPOINT = `https://api.nytimes.com/svc/mostpopular/v2/`;

export const fetchArticlesList = () =>
  request(
    `${API_ENDPOINT}/${SECTION}/${PERIOD}.json?api-key=${API_KEY}`,
    'GET'
  );
