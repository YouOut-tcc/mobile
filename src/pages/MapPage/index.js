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
import * as SecureStore from 'expo-secure-store';
import {AxiosError} from 'axios';
import api from '../../apis/backend';

const {width, height} = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default function App() {
  const [granted, setGranted] = useState(false);
  const [location, setLocation] = useState(null);
  const [page, setPage] = useState(0);
  const [data, setData] = useState([]);

  const mapRef = useRef(null);

  let provider = undefined;

  const fetchData = async () => {
    let userToken;
    try {
      userToken = await SecureStore.getItemAsync('userToken');
      let res = await api.get(
        `/estabelecimento/places?page=${page}&latitute=13&longitude=43`,
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        },
      );
      const newData = res.data;

      setData(newData);
      console.log(newData);
    } catch (err) {
      console.log(err.constructor.name);
      if (err instanceof AxiosError) {
        console.log(err.response.status);
        console.log(err.response.data.message);
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
    console.log("data map: ")
    console.log(data)
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
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}
          showsUserLocation={true}>
          {data && data.map(element=>(
            
            <Marker
            coordinate={{
              latitude: element.coordenadas[0],
              longitude: element.coordenadas[1],
              
            }}
              key= {element.uuid}
              title= {element.nome}>
            <Image
              source={require('../../assets/pin.png')}
              style={{width: 26, height: 28}}
              // resizeMode="contain"
            />
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
});
