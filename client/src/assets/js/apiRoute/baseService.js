import axios from 'axios';

export const getAPI = async(url)=> {
  try{
    const response = await axios.get(url);
    return response.data;
  }catch(error){
    throw error;
  }
};

export const postAPI = async(url, data)=> {
    try{
      const token = localStorage.getItem("token");
      const response = await axios.post(url, data,{
        headers:{
          Authorization:`Bearer ${token}`
        }
      });
      return response.data;
    }catch(error){
        throw error;
    }
};

// export const putAPI = async(url, data) => {
//    try{
//     const response = await axios.put(url, data);
//     return response.data;
//    }catch(error){
//      console.error("PUT error:", error)
//      throw error;
//    }
// };

// export const deleteAPI = (url, data) => {
//     try{
//       const response = await axios.delete(url, data);
//       return response.data;
//     }catch(error){
//         console.error("Delete error:", error);
//         throw error;
//     }
// }