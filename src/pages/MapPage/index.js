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
import MapView, {Marker, Polygon, Polyline, Callout} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {useIsFocused} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { pesquisarPlace, handleSearchError } from '../../services/user';
import {getPlaces} from '../../services/commerce';
import CardCommerce from '../../Components/CartCommerce/Cart';
import  SearchBar from '../../Components/searchBar';

const {width, height} = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const CARD_HEIGHT = 170;
const CARD_WIDTH = width * 0.8;
const CARD_MARGIN_PEAK = CARD_WIDTH * 0.05;
const CARD_PEAK = (width-(CARD_WIDTH+CARD_MARGIN_PEAK*2))/2;

const SPACING_FOR_CARD_INSET = CARD_MARGIN_PEAK + CARD_PEAK;

export default function App() {
  const [granted, setGranted] = useState(false);
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [data, setData] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const _scrolView = useRef(null);
  const [searchQuery, setSearchQuery] = useState('');

  const scrollToMarker = (element) => {
    mapRef.current.animateToRegion({
      latitude: element.coordenadas.x,
      longitude: element.coordenadas.y,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    });
  };

  const scrollToCard = (element) => {
    if (_scrolView.current) {
      const index = data.indexOf(element);
      if (index !== -1) {
        _scrollView.current.scrollTo({
          x: index * CARD_WIDTH,
          animated: true,
        });
      }
    }
  };

  const mapRef = useRef(null);
  const _scrollView = useRef(null);

  let provider = undefined;

  let mapIndex = 0;
  let mapAnimation = new Animated.Value(0);

  const fetchData = async () => {

    try {
      setIsLoading(true);
      let places = await getPlaces(page, 13 ,13);
      
      console.log(data)
      setData(data.concat(places));
      setPage(page + 1);

    } catch (error) {
      console.log(error.constructor.name)
      if (error instanceof ReferenceError) {
        console.log(error.message);
      } else if (error instanceof TypeError){
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
              data.map(element => (
                <Marker
                  coordinate={{
                    latitude: element.coordenadas.x,
                    longitude: element.coordenadas.y,
                  }}
                  key={element.uuid}
                  onPress={() => {
                    setSelectedMarker(element.uuid);
                    setSelectedPlace(null);
                    setSelectedPlace(element);
                    focusOnMarker(element);
                    scrollToCard(element); 
                    scrollToMarker(element); 
                  }}
                  zIndex={selectedMarker === element.uuid ? 1 : 0}>
                  <Icon
                    name="map-marker"
                    size={40}
                    color={
                      selectedMarker === element.uuid ? '#FE0472' : '#8200A8'
                    }
                  />
                 
                </Marker>
              ))}
          </MapView>
          
          <Animated.ScrollView
            ref={_scrollView}
            horizontal
            pagingEnabled
            scrollEventThrottle={1}
            showsHorizontalScrollIndicator={false}
            // snapToInterval={CARD_WIDTH }
            snapToAlignment="center"
            style={styles.scrollView}
            // contentInset={{
            //   top: 100,
            //   left: SPACING_FOR_CARD_INSET,
            //   bottom: 0,
            //   right: 0,
            // }}
            contentContainerStyle={{
              paddingHorizontal:
                Platform.OS === 'android' ? SPACING_FOR_CARD_INSET : 0,
            }}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {
                    contentOffset: {
                      x: mapAnimation,
                    },
                  },
                },
              ],
              {useNativeDriver: true},
            )}
            onMomentumScrollEnd={(e) => {
              const index = Math.floor(
                e.nativeEvent.contentOffset.x / CARD_WIDTH
              );
              setSelectedMarker(data[index].uuid);
            }}
            >
            {data.map(element => (
              <View key={element.uuid} style={styles.card}>
                <CardCommerce commerce={element}  />
              </View>
            ))}
            {/* {state.markers.map((marker, index) => (
              <View style={styles.card} key={index}>
                <Image
                  source={marker.image}
                  style={styles.cardImage}
                  resizeMode="cover"
                />
                <View style={styles.textContent}>
                  <Text numberOfLines={1} style={styles.cardtitle}>
                    {marker.title}
                  </Text>
                  <StarRating
                    ratings={marker.rating}
                    reviews={marker.reviews}
                  />
                  <Text numberOfLines={1} style={styles.cardDescription}>
                    {marker.description}
                  </Text>
                  <View style={styles.button}>
                    <TouchableOpacity
                      onPress={() => {}}
                      style={[
                        styles.signIn,
                        {
                          borderColor: '#FF6347',
                          borderWidth: 1,
                        },
                      ]}>
                      <Text
                        style={[
                          styles.textSign,
                          {
                            color: '#FF6347',
                          },
                        ]}>
                        Order Now
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))} */}
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
    flexDirection:"row",
    width: '100%',
    minHeight: '20%',
    alignSelf:'center',
    borderRadius: 5,
    padding: 10,
    position: 'absolute',
    zIndex: 1,
  },
  scrollView: {
    position: "absolute",
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
    width: "100%",
    height: "100%",
    alignSelf: "center",
  },
  textContent: {
    flex: 2,
    padding: 10,
  },
  cardtitle: {
    fontSize: 12,
    // marginTop: 5,
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: 12,
    color: "#444",
  },
  markerWrap: {
    alignItems: "center",
    justifyContent: "center",
    width:50,
    height:50,
  },
  marker: {
    width: 30,
    height: 30,
  },
  button: {
    alignItems: 'center',
    marginTop: 5
  },

});
