import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const StarRating = ({ stars, clickable = false, onRatingPress, starSize = 18, uuid }) => {
  const handleRatingPress = (selectedRating) => {
    if (clickable && onRatingPress) {
      onRatingPress(selectedRating);
    }
  };
  
  const renderStars = () => {
    const starsElements = [];
    for (let i = 1; i <= 5; i++) {
      starsElements.push(
        <TouchableOpacity
          key={i}
          onPress={() => handleRatingPress(i)}
          disabled={!clickable} 
        >
          <Icon
            name={i <= stars ? 'star' : 'star-o'}
            size={starSize}
            color="#FE0472"
            style={{ marginRight: 5 }}
          />
        </TouchableOpacity>
      );
    }
    return starsElements;
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      {renderStars()}
    </View>
  );
};

export default StarRating;
