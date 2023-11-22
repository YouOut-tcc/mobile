import {useState, useEffect} from 'react';
import {
  View,
  KeyboardAvoidingView,
  Platform,
  Text,
  PermissionsAndroid,
  ActivityIndicator,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './style';
import LogoYO from '../../Components/LogoYouOut';
import Commerce from '../../Components/CartCommerce';
import SearchbarComponent from '../../Components/searchBar';
import consts from '../../Components/CartCommerce/consts';
import {sessionStorage} from '../../helpers/storage';
import {getPlaces} from '../../services/commerce';

import Geolocation from '@react-native-community/geolocation';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {useFocusEffect} from '@react-navigation/native';
import { Alert } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import usePushNotification from '../../hooks/notifications';


function Vazio({isLoading}) {
  // {!isLoading && <Text style={styles.textNot}>Não há estabelecimento cadastrados...</Text>}
  // return(
  //   <>
  //   <Text style={styles.textNot}>Não há estabelecimento cadastrados...</Text>;
  //   </>
  // )
  // mudar a messagem.
  // {isLoading && <ActivityIndicator size="large" />}
  return (
    <>
      {/* {!isLoading && <Text style={styles.textNot}>Não há estabelecimento cadastrados...</Text>} */}
      <Text style={styles.textNot}>Não há estabelecimento cadastrados...</Text>
    </>
  );
}

export default function HomePage() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [location, setLocation] = useState(undefined);
  const [isFocused, SetIsFocused] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCommerceList, setFilteredCommerceList] = useState([]);

  // const isFocused = useIsFocused();
  const navigate = useNavigation();

  const {
    requestUserPermission,
    getFCMToken,
    listenToBackgroundNotifications,
    listenToForegroundNotifications,
    onNotificationOpenedAppFromBackground,
    onNotificationOpenedAppFromQuit,
  } = usePushNotification();

  const fetchData = async () => {
    try {
      setIsLoading(true);
      let places = await getPlaces(page, 13, 13);

      setData(data.concat(places));
      setPage(page + 1);
    } catch (error) {
      console.log(error.constructor.name);
      if (error instanceof ReferenceError) {
        console.log(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  // fazer uma lib para isso?
  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        // console.log('foi');
        Geolocation.getCurrentPosition(
          info => {
            // console.log(info)
            // console.log("entrou")
            setLocation({
              latitude: info.coords.latitude,
              longitude: info.coords.longitude,
            });
          },
          () => {},
          {enableHighAccuracy: true},
        );
      } else {
        console.log('negado');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const handleSearchChange = filteredList => {
    setFilteredCommerceList(filteredList);
  };

  // no momento o app precisa saber a localização do usuario com o gps
  // caso o usuario não permita o uso do gps, sera nessesario base a localização via ip

  // o aplicativo não vai funfionar bem caso o usuario esteja em movimento,
  // não tenho a mimina ideia de como resolver isso kk

  useEffect(() => {

    requestLocationPermission();
    navigate.addListener('focus', ()=>{
      if(isFocused){
        console.log("focus");
        // setPage(0);
        fetchData();
        SetIsFocused(false);
        console.log(page);
      }
    })
    // console.log('called');
    // if (!isFocused) {
    //   console.log('vapo');
    //   return;
    // }
    // requestLocationPermission();
    // fetchData();
    // console.log('why?');

  }, []);


  useEffect(() => {
    const listenToNotifications = () => {
      try {
        getFCMToken();
        requestUserPermission();
        onNotificationOpenedAppFromQuit();
        listenToBackgroundNotifications();
        listenToForegroundNotifications();
        onNotificationOpenedAppFromBackground();
      } catch (error) {
        console.log(error);
      }
    };

    listenToNotifications();
  }, []);

  return (
    <View style={styles.container}>
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
          {!location && <ActivityIndicator size="large" />}
          {location && (
            <Commerce
              Empty={<Vazio isLoading={isLoading} />}
              Data={data}
              isLoading={isLoading}
              fetchData={fetchData}
            />
          )}
        </View>
      </View>
    </View>
  );
}
