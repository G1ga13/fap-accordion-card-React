import axios from "axios";

export async function FetchData(setData) {
  try {
    let data = await axios.get("https://dummyjson.com/quotes");
    setData(data.data);
  } catch (error) {
    console.log(error);
  }
}
