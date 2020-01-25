// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default ({ _app, $axios }: any, inject: any): void => {
  // Create a custom axios instance
  const api = $axios.create({
    baseURL: process.env.apiUrl
  });

  inject('api', api);
};
