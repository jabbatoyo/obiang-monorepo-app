import { FetchDto } from "../index";

const apiUrl = import.meta.env.REACT_APP_BASE_API_URL;
export function fetchApiGet(request: FetchDto) {
  return fetch(`${apiUrl}${request.url}`, {
    method: "get",
    headers: new Headers({
      "Access-Control-Allow-Headers": "*",
    }),
  }).then((res) => res.json());
}
