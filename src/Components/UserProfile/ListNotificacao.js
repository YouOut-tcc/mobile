import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

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
  {
    id: 4,
    title: 'Notificação 2',
    description: 'Esta é a descrição da notificação 2.',
  },
  {
    id: 5,
    title: 'Notificação 2',
    description: 'Esta é a descrição da notificação 2.',
  },
  {
    id: 6,
    title: 'Notificação 2',
    description: 'Esta é a descrição da notificação 2.',
  },
  {
    id: 7,
    title: 'Notificação 2',
    description: 'Esta é a descrição da notificação 2.',
  },
  {
    id: 8,
    title: 'Notificação 2',
    description: 'Esta é a descrição da notificação 2.',
  },
  {
    id: 9,
    title: 'Notificação 2',
    description: 'Esta é a descrição da notificação 2.',
  },
];

export default function CardNotificacao() {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [showAll, setShowAll] = useState(false);

  const swipeOpen = (direction, index, id) => {
    console.log(`Swipe from ${direction}`);
    let newNotifications = [...notifications];
    delete newNotifications[index];
    setNotifications(newNotifications);
  };
  const swipeClose = (direction, item) => {
    console.log(`Swipe close ${direction}`);
    // console.log(item)
  };
  const LeftSwipeActions = () => {
    return (
      <View
        style={{flex: 1, backgroundColor: '#ccffbd', justifyContent: 'center'}}>
        <Text
          style={{
            color: '#40394a',
            paddingHorizontal: 10,
            fontWeight: '600',
            paddingHorizontal: 30,
            paddingVertical: 20,
          }}>
          Bookmark
        </Text>
      </View>
    );
  };
  const rightSwipeActions = direction => {
    // console.log(direction)
    return (
      <View
        style={{
          backgroundColor: '#ff8303',
          justifyContent: 'center',
          alignItems: 'flex-end',
        }}>
        <Text
          style={{
            color: '#1b1a17',
            paddingHorizontal: 10,
            fontWeight: '600',
            paddingHorizontal: 30,
            paddingVertical: 20,
          }}>
          Delete
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {notifications &&
          notifications
            .slice(0, showAll ? notifications.length : 2)
            .map((item, index) => {
              if (item != undefined) {
                return (
                  <Swipeable
                    onSwipeableOpen={direction => {
                      swipeOpen(direction, index, item.id);
                    }}
                    onSwipeableClose={swipeClose}
                    // renderLeftActions={LeftSwipeActions}
                    renderRightActions={rightSwipeActions}
                    key={item.id}>
                    <TouchableOpacity
                      style={styles.cardContainer}
                      key={item.id}>
                      <Text style={styles.title}>{item.title}</Text>
                      <Text style={styles.desc}>{item.description}</Text>
                    </TouchableOpacity>
                  </Swipeable>
                );
              }
            })}

        {notifications.length > 2 && (
          <TouchableOpacity
            onPress={() => setShowAll(!showAll)}
            style={styles.toggleButton}>
            <Text style={styles.toggleButtonText}>
              {showAll
                ? 'Exibir menos'
                : `Exibir todas (${notifications.length})`}
            </Text>
          </TouchableOpacity>
        )}
      </ScrollView>
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
