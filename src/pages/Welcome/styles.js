
import {
    StyleSheet,
    
} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ED9B40'
    },
    containerLogo:{
        flex: 0.7,
        justifyContent: "space-between",
        flexDirection: "row",
        backgroundColor: '#ED9B40',
        justifyContent: 'center',
        alignItems: 'flex-start',
    
    },
    containerForm:{
        flex: 1,
        backgroundColor: '#fff', 
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        alignContent: 'center',
        alignItems: 'center',
        paddingStart: '5%',
        paddingEnd: '5%'

    },
    title:{
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: '20%',
        flexDirection: "row",
        marginBottom:12,
    },
    text:{
        color: '#a1a1a1',
        fontSize: 20,
    },
    textend:{
        color: '#a1a1a1',
        fontSize: 20,
        alignItems: 'center',
        marginTop:'25%'        
    },
});
  
  export default styles;
