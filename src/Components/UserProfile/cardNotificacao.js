import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

export default function cardNotificacao() {
  const notifications = [
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
      title: 'Notificação 3',
      description: 'Esta é a descrição da notificação 3.',
    },
    {
      id: 4,
      title: 'Notificação 4',
      description: 'Esta é a descrição da notificação 4.',
    },
    {
      id: 5,
      title: 'Notificação 5',
      description: 'Esta é a descrição da notificação 3.',
    },
    {
      id: 6,
      title: 'Notificação 6',
      description: 'Esta é a descrição da notificação 4.',
    },
    {
      id: 7,
      title: 'Notificação 7',
      description: 'Esta é a descrição da notificação 3.',
    },
    {
      id: 8,
      title: 'Notificação 8',
      description: 'Esta é a descrição da notificação 4.',
    },
    {
      id: 9,
      title: 'Notificação 9',
      description: 'Esta é a descrição da notificação 3.',
    },
    {
      id: 10,
      title: 'Notificação 10',
      description: 'Esta é a descrição da notificação 4.',
    },
  ];

  const [showAll, setShowAll] = useState(false);

  const renderNotification = ({ item }) => (
    <TouchableOpacity style={styles.cardContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.desc}>{item.description}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.notificationContainer}
        data={showAll ? notifications : notifications.slice(0, 2)}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderNotification}
      />

      <TouchableOpacity
        onPress={() => setShowAll(!showAll)}
        style={styles.toggleButton}
      >
        <Text style={styles.toggleButtonText}>
          {showAll ? `Exibir menos` : `Exibir todos (${notifications.length})`}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  notificationContainer: {
    flex: 1,
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