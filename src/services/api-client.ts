import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "6d3489faa5df413693f4f18491136873",
  },
});

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

export default class APIClient<T> {
  endpoint: string; 

  constructor(endpoint: string) {
    this.endpoint = endpoint
  }

  getAll = (config?: AxiosRequestConfig) => {
    return axiosInstance.get<FetchResponse<T>>(this.endpoint, config)
      .then(res => res.data)
  }
}