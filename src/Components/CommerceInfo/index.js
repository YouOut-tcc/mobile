import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  FlatList,
  RefreshControl,
} from 'react-native';
import {useContext} from 'react';
import Carousel from './Carousel';
import Infos from './Infos';
import Menu from './Menu';
import Events from './Events';
import Coments from './Coments';
import StarRating from '../StarRating';
import {useRoute} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {getCommerceInfo, getAvaliacoes, getBannersImage, getEvetos} from '../../services/commerce';
import {fetchCEP} from '../../services/cep';
import TagsCommerce from './TagsCommerce';
import ModalComent from './ModalComent';
import noImage from "../../assets/image1.jpg";

function CommentHeader({Length, stars, uuid, reload}) {
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
        <ModalComent
          isVisible={isModalVisible}
          closeModal={closeModal}
          selectedRating={startRating}
          uuid={uuid}
          reload={reload}
        />
      </View>
    </>
  );
}

export default function ProfileCommerce() {
  const [uuid, setUuid] = useState();
  const [info, setInfo] = useState(null);
  const [infoCep, setCep] = useState(null);
  const [placeAvaliacoes, setAvaliacoes] = useState(null);
  const [reloadComments, setReloadComments] = useState(false);
  const [banners, setBanners] = useState([]);
  const [eventos, setEventos] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const route = useRoute();
  const commerce = route.params.commerce;

  const ReloadComments = async () => {
    setReloadComments(true);
  };

  const fetchComments = async () => {
    // setReloadComments(true);
    console.log("pegando os comentarios");

    try {
      let avaliacoes = await getAvaliacoes(commerce.uuid);
      avaliacoes = avaliacoes.map(avaliacao => ({
        ...avaliacao,
        timestamp: new Date(avaliacao.criado).getTime(), 
      }));
  
      avaliacoes.sort((a, b) => b.timestamp - a.timestamp);
  
      setAvaliacoes(avaliacoes);
      // console.log(`json ${JSON.stringify(avaliacoes)}`);

    } catch (error) {
      console.log('Error: ' + error.constructor.name);
      if (error instanceof ReferenceError) {
        console.log(error.message);
      }
    } finally {
      setIsLoading(false);
      setReloadComments(false);
    }
  }

  const fetchInfo = async () => {
    try {
      console.log('pegando a infos do estabelecimento');
      console.log(uuid);
      let commerceInfo = await getCommerceInfo(commerce.uuid);

      // console.log(`json ${JSON.stringify(commerceInfo)}`);
      let cep = await fetchCEP(commerceInfo.cep);

      setInfo(commerceInfo);
      setCep(cep);

      // console.log('cep: ' + cep);
    } catch (error) {
      console.log('Error: ' + error.constructor.name);
      if (error instanceof ReferenceError) {
        console.log(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const fetchEventos = async () => {
    try {
      console.log('pegando os Eventos');
      console.log(uuid);
      let eventosResult = await getEvetos(commerce.uuid);

      console.log(`json ${JSON.stringify(eventosResult)}`);
      setEventos(eventosResult);

    } catch (error) {
      console.log('Error: ' + error.constructor.name);
      if (error instanceof ReferenceError) {
        console.log(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const fetchBanners = async () => {
    try {
      console.log('pegando os Banners');
      console.log(uuid);
      let bannersResult = await getBannersImage(commerce.uuid);

      console.log(`json ${JSON.stringify(bannersResult)}`);
      if(bannersResult){
        setBanners(bannersResult);

      } else {
        setBanners([noImage]);
      }

    } catch (error) {
      console.log("Error ao pegar os banners");
      console.log('Error: ' + error.constructor.name);
      if (error instanceof ReferenceError) {
        console.log(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setUuid(commerce.uuid);
    fetchInfo();
    fetchComments();
    fetchEventos();
    fetchBanners();

  }, [commerce]);

  useEffect(()=>{
    fetchComments();
  }, [reloadComments]);

  return (
    <View style={styles.containerForm}>
      <Carousel images={banners}/>
      {infoCep && (
        <View style={styles.Infos}>
          <Infos commerce={commerce} info={info} endereco={infoCep} />
        </View>
      )}

      {placeAvaliacoes && (
        <FlatList
          extraData={placeAvaliacoes}
          refreshing={reloadComments}
          onRefresh={ReloadComments}
          refreshControl={
            <RefreshControl size={'default'} refreshing={reloadComments} onRefresh={ReloadComments} />
          }
          ListHeaderComponent={
            <>
              <View style={styles.tagsContainer}>
                <TagsCommerce />
              </View>
              <Menu />
              <Events eventos={eventos}/>
              <CommentHeader
                Length={placeAvaliacoes.length}
                stars={commerce.nota}
                uuid={uuid}
                reload={ReloadComments}
              />
            </>
          }
          data={placeAvaliacoes}
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
  titleRating: {
    fontSize: 22,
    marginTop: 16,
    color: '#000',
    textAlign: 'center',
  },
  rate: {
    alignItems: 'flex-end',
    right: 15,
    top: 16,
    position: 'absolute',
  },
  rating: {
    alignItems: 'center',
    marginBottom: '3%',
  },
});
