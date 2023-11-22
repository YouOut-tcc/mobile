import MapView, {Marker, Polygon, Polyline, Callout} from 'react-native-maps';
import {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function MapMarker({
  index,
  selectedMarker,
  setSelectedMarker,
  element,
  scrollToCard,
  scrollToMarker,
}) {
  let selected = selectedMarker == element.uuid;
  return (
    <Marker
      style={{
        zIndex: selected ? 1 : 0,
      }}
      coordinate={{
        latitude: element.coordenadas.x,
        longitude: element.coordenadas.y,
      }}
      key={element.uuid}
      onPress={() => {
        console.log('começo');
        // console.log(index)
        // setSelected(true);
          const t0 = performance.now();
          setSelectedMarker(element.uuid);
          // setSelectedPlace(element);
          scrollToCard(element, index);
          // scrollToMarker(element);
          const t1 = performance.now();
          console.log(t1 - t0);
      }}>
      <Icon
        name="map-marker"
        size={40}
        color={selected ? '#FE0472' : '#8200A8'}
      />
    </Marker>
  );
}
