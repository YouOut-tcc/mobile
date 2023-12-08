import * as React from 'react';
import { Avatar } from 'react-native-paper';
import defaultIcon from '../../assets/commerceLogo.png';

const AvatarCommerce = ({image}) => {
  console.log(image);
  return <Avatar.Image size={125}  source={image? { uri: image}:defaultIcon} />
};
export default AvatarCommerce