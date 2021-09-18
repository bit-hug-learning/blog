const BASE_URL = 'https://rafaelg13.sg-host.com/wp-json/wp/v2/';

async function getData(path, queryParams) {
  let queryString = '';
  if (typeof queryParams === 'object') {
    const params = cleanObjectProperties(queryParams);
    queryString = Object.keys(params)
      .map((key) => {
        return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
      })
      .join('&');
  }
  const response = await fetch(BASE_URL + path + '?' + queryString);
  const data = await response.json();
  return data;
}

export const cleanObjectProperties = (obj) => {
  const clone = { ...obj };
  Object.keys(clone).forEach((key) => {
    if (
      clone[key] === null ||
      clone[key] === undefined ||
      clone[key].length === 0
    ) {
      delete clone[key];
    } else if (Array.isArray(clone[key])) {
      clone[key] = clone[key].map(encodeURIComponent).join(',');
    }
  });
  return clone;
};

export default getData;
