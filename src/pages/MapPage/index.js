import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, View, Text, Dimensions, ScrollView, PermissionsAndroid} from 'react-native';
import MapView, {Marker, Polygon, Polyline, Callout} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

import PriceMarker from './PriceMarker';

const {width, height} = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
let id = 0;

export default function App() {
  const [granted, setGranted] = useState(false);
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);

  const mapRef = useRef(null);

  let provider = undefined;

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('foi');
        Geolocation.getCurrentPosition(info => {
          setLocation({latitude: info.coords.latitude, longitude: info.coords.longitude})
        },()=>{},
        {enableHighAccuracy: true}
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
    // Geolocation.requestAuthorization(()=>{
    //   Geolocation.getCurrentPosition(info => console.log(info));
    //   const locationSubscription = Geolocation.watchPosition(
    //     position => {
    //       console.log(position);
  
    //       const {latitude, longitude} = position.coords;
    //       setLocation({latitude, location});
    //       console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
          
    //     },
    //     error => {
    //       console.error(`Erro ao obter a localização: ${error.message}`);
    //     },
    //     {enableHighAccuracy: true, distanceFilter: 100, interval:2,timeout:10},
    //   );
    // });

    // Geolocation.getCurrentPosition(info => console.log(info));
  }, []);

  return (
    <View style={styles.container}>
        { location &&
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
      </MapView>}
      <View style={styles.eventList}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  callout: {
    width: 60,
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  event: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 8,
  },
  eventData: {
    fontSize: 10,
    fontFamily: 'courier',
    color: '#555',
  },
  eventName: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#222',
  },
  eventList: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 1,
  },
  bubble: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  latlng: {
    width: 200,
    alignItems: 'stretch',
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
});
