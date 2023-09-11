import {useState, useEffect} from 'react';
import {View, KeyboardAvoidingView, Platform, Text} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './style';
import LogoYO from '../../Components/LogoYouOut';
import Commerce from '../../Components/CartCommerce';
import SearchbarComponent from '../../Components/searchBar';
import consts from '../../Components/CartCommerce/consts';
import api from '../../apis/backend';
import { sessionStorage } from '../../helpers/storage';
import * as SecureStore from 'expo-secure-store';

function Vazio() {
  return <Text>Não encontrado</Text>;
}

export default function HomePage() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCommerceList, setFilteredCommerceList] = useState([]);

  const pageSize = 10;

  const fetchData = async () => {
    let userToken;
    try {
      setIsLoading(true);
      
      userToken = await SecureStore.getItemAsync('userToken');
      let res = await api.get("/estabelecimento/places", {
        headers: {
          'Authorization': `Bearer ${userToken}` 
        }
      });
      const newData = res.data;
      console.log(newData)
      setData([...data, ...newData]);
      setPage(page + 1);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearchChange = filteredList => {
    setFilteredCommerceList(filteredList);
  };

  useEffect(() => {
    // setData(consts.commerceList)
    // console.log(consts.commerceList)
    fetchData();
    
  }, []);

  return (
    <View style={styles.container}>
      {/* <KeyboardAwareScrollView
      contentContainerStyle={styles.container}
      resetScrollToCoords={{ x: 0, y: 0 }}
      scrollEnabled={true}
    > */}
      <View style={styles.containerLogo}>
        <LogoYO />
      </View>
      <View style={styles.containerForm}>
        <View style={styles.containerSearch}>
          <SearchbarComponent
            commerceList={consts.commerceList}
            onSearchChange={handleSearchChange}
          />
        </View>
        <View style={styles.containerPlace}>
          <Commerce Empty={<Vazio/>} Data={data} isLoading={isLoading}/>
        </View>
      </View>
      {/* </KeyboardAwareScrollView> */}
    </View>
  );
}
