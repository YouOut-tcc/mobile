import {
    StyleSheet,
    
} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    containerLogo:{
        flex: 0.2,
        justifyContent: "space-between",
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginBottom: '10%'
    },
    message:{
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: '20%',
        flexDirection: "row",
        marginBottom: 12,
    },
    text:{
        color: '#a1a1a1',
        fontSize: 20,
    },
})

export default styles;