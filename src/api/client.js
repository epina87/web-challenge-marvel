import md5 from 'md5';

window.config = JSON.stringify(process.env);

export const getCall = async (detail) => {
    const timestamp = new Date().getTime();
    const apiKey = process.env.REACT_APP_API_KEY_PUBLIC;
    const privateKey = process.env.REACT_APP_API_KEY_PRIVATE;
    const hash = md5(`${timestamp}${privateKey}${apiKey}`);
    
    // Añade el parámetro `limit=50` a la URL
    const url = `${process.env.REACT_APP_API_BASE_URL}/v1/public/${detail}?ts=${timestamp}&apikey=${apiKey}&hash=${hash}&limit=50`;
  
    try {
      const response = await fetch(url);
      const result = await response.json();
      return result.data;
    } catch (error) {
      throw new Error(error);
    }
  };
  




export const getComic = async (detail="comics",Api_URL) => {
    const timestamp = +new Date();
    const md5Key = md5(
        `${timestamp}${process.env.REACT_APP_API_KEY_PRIVATE}${process.env.REACT_APP_API_KEY_PUBLIC}`,
      );
   
    

    const Url = `${Api_URL}?ts=${timestamp}&apikey=${process.env.REACT_APP_API_KEY_PUBLIC}&hash=${md5Key}`;

    

   
    try {
      //return(Result);
          
       const response = await fetch(Url);
       const result = await response.json()
       return result.data;
    } catch (error) {
      throw new Error(error);
    }
  };

