import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const StarRating = ({ stars }) => {
  const [rating, setRating] = useState(stars);

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <TouchableOpacity key={i} onPress={() => handleRatingPress(i)}>
          <Icon name={i <= rating ? 'star' : 'star-o'} size={18} color="#FE0472" />
        </TouchableOpacity>
      );
    }
    return stars;
  };

  const handleRatingPress = (selectedRating) => {
    setRating(selectedRating);
   
  };

  return <View style={{ flexDirection: 'row' }}>{renderStars()}</View>;
};

export default StarRating;
