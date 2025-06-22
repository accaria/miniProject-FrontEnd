import axios from "axios";
export async function fetchAllEventService({type,location}={}) {
  try {
    let url = `${process.env.CONTENTFUL_URL}/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}/entries?access_token=${process.env.CONTENTFUL_API_KEY}&content_type=events`;

    if (type) {
      url += `&fields.eventType=${encodeURIComponent(type)}`;
    }

    if (location) {
      url += `&fields.eventLocation=${encodeURIComponent(location)}`;
    }

    const { data } = await axios.get(url);
    return data?.items || [];
  } catch (err) {
    console.error("Error fetching filtered events:", err);
    return [];
  }
}


/*
export async function fetchFreeEventService() {
  try {
    const { data } = await axios.get(
      `${process.env.CONTENTFUL_URL}/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}/entries?access_token=${process.env.CONTENTFUL_API_KEY}&content_type=events&fields.eventType=Free`
    );
    return data?.items;
  } catch (err) {
    console.log(err);
  }
}

export async function fetchPaidEventService() {
  try {
    const { data } = await axios.get(
      `${process.env.CONTENTFUL_URL}/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}/entries?access_token=${process.env.CONTENTFUL_API_KEY}&content_type=events&fields.eventType=Paid`
    );
    return data?.items;
  } catch (err) {
    console.log(err);
  }
}

export async function fetchJakartaEventService() {
  try {
    const { data } = await axios.get(
      `${process.env.CONTENTFUL_URL}/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}/entries?access_token=${process.env.CONTENTFUL_API_KEY}&content_type=events&fields.eventLocation=Jakarta`
    );
    return data?.items;
  } catch (err) {
    console.log(err);
  }
}

export async function fetchBandungEventService() {
  try {
    const { data } = await axios.get(
      `${process.env.CONTENTFUL_URL}/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}/entries?access_token=${process.env.CONTENTFUL_API_KEY}&content_type=events&fields.eventLocation=Bandung`
    );
    return data?.items;
  } catch (err) {
    console.log(err);
  }
}



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



*/
