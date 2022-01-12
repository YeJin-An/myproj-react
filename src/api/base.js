import Axios from 'axios';
import { makeUseAxios } from 'axios-hooks';
import { API_HOST } from 'Constants';
import { UseAxios } from 'axios-hooks';

const axiosInstance = Axios.create({
  baseURL: API_HOST,
});

const useAxiApios = makeUseAxios({
  axios: axiosInstance,
});

export { axiosInstance, useAxiApios, makeUseAxios };
