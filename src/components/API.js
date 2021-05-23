import axios from 'axios';

const getImage = axios.create({
   baseURL: "http://interview.agileengine.com",
   responseType: "json"
});

export default getImage;