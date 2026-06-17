import { API } from "../utils/fetch";

export const GetEnquiry = async () => {
  // e.preventDefault();

  try {
    const response = await fetch(API, {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log("response data get", data);

    return { data };
  } catch (error) {
    console.log(error);
  }
};
