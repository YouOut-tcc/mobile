import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet,ActivityIndicator, View, Text, Dimensions, ScrollView, PermissionsAndroid} from 'react-native';
import MapView, {Marker, Polygon, Polyline, Callout} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

  
const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default function App() {
  const [granted, setGranted] = useState(false);
  const [location, setLocation] = useState(null);

  const mapRef = useRef(null);

  let provider = undefined;

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('foi');
        Geolocation.getCurrentPosition(info => {
          console.log("entrou")
          setLocation({latitude: info.coords.latitude, longitude: info.coords.longitude})
          console.log(location)
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
  }, []);

  return (
    <View style={styles.container}>
        {! location && <ActivityIndicator size="large" />}
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
