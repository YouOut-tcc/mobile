import * as SecureStore from 'expo-secure-store';

function setItem(key, value) {
  SecureStore.setItemAsync(key, value);
}

async function getItem(key) {
  let result = await SecureStore.getItemAsync(key);
  return result? null : result;
}

function delItem(key) {
  SecureStore.deleteItemAsync(key, value);
}

export {setItem, getItem, delItem}