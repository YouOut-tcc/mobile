import * as React from 'react';
import { StyleSheet } from "react-native";
import { Searchbar } from 'react-native-paper';
import consts from './CommerceInfo/consts';

const SearchbarComponent = ({ commerceList, onSearchChange }) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => {
    setSearchQuery(query);
    const filteredList = consts.commerceList.filter(commerce =>
      commerce.name.toLowerCase().includes(query.toLowerCase())
    );
    console.log('filteredList:', filteredList);
    onSearchChange(filteredList);
  };

  return (
    <Searchbar
      placeholder="Busque por estabelecimentos"
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={styles.search}
    />
  );
};

export default SearchbarComponent;

const styles = StyleSheet.create({
  search: {
    margin: '2%',
    position: 'absolute',
    backgroundColor: '#EDE0D6',
    borderWidth: 2,
    borderColor: "#8200A8",
  }
});
