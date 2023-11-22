import Swipeable from 'react-native-gesture-handler/Swipeable';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';

export default function CardNotification({id, title, description, swipeOpen, swipeClose, rightSwipeActions}) {
  return (
    <Swipeable
      onSwipeableOpen={swipeOpen}
      onSwipeableClose={swipeClose}
      // renderLeftActions={LeftSwipeActions}
      renderRightActions={rightSwipeActions}
      key={id}>
      <TouchableOpacity style={styles.cardContainer} key={id}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desc}>{description}</Text>
      </TouchableOpacity>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  cardContainer: {
    borderColor: '#000',
    borderWidth: 1,
    margin: 10,
    borderRadius: 15,
    padding: 10,
  },
  title: {
    fontSize: 15,
    color: '#000',
    fontWeight: 'bold',
  },
  desc: {
    fontSize: 14,
    color: '#000',
    marginTop: 5,
  },
  toggleButton: {
    margin: 10,
    alignItems: 'flex-end',
  },
  toggleButtonText: {
    color: '#FE0472',
    fontSize: 16,
  },
});
