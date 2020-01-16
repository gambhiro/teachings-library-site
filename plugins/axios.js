export default ({ app, $axios }, inject) => {
  // Create a custom axios instance
  const api = $axios.create()

  const url = 'http://api.a-buddha-ujja.org'

  /*
  const url =
        process.env.NODE_ENV === 'production'
        ? 'http://api.a-buddha-ujja.org'
        : 'http://localhost:1337'
  */

  // Call the public API even when NODE_ENV was not set.
  /*
  const url =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:1337'
      : 'http://api.a-buddha-ujja.org'
  */

  api.setBaseURL(url)

  inject('api', api)
}
