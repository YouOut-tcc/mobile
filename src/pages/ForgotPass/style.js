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
    width: '30%',
    height: '30%',
    marginTop: '5%',
    borderRadius: 300,
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
  recTextTitle:{
    fontSize: 20,
    marginTop: '10%',
    color: '#8200A8',
  },
  recText:{
    fontSize: 15,
    // marginTop: '10%',
    color: '#8200A8',
  }
});

export default styles;
