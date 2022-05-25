import { RFValue } from 'react-native-responsive-fontsize';
import { StyleSheet } from 'react-native'



const styles = StyleSheet.create({
    container: {
        
        flex:1,
        justifyContent:'center',
        alignItems:'center',
            
    },
    titulo: {
       
        fontSize:RFValue(26),
        fontWeight: "bold",
        color: '#107c0f',
        marginBottom: '2.5%',
        textAlign: 'center'
    },
    subtitulo: {
        
        
        textAlign: "center",
        paddingHorizontal: 20,

        fontSize:RFValue(16),
        fontWeight:'700'
      

      
    },
    descricao: {
        fontWeight: '100',
        textAlign: "center",
        alignItems:'center',
        marginBottom: '5%',
        fontSize:RFValue(14),
        padding:'3%' ,
    },
    xboxImage:{
        width:100,
        height:100,
        resizeMode:'cover',
       

    }
})

export default styles