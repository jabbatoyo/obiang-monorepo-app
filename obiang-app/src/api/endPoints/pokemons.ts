import { GetParamsToSend, ResponseData } from "..";
import { fetchApiGet } from "../utils/fetch";

export const getData = async ({
  type,
  offset,
  limit,
  requets,
}: GetParamsToSend) => {
  const url =
    type === "all" ? `/pokemon?offset=${offset}&limit=${limit}` : requets;
  const res: ResponseData = await fetchApiGet({ url });
  return res;
};
