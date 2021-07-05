import axios from "axios";

const base64Convertor = () => {
  const basicB64Credentials = btoa("frontend@shyftplan.com:frontend@shyftplan.com");
  return basicB64Credentials
}

export const getEventsService = async (params: any, id?: number) => {
    axios.defaults.headers["Authorization"] = `Basic ${base64Convertor()}`;
    const response = await axios.get('https://fyx8bq1lpa.execute-api.eu-central-1.amazonaws.com/Prod/events', {params});
    return response;

}

export const getEventDetailsService = async (id: number) => {
    axios.defaults.headers["Authorization"] = `Basic ${base64Convertor()}`;
    const response = axios.get(`https://fyx8bq1lpa.execute-api.eu-central-1.amazonaws.com/Prod/events/${id}`, {});
    return response;
}