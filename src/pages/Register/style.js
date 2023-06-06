import {
    StyleSheet,
    
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
      },
      contentContainer: {
        flexGrow: 0.65,
        alignItems: 'center',
        justifyContent: 'center',
      },
      touchableArea: {
        flex: 1,
      },
      containerLogo: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
     
      },
      containerRegister: {
        alignItems: 'center',
      },
      or: {
        alignSelf: 'center',
        marginVertical: 10,
      },
      containerGoogle: {
        alignItems: 'center',
      },
})

export default styles;