import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {
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
      title: 'Notificação 3',
      description: 'Esta é a descrição da notificação 3.',
    },
    {
      id: 6,
      title: 'Notificação 4',
      description: 'Esta é a descrição da notificação 4.',
    },
    {
      id: 7,
      title: 'Notificação 3',
      description: 'Esta é a descrição da notificação 3.',
    },
    {
      id: 8,
      title: 'Notificação 4',
      description: 'Esta é a descrição da notificação 4.',
    },
    {
      id: 9,
      title: 'Notificação 3',
      description: 'Esta é a descrição da notificação 3.',
    },
    {
      id: 10,
      title: 'Notificação 4',
      description: 'Esta é a descrição da notificação 4.',
    },
  ];

  const [showAll, setShowAll] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.notificationContainer}>
        {showAll
          ? notifications.map(notification => (
              <TouchableOpacity
                key={notification.id}
                style={styles.cardContainer}>
                <Text style={styles.title}>{notification.title}</Text>
                <Text style={styles.desc}>{notification.description}</Text>
              </TouchableOpacity>
            ))
          : notifications.slice(0, 2).map(notification => (
              <TouchableOpacity
                key={notification.id}
                style={styles.cardContainer}>
                <Text style={styles.title}>{notification.title}</Text>
                <Text style={styles.desc}>{notification.description}</Text>
              </TouchableOpacity>
            ))}
      </ScrollView>
      {showAll ? (
        <TouchableOpacity
          onPress={() => setShowAll(false)}
          style={styles.showLessButton}>
          <Text style={styles.showLessText}>Exibir menos</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => setShowAll(true)}
          style={styles.showAllButton}>
          <Text style={styles.showAllText}>
            Exibir todos ({notifications.length})
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  notificationContainer: {
    maxHeight: '85%',
  },
  cardContainer: {
    borderColor: '#000',
    borderWidth: 1,
    margin: '2%',
    borderRadius: 15,
    alignSelf: 'auto',
    width: '95%',
  },
  title: {
    fontSize: 15,
    color: '#000',
    margin: '2%',
    fontWeight: 'bold',
  },
  desc: {
    fontSize: 14,
    color: '#000',
    margin: '2%',
  },
  showAllButton: {
    margin: '2%',
    alignItems: 'flex-end',
  },
  showAllText: {
    color: '#FE0472',
    fontSize: 16,
  },
  showLessButton: {
    margin: '2%',
    alignItems: 'flex-end',
  },
  showLessText: {
    color: '#FE0472',
    fontSize: 16,
  },
});
