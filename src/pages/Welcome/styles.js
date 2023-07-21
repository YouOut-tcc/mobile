
import {
    StyleSheet,
    
    
} from 'react-native';


const styles = StyleSheet.create({
    
    container: {
      flex: 1,
      backgroundColor: '#8200A8'
    },
    containerLogo:{
        flex: 0.25,
        justifyContent: "space-between",
        flexDirection: "row",
        backgroundColor: '#8200A8',
        alignSelf: 'center',
        width: '38%',
        height: '50%',
        marginTop: '5%',  
        borderRadius: 300,
        marginBottom: '5%',    
    },
    containerForm:{
        flex: 1,
        backgroundColor: '#EDE0D6', 
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        alignContent: 'center',
        alignItems: 'center',
    },
    title:{
        fontSize: 50,
        color: '#000',
        fontWeight: 'bold',
        marginTop: '25%',
        marginBottom:12,
        
    },
    text:{
        color: '#000',
        fontSize: 15,
    },
    textend:{
        color: '#000',
        fontSize: 20,
        alignItems: 'flex-end',
        marginTop:'50%'        
    },
    
});
  
  export default styles;
