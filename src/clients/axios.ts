import axios from 'axios'

interface AxiosOptions {
  baseUrl?: string
  token?: string
}

export default {
  create: (options: AxiosOptions) => {
    return axios.create({
      baseURL: options.baseUrl,
      headers: {
        Authorization: options.token ? `Bearer ${options.token}` : '',
      },
    })
  },
}
