import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#8200A8',
  },
  containerLogo: {
    flex: 0.15,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignSelf: 'center',
    width: 90,
    // height: 350,
    marginTop: '5%',
    borderRadius: 50,
    marginBottom: '5%',
  },
  containerForm: {
    flex: 1,
    backgroundColor: '#EDE0D6',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignContent: 'center',
    alignItems: 'center',
  },
  touchableArea: {
    flex: 1,
  },
  // containerSearch:{
  //  marginBottom: '17%',
  //  margin: '4%',
  //  alignContent: 'center',
  //  alignItems: 'center',

  // },
  containerPlace:{
    width: "100%",
    height: '100%',
    alignContent: 'center',
    alignItems: 'center',
  },
  textFavorite: {
    color: '#333',
    fontSize: 20,
    alignSelf: 'center',
    marginTop: '2%',
    fontWeight: 'bold',
  },
  textFavorite2: {
    color: '#333',
    fontSize: 15,
    textAlign: 'center',
    margin: '5%',
  },
  heart: {
    alignSelf: 'center',
    marginTop: '50%',
  },
  
  
});

export default styles;