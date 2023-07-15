import * as React from 'react';
import { StyleSheet } from "react-native";
import { Searchbar } from 'react-native-paper';

const searchBar = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Searchbar
      placeholder="Busque por estabelecimentos"
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={styles.search}
    />
  );
};

export default searchBar;


const styles = StyleSheet.create({
    search:{
        margin: '2%',
        position: 'absolute',
        backgroundColor: '#EDE0D6',
        borderWidth: 2,
        borderColor: "#8200A8",
    }
   
  });
  