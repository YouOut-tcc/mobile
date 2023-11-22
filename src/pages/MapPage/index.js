import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  ActivityIndicator,
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  Animated,
  PermissionsAndroid,
} from 'react-native';
import MapView, {Polygon, Polyline, Callout, AnimatedRegion} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {useIsFocused} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Marker from '../../Components/mapMarker';

import { pesquisarPlace, handleSearchError } from '../../services/user';
import {getPlaces} from '../../services/commerce';
import CardCommerce from '../../Components/CartCommerce/Cart';
import SearchBar from '../../Components/searchBar';

const {width, height} = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0522;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const CARD_HEIGHT = 170;
const CARD_WIDTH = width * 0.8;
const CARD_MARGIN_PEAK = CARD_WIDTH * 0.05;
const CARD_PEAK = (width - (CARD_WIDTH + CARD_MARGIN_PEAK * 2)) / 2;

const SPACING_FOR_CARD_INSET = CARD_MARGIN_PEAK + CARD_PEAK;

export default function App() {
  const [granted, setGranted] = useState(false);
  const [location, setLocation] = useState(null);
  const [centerRegion, setcenterRegion] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [data, setData] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const _scrollView = useRef(null);
  const [searchQuery, setSearchQuery] = useState('');
  const mapRef = useRef(null);

  const scrollToMarker = element => {
    console.log("aqui mapa")
    mapRef.current.animateToRegion({
      latitude: element.coordenadas.x,
      longitude: element.coordenadas.y,
      // latitudeDelta: LATITUDE_DELTA,
      // longitudeDelta: LONGITUDE_DELTA,
    }
    );
  };

  const scrollToCard = (element, index) => {
    if (_scrollView.current) {
      _scrollView.current.scrollTo({
        x: index * (CARD_WIDTH + CARD_MARGIN_PEAK),
        animated: true,
      });
    }
  };


  let provider = undefined;

  let mapIndex = 0;
  let mapAnimation = new Animated.Value(0);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      let places = await getPlaces(page, 13, 13);

      console.log(data);
      setData(data.concat(places));
      setPage(page + 1);
    } catch (error) {
      console.log(error.constructor.name);
      if (error instanceof ReferenceError) {
        console.log(error.message);
      } else if (error instanceof TypeError) {
        console.log(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };
  
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('foi2');
        Geolocation.getCurrentPosition(
          info => {
            console.log('entrou2');
            setLocation({
              latitude: info.coords.latitude,
              longitude: info.coords.longitude,
            });
            console.log(location);
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

  useEffect(() => {
    requestCameraPermission();
    fetchData();
    console.log('data map: ');
    console.log(data);
    console.log('why?');
  }, []);

  const handleSearchChange = async (query) => {
    setSearchQuery(query);
    try {
      const filteredList = await pesquisarPlace(query);
      setData(filteredList);
      console.log(filteredList)
    } catch (error) {
      console.error('Erro ao realizar pesquisa:', error);
    }
  };
  
  
  const focusOnMarker = (element) => {
    
    if (mapRef.current) {
      mapRef.current.animateToRegion({
        latitude: element.coordenadas.x,
        longitude: element.coordenadas.y,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      });
    }
  };

  return (
    <>
      <View style={styles.searchBox}>
        <SearchBar style={styles.search} 
        onSearchChange={handleSearchChange}/>
      </View>
      <View style={styles.container}>
        {!location && <ActivityIndicator size="large" />}
        {location && (
          <>
            <MapView
              ref={mapRef}
              showsMyLocationButton={true}
              provider={provider}
              style={styles.map}
              keyExtractor={item => item.uuid}
              initialRegion={{
                latitude: location.latitude,
                longitude: location.longitude,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
              }}
              showsUserLocation={true}>
              {data &&
                data.map((element, index) => (
                  <Marker key={index} index={index} selectedMarker={selectedMarker} setSelectedMarker={setSelectedMarker} element={element} scrollToCard={scrollToCard} scrollToMarker={scrollToMarker}/>
                ))}
            </MapView>
            <Animated.ScrollView
              ref={_scrollView}
              horizontal
              pagingEnabled
              scrollEventThrottle={1}
              showsHorizontalScrollIndicator={false}
              snapToAlignment="center"
              style={styles.scrollView}
              contentContainerStyle={{
                paddingHorizontal:
                  Platform.OS === 'android' ? SPACING_FOR_CARD_INSET : 0,
              }}
        //       onScrollEndDrag={
        //         (teste)=>{
        //           console.log("aqui mapa");
        //         // Animated.event(
        //         // [
        //         //   {
        //         //     nativeEvent: {
        //         //       contentOffset: {
        //         //         x: mapAnimation,
        //         //       },
        //         //     },
        //         //   },
        //         // ],
        //         // {useNativeDriver: true},
        // // )
        //         }}
        onMomentumScrollEnd={e => {
          console.log(e.nativeEvent.contentOffset.x / (CARD_WIDTH + CARD_MARGIN_PEAK)+0.1)
          console.log("aqui")
          const index = Math.floor(
            e.nativeEvent.contentOffset.x / (CARD_WIDTH + CARD_MARGIN_PEAK)+0.1,
          );
          console.log(data[index])
          setSelectedMarker(data[index].uuid);
          scrollToMarker(data[index])

        }}
              // onMomentumScrollEnd={e => {
              //   console.log("aqui")
              //   const index = Math.floor(
              //     e.nativeEvent.contentOffset.x / CARD_WIDTH,
              //   );
              //   setSelectedMarker(data[index].uuid);
              // }}
              >
              {data.map((element, index) => (
                <View key={element.uuid} style={styles.card}>
                  <CardCommerce commerce={element} />
                </View>
              ))}
            </Animated.ScrollView>
          </>
        )}
        <View style={styles.eventList}></View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  card: {
    width: '100%',
  },
  bubble: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 6,
    borderColor: '#ccc',
    borderWidth: 0.5,
    padding: 15,
    width: 150,
  },
  // Arrow below the bubble
  arrow: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#fff',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#007a87',
    borderWidth: 16,

    alignSelf: 'center',
    marginTop: -0.5,
    // marginBottom: -15
  },
  // Character name
  name: {
    fontSize: 16,
    marginBottom: 5,
  },
  searchBox: {
    marginTop: Platform.OS === 'ios' ? 40 : 10,
    alignContent: 'center',
    flexDirection: 'row',
    width: '100%',
    minHeight: '20%',
    alignSelf: 'center',
    borderRadius: 5,
    padding: 10,
    position: 'absolute',
    zIndex: 1,
  },
  scrollView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  endPadding: {
    paddingRight: width - CARD_WIDTH,
  },
  card: {
    // flexDirection: 'row',
    // textAlign: 'center',
    // alignItems: 'center',
    alignItems: 'center',
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    marginRight: CARD_MARGIN_PEAK,
  },
  cardImage: {
    flex: 3,
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  textContent: {
    flex: 2,
    padding: 10,
  },
  cardtitle: {
    fontSize: 12,
    // marginTop: 5,
    fontWeight: 'bold',
  },
  cardDescription: {
    fontSize: 12,
    color: '#444',
  },
  markerWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
  },
  marker: {
    width: 30,
    height: 30,
  },
  button: {
    alignItems: 'center',
    marginTop: 5,
  },
});
