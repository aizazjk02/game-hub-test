import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "6d3489faa5df413693f4f18491136873",
  },
});

export interface FetchResponse<T> {
  count: number;
  results: T[];
}