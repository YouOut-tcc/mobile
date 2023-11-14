import { createContext } from 'react';

const CommerceList = createContext(new Array(1000));

const FavoriteList = createContext(new Array(200));

export { CommerceList, FavoriteList };