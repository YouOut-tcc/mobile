import { AxiosError } from 'axios';
import {cepApi} from "./apis";

async function fetchCEP(cep) {
  try {
    let res = await cepApi.get(`/${cep}/json/`, {
    });

    return res.data
  } catch (error) {
    console.log(error.constructor.name)
    if (error instanceof AxiosError){
      console.log("aqui")
      console.log(error.response.status)
      console.log(error.response.data.message)
    } else if (error instanceof ReferenceError){
      console.log(error.message)
    }
  }
}

export {fetchCEP}
