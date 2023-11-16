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
  scrollViewContent: {
    width: "100%",
  },
  message: {
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: '5%',
    flexDirection: 'row',
    marginBottom: 12,
    color: '#000',
  },
});

export default styles;
