import { postAPI } from "../apiRoute/baseService";
import { API } from "../apiRoute/endPoints";

export const registerUser = async (userData) => {
  return await postAPI(API.REGISTRATION, userData);
};

export const loginUser = async (userData) => {
  return await postAPI(API.LOGIN, userData);
};

