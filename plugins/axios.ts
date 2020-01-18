export default ({ _app, $axios }, inject): void => {
  // Create a custom axios instance
  const api = $axios.create({
    baseURL: process.env.apiUrl
  });

  inject('api', api);
}
