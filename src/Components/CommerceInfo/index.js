import {View, Text, ScrollView, StyleSheet, FlatList} from 'react-native';
import Carousel from './Carousel';
import Infos from './Infos';
import Menu from './Menu';
import Events from './Events';
import Coments from './Coments';
import StarRating from '../StarRating';
import { useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { AxiosError } from 'axios';
import * as SecureStore from 'expo-secure-store';
import api from '../../apis/backend';
import axios from'axios';

function CommentHeader({Length, stars}) {
  return (
    <View style={styles.containerCommentHeader}>
      <Text style={styles.title}>{Length} Comentários</Text>
      <View style={styles.rate}>{<StarRating stars={stars}/>}</View>
    </View>
  );
}

export default function ProfileCommerce() {

  const [data, setData] = useState(null);
  const [data2, setData2] = useState(null);
  const [data3, setData3] = useState(null);


  const [isLoading, setIsLoading] = useState(false);

  const route = useRoute();
  const commerce = route.params.commerce;
  
  const api2 = axios.create({
    baseURL:"https://viacep.com.br/ws"
  });

  const fetchData = async () => {
    let userToken;
    try {
      setIsLoading(true);
      userToken = await SecureStore.getItemAsync('userToken');
      let res = await api.get(`/estabelecimento/places/${commerce.uuid}/informacoes`, {
        headers: {
          'Authorization': `Bearer ${userToken}` 
        }
      });

      let res3 = await api.get(`/estabelecimento/places/${commerce.uuid}/avaliacoes`, {
        headers: {
          'Authorization': `Bearer ${userToken}` 
        }
      });
      const newData3 = res3.data;

      setData3(newData3);

      // console.log(newData3);
      const newData = res.data.message;

      console.log("cep: "+res.data.message.cep);

      let res2 = await api2.get(`/${newData.cep}/json/`, {
      });
      const newData2 = res2.data;
      // console.log(newData2);

      setData(newData);
      setData2(newData2);
      console.log(newData);
      // console.log(res3.data);
      // console.log(newData);


    } catch (err) {
      console.log(err.constructor.name)
      if (err instanceof AxiosError){
          
        console.log(err.response.status)
        console.log(err.response.data.message)
      } else if (err instanceof ReferenceError){
        console.log(err.message)
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(()=>{
    fetchData();
    // console.log(commerce)
    // console.log(data.uuid)
  },[commerce])

  const commentList = [
    {
      id: 1,
      nome: 'Fulano de tal bla bla bla',
      comentario: 'Lorem ipsum dolor sit amet. Nam debitis maxime et rerum unde id,Lorem ipsum dolor sit amet. Nam debitis maxime et rerum unde id,Lorem ipsum dolor sit amet. Nam debitis maxime et rerum unde id',

    },
    {
        id: 2,
        nome: 'Lorem Ipsum 1',
        comentario: 'Lorem ipsum dolor sit amet. Nam debitis maxime et rerum unde id',
      },
  ];

  return (
    <View style={styles.containerForm}>
      <Carousel />
      { data2 && <View style={styles.Infos}>
        <Infos commerce={commerce} info={data} endereco={data2}/>
      </View>}

      { data3 && <FlatList
        ListHeaderComponent={
          <>
            <Menu />
            <Events />
            <CommentHeader Length={data3.length} stars={commerce.nota}/>
          </>
        }
        data={data3}
        renderItem={({item, index}) => (
          <View>
            <Coments comment={item} index={index}/>
          </View>
        )}
        keyExtractor={item => item.id}
      />}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8200A8',
  },
  containerCommentHeader: {
  },
  containerForm: {
    flex: 1,
    backgroundColor: '#EDE0D6',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  touchableArea: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginTop: 16,
    color: '#000',
    marginLeft: 16,
  },
  rate: {
    alignItems: 'flex-end',
    right: 15,
    top: 16,
    position: 'absolute',

  },
});
