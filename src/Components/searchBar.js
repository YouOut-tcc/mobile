import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {Searchbar} from 'react-native-paper';
import consts from './CartCommerce/consts';
import TagsSearch from './TagsSearch';

const SearchbarComponent = ({commerceList, onSearchChange}) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => {
    setSearchQuery(query);
    console.log('filteredList:', query);
    onSearchChange(query);
  };

  return (
    <>
      <Searchbar
        placeholder="Busque por estabelecimentos"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.search}
      />
      <View style={styles.tags}>
        <TagsSearch />
      </View>
    </>
  );
};

export default SearchbarComponent;

const styles = StyleSheet.create({
  search: {
    position: 'absolute',
    backgroundColor: '#EDE0D6',
    borderWidth: 2,
    borderColor: '#8200A8',
    marginTop: '0%',
    width: '100%',
    margin: '2%',
    alignContent: 'center',
  },
  tags: {
    height: '60%',
    marginTop: '16%',
  },
});
