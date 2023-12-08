import api from './apis';
import {AxiosError} from 'axios';
import * as SecureStore from 'expo-secure-store';
import {BackendAcessError} from '../error/user';

async function getCommerceInfo(uuid) {
  let token;
  try {
    token = await SecureStore.getItemAsync('userToken');

    let res = await api.get(`/estabelecimento/places/${uuid}/informacoes`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log('aqui erro 4');

    return res.data;
  } catch (error) {
    console.log('erro aqui');
    console.log(error.constructor.name);
    if (error instanceof AxiosError) {
      console.log(error.response.status);
      console.log(error.response.data.message);
    } else if (error instanceof ReferenceError) {
      console.log(error.message);
    }
  }
}

async function getAvaliacoes(uuid) {
  let token;
  try {
    token = await SecureStore.getItemAsync('userToken');

    let res = await api.get(`/estabelecimento/places/${uuid}/avaliacoes`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  } catch (error) {
    console.log(error.constructor.name);
    if (error instanceof AxiosError) {
      console.log(error.response.status);
      console.log(error.response.data.message);
    } else if (error instanceof ReferenceError) {
      console.log(error.message);
    }
  }
}

async function deleteFav(uuid) {
  let token;
  try {
    token = await SecureStore.getItemAsync('userToken');

    let res = await api.delete(`/estabelecimento/places/${uuid}/favorito`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.log(error.constructor.name);
    if (error instanceof AxiosError) {
      console.log(error.response.status);
      console.log(error.response.data.message);
    } else if (error instanceof ReferenceError) {
      console.log(error.message);
    }
  }
}

async function setFav(uuid) {
  let token;
  try {
    token = await SecureStore.getItemAsync('userToken');

    let res = await api.post(`/estabelecimento/places/${uuid}/favorito`, null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.log(error.constructor.name);
    if (error instanceof AxiosError) {
      console.log(error.response.status);
      console.log(error.response.data.message);
    } else if (error instanceof ReferenceError) {
      console.log(error.message);
    }
  }
}

async function getFav(uuid) {
  let token;
  try {
    token = await SecureStore.getItemAsync('userToken');

    let res = await api.get(`/estabelecimento/places/${uuid}/favorito`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data.message;
  } catch (error) {
    console.log(error.constructor.name);
    if (error instanceof AxiosError) {
      console.log(error.response.status);
      console.log(error.response.data.message);
    } else if (error instanceof ReferenceError) {
      console.log(error.message);
    }
  }
}

async function getAllFav() {
  let token;
  try {
    token = await SecureStore.getItemAsync('userToken');

    let res = await api.get(`/usuario/favoritos`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  } catch (error) {
    console.log(error.constructor.name);
    if (error instanceof AxiosError) {
      console.log(error.response.status);
      console.log(error.response.data.message);
    } else if (error instanceof ReferenceError) {
      console.log(error.message);
    }
  }
}

async function getPlaces(page, latitute, longitude) {
  let token;
  try {
    token = await SecureStore.getItemAsync('userToken');

    let res = await api.get(
      `/estabelecimento/places?page=${page}&latitute=13&longitude=43`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    return res.data;
  } catch (error) {
    console.log(error.constructor.name);
    if (error instanceof AxiosError) {
      console.log(error.response.status);
      console.log(error.response.data.message);
    } else if (error instanceof ReferenceError) {
      console.log(error.message);
    }
  }
}

async function postComment(uuid, comentario, nota) {
  let token;
  try {
    token = await SecureStore.getItemAsync('userToken');

    let res = await api.post(
      `estabelecimento/places/${uuid}/avaliacoes`,
      {comentario, nota},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    return res.data;
  } catch (error) {
    console.log(error.constructor.name);
    if (error instanceof AxiosError) {
      console.log(error.response.status);
      console.log(error.response.data.message);
    } else if (error instanceof ReferenceError) {
      console.log(error.message);
    }
  }
}

async function getBannersImage(uuid) {
  try {
    let res = await api.get(`/estabelecimento/places/${uuid}/banners`);
    return res.data;
  } catch (error) {
    console.log(error.constructor.name);
    if (error instanceof AxiosError) {
      console.log(error.response.status);
      console.log(error.response.data.message);
    } else if (error instanceof ReferenceError) {
      console.log(error.message);
    }
  }
}

async function getEvetos(uuid) {
  try {
    let res = await api.get(`/estabelecimento/places/${uuid}/eventos/`);
    return res.data;
  } catch (error) {
    console.log(error.constructor.name);
    if (error instanceof AxiosError) {
      console.log(error.response.status);
      console.log(error.response.data.message);
    } else if (error instanceof ReferenceError) {
      console.log(error.message);
    }
  }
}

async function getCardapio(uuid) {
  try {
    let res = await api.get(`/estabelecimento/places/${uuid}/cardapio`);
    return res.data;
  } catch (error) {
    console.log(error.constructor.name);
    if (error instanceof AxiosError) {
      console.log(error.response.status);
      console.log(error.response.data.message);
    } else if (error instanceof ReferenceError) {
      console.log(error.message);
    }
  }
}

export {
  getAvaliacoes,
  getCommerceInfo,
  setFav,
  deleteFav,
  getFav,
  getAllFav,
  getPlaces,
  postComment,
  getBannersImage,
  getEvetos,
  getCardapio
};
