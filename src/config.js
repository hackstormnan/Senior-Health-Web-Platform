const env = {
    apiUrl: process.env.NODE_ENV === 'production' ? 'http://www.elderlyharborcare.com/api' : 'http://127.0.0.1:5000'
  };
  
export default env;