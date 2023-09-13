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
    // alignContent: 'center',
    // alignItems: 'center',
  },
  touchableArea: {
    flex: 1,
  },
  containerSearch:{
   marginBottom: '17%',
   margin: '4%',
   alignContent: 'center',
   alignItems: 'center',

  },
  containerPlace:{
    // width: "100%",
    // height: '100%',
    // backgroundColor: "#fff",

    // alignContent: 'center',
    alignItems: 'center',
  },
  textNot:{
    textAlign: 'center',
    margin: '10%'
  }
  
  
});

export default styles;
