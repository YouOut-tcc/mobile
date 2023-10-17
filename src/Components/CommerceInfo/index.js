import {View, Text, ScrollView, StyleSheet, FlatList} from 'react-native';
import {useContext} from 'react';
import Carousel from './Carousel';
import Infos from './Infos';
import Menu from './Menu';
import Events from './Events';
import Coments from './Coments';
import StarRating from '../StarRating';
import {useRoute} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {getCommerceInfo, getAvaliacoes} from '../../services/commerce';
import {fetchCEP} from '../../services/cep';
import TagsCommerce from './TagsCommerce';
import ModalComent from './ModalComent';
function CommentHeader({ Length, stars, uuid }) {
  const [startRating, setStarsRating] = useState(0);
  const [isModalVisible, setModalVisible] = useState(false);

  const handleRatingPress = selectedRating => {
    setStarsRating(selectedRating);
    setModalVisible(true); 
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <View style={styles.containerCommentHeader}>
        <Text style={styles.titleRating}>Avalie o estabelecimento</Text>
        <View style={styles.rating}>
          <StarRating
            stars={startRating}
            clickable={true}
            onRatingPress={handleRatingPress}
            starSize={35} 
          />
        </View>
      </View>
      <View>
        <Text style={styles.title}>{Length} Comentários</Text>
        <View style={styles.rate}>{<StarRating stars={stars} />}</View>
        <ModalComent isVisible={isModalVisible} closeModal={closeModal} selectedRating={startRating} uuid={uuid} />
      </View>
    </>
  );
}

export default function ProfileCommerce() {
  const [uuid, setUuid] = useState();
  const [data, setData] = useState(null);
  const [data2, setData2] = useState(null);
  const [data3, setData3] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  const route = useRoute();
  const commerce = route.params.commerce;

  const fetchData = async () => {
    try {
      setIsLoading(true);
      setUuid (commerce.uuid);
      console.log(uuid)
      let commerceInfo = await getCommerceInfo(commerce.uuid);
      let avaliacoes = await getAvaliacoes(commerce.uuid);
      console.log(`json ${JSON.stringify(commerceInfo)}`);
      let cep = await fetchCEP(commerceInfo.cep);

      setData(commerceInfo);
      setData2(cep);
      setData3(avaliacoes);

      console.log(commerceInfo);
      console.log();
      console.log();

      console.log('cep: ' + cep);
    } catch (error) {
      console.log('Error: ' + error.constructor.name);
      if (error instanceof ReferenceError) {
        console.log(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // console.log(commerce)
    // console.log(data.uuid)
  }, [commerce]);

  const commentList = [
    {
      id: 1,
      nome: 'Fulano de tal bla bla bla',
      comentario:
        'Lorem ipsum dolor sit amet. Nam debitis maxime et rerum unde id,Lorem ipsum dolor sit amet. Nam debitis maxime et rerum unde id,Lorem ipsum dolor sit amet. Nam debitis maxime et rerum unde id',
    },
    {
      id: 2,
      nome: 'Lorem Ipsum 1',
      comentario:
        'Lorem ipsum dolor sit amet. Nam debitis maxime et rerum unde id',
    },
  ];

  return (
    <View style={styles.containerForm}>
      <Carousel />
      {data2 && (
        <View style={styles.Infos}>
          <Infos commerce={commerce} info={data} endereco={data2} />
        </View>
      )}

      {data3 && (
        <FlatList
          ListHeaderComponent={
            <>
              <View style={styles.tagsContainer}>
                <TagsCommerce />
              </View>
              <Menu />
              <Events />
              <CommentHeader Length={data3.length} stars={commerce.nota} uuid={uuid} />
            </>
          }
          data={data3}
          renderItem={({item, index}) => (
            <View>
              <Coments comment={item} index={index} />
            </View>
          )}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8200A8',
  },
  containerCommentHeader: {},
  tagsContainer: {
    height: 100,
    // borderWidth: 1,
    // borderColor: 'red'
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
  titleRating:{
    fontSize: 22,
    marginTop: 16,
    color: '#000',
    textAlign: 'center'
  },
  rate: {
    alignItems: 'flex-end',
    right: 15,
    top: 16,
    position: 'absolute',
  },
  rating:{
    alignItems: 'center',
    marginBottom: '3%',
  }
});
