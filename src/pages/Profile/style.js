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
    width: '90%',
    height: '20%',
    marginTop: '5%',
    borderRadius: 400,
    marginBottom: '5%',
    marginLeft: '5%',  
  },
  containerForm: {
    flex: 1,
    backgroundColor: '#EDE0D6',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    //alignContent: 'center',
   // alignItems: 'center',
    
  },
  touchableArea: {
    flex: 1,
  },
  
});

export default styles;
