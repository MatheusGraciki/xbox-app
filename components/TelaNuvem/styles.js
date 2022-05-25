import { RFValue } from 'react-native-responsive-fontsize';
import { StyleSheet } from 'react-native'



const styles = StyleSheet.create({
    container: {
        
        flex:0.75,
        padding:'7%'
        
     
        
        
        
    },
    titulo: {
       
        fontSize:RFValue(26),
        fontWeight: "bold",
        color: '#107c0f',
        marginBottom: '3%',
        textAlign: 'center'
    },
      subtitulo: {
       
        color: '#b2b2b2',
        fontWeight: 'bold',
        textAlign: "center",
        width: '99.92%',
        marginBottom: '5%',
        paddingHorizontal: 10,
        fontSize:RFValue(19)
    },
    imageBackground: {
        flex:1,
        resizeMode:'cover',
        justifyContent:'center',
        alignItems: 'center',
        alignSelf:'center'
    },
    imageForeground:{
        marginTop:'7%',
        width: '90%',
        height: '45%', 
       
        alignSelf:'center',
        justifyContent:'center',
        resizeMode:'contain',
      
        

    },
    descricao: { 
        
        color: '#b2b2b2',
        textAlign: 'center',
        
        paddingHorizontal: 10,
        
        marginTop: '5%',
        fontSize: RFValue(17),
    },

})

    export default styles