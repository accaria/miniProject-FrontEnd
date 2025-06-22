import axios from "axios";
export async function fetchEventService() {
  try {
    const { data } = await axios.get(
      `${process.env.CONTENTFUL_URL}/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}/entries?access_token=${process.env.CONTENTFUL_API_KEY}&content_type=events`
    );
    return data?.items;
  } catch (err) {
    console.log(err);
  }
}