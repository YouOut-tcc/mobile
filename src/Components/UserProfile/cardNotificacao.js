import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function CardNotificacao() {
  const initialNotifications = [
    {
      id: 1,
      title: 'Notificação 1',
      description: 'Esta é a descrição da notificação 1.',
    },
    {
      id: 2,
      title: 'Notificação 2',
      description: 'Esta é a descrição da notificação 2.',
    },
    {
      id: 3,
      title: 'Notificação 2',
      description: 'Esta é a descrição da notificação 2.',
    },
   
  ];

  const [showAll, setShowAll] = useState(false);

  return (
    <View style={styles.container}>
      {initialNotifications.slice(0, showAll ? initialNotifications.length : 2).map((item) => (
        <TouchableOpacity style={styles.cardContainer} key={item.id}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.desc}>{item.description}</Text>
        </TouchableOpacity>
      ))}

      {initialNotifications.length > 2 && (
        <TouchableOpacity
          onPress={() => setShowAll(!showAll)}
          style={styles.toggleButton}
        >
          <Text style={styles.toggleButtonText}>
            {showAll ? 'Exibir menos' : `Exibir todas (${initialNotifications.length})`}
          </Text>
        </TouchableOpacity>
      )}
    </View>
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
