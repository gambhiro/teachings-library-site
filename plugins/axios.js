export default ({ app, $axios }, inject) => {
  // Create a custom axios instance
  const api = $axios.create()

  const url =
    process.env.NODE_ENV === 'production'
      ? 'http://api.a-buddha-ujja.org'
      : 'http://localhost:1337'

  api.setBaseURL(url)

  inject('api', api)
}
