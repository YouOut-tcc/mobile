import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  ActivityIndicator,
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  PermissionsAndroid,
} from 'react-native';
import MapView, {Marker, Polygon, Polyline, Callout} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {useIsFocused} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {getPlaces} from '../../services/commerce';
import CartInfo from '../../Components/CartCommerce/Cart';

const {width, height} = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default function App() {
  const [granted, setGranted] = useState(false);
  const [location, setLocation] = useState(null);
  const [page, setPage] = useState(0);
  const [data, setData] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null);

  const mapRef = useRef(null);

  let provider = undefined;

  const fetchData = async () => {
    try {
      let places = await getPlaces(page, 13, 13);

      setData(places);
    } catch (error) {
      console.log(error.constructor.name);
      if (error instanceof ReferenceError) {
        console.log(error.message);
      }
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

  return (
    <View style={styles.container}>
      {!location && <ActivityIndicator size="large" />}
      {location && (
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
                title={element.nome}
                onPress={() => {
                  setSelectedMarker(element.uuid);
                  setSelectedPlace(null);
                  setSelectedPlace(element);
                }}>
                <Icon
                  name="map-marker"
                  size={40}
                  color={
                    selectedMarker === element.uuid ? '#FE0472' : '#8200A8'
                  }
                />
          {selectedPlace && (
                       <Callout tooltip>
                       <View>
                         <View style={styles.bubble}>
                           <Text style={styles.name}>{element.nome}</Text>                          
                         </View>
                         <View style={styles.arrowBorder} />
                         <View style={styles.arrow} />
                       </View>
                     </Callout>
          )}
              </Marker>
            ))}

        </MapView>
      )}
      <View style={styles.eventList}></View>
    </View>
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
  card:{
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
});
