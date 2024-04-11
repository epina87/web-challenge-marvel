import md5 from 'md5';
import axios from 'axios';

window.config = JSON.stringify(process.env);


export const getCall = async (detail) => {
  if (!detail) throw new Error('Detail parameter is required');

  const timestamp = +new Date();
  const apiKey = process.env.REACT_APP_API_KEY_PUBLIC;
  const privateKey = process.env.REACT_APP_API_KEY_PRIVATE;
  const apiUrl = process.env.REACT_APP_API_BASE_URL;
  const hash = md5(`${timestamp}${privateKey}${apiKey}`);
  const url = `${apiUrl}/v1/public/${detail}?ts=${timestamp}&apikey=${apiKey}&hash=${hash}&limit=50`;

  try {
    const response = await axios.get(url);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};


export const getComic = async (detail = "comics", Api_URL) => {
  if (!Api_URL) throw new Error('API URL is required');

  const timestamp = +new Date();
  const privateKey = process.env.REACT_APP_API_KEY_PRIVATE;
  const publicKey = process.env.REACT_APP_API_KEY_PUBLIC;
  const md5Key = md5(`${timestamp}${privateKey}${publicKey}`);
  const url = `${Api_URL}?ts=${timestamp}&apikey=${publicKey}&hash=${md5Key}`;

  try {
    const response = await axios.get(url);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching comic details:", error);
    throw error;
  }
};

