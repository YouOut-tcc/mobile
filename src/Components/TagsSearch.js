import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Text, TouchableOpacity, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const TagsCommerce = () => {
  const [tags, setTags] = useState([
    'Restaurante',
    'Café',
    'Loja',
    'Bar',
    'Música ao vivo',
    'Eventos',
    'Baladas',
    'Drinks',
    'Almoço',
    'Jantar',
  ]);
  const [selectedTags, setSelectedTags] = useState([]);

  const toggleTag = tag => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(selectedTag => selectedTag !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const isTagSelected = tag => selectedTags.includes(tag);

  const orderedTags = [...selectedTags, ...tags.filter(tag => !selectedTags.includes(tag))];

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}>
        {orderedTags.map((tag, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.item, isTagSelected(tag) && styles.selectedItem]}
            onPress={() => toggleTag(tag)}>
            <View style={styles.tagContainer}>
              <Icon name={'hashtag'} size={13} color="#FE0472" style={styles.tagIcon} />
              <Text style={styles.tagtxt}>{tag}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,

  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  item: {
    width: 140,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 10,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#808080',
    borderRadius: 20,
    margin: 10,
    height: 40,
    backgroundColor: '#EDE0D6',
    
  },
  selectedItem: {
    borderColor: '#8200A8',
    borderWidth: 3,
  },
  tagContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tagIcon: {
    marginRight: 5,
  },
  tagtxt: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default TagsCommerce;
