
import { RFValue } from 'react-native-responsive-fontsize';
import { StyleSheet } from 'react-native'



const styles = StyleSheet.create({
    container: {
    
        flex: 1,
        backgroundColor: '#121212',
        padding: '1%',
        
        
      },
      titulo: {
        marginTop:'4%',
        fontSize:RFValue(26),
        fontWeight: "bold",
        color: '#107c0f',
        marginBottom: '3%',
        textAlign: 'center'
      },
      subtitulo: {
       
        color: '#b2b2b2',
        textAlign: "center",
        width: '99.92%',
        marginBottom: '7%',
        paddingHorizontal: 10,
        fontSize:RFValue(15)
     
     
       
    
      },

      containerVideo:{
        marginTop:'20%',
        borderRadius: 5,
        borderColor:'#0A0909',
        borderWidth:10,
        backgroundColor: '#0A0909'
        
      },
    
      

      video:{
      width: "95%",
      aspectRatio: 10 / 7,
      alignSelf: 'center',
      justifyContent: 'center',
    
      
       
        
      },

      buttons:{
        width:10,
        height:10
      },

      tituloVideo:{

        color: '#b2b2b2',
        textAlign: "center",
        width: '90.92%',
        marginLeft:'4.5%',
        justifyContent:'center',      
        marginTop: '5%',
        alignContent: 'center',   
        padding:'2.5%',
        fontSize:RFValue(22),
        marginBottom: '3.5%',        
    

      },

      descricao: {
        
        color: '#b2b2b2',
        textAlign: "center",
        width: '100%',
        paddingHorizontal: 9,
        marginBottom:'2.5%',
        marginTop: '5%',
        alignContent: 'center',
        fontSize:RFValue(16),
      

      
      },

      descricao1: {
        
        color: '#b2b2b2',
        textAlign: "center",
        width: '99.92%',
        paddingHorizontal: 10,
        marginBottom:'2.5%',
        fontSize:RFValue(17)

      
      }
      
        
      
      

     
    

})

export default styles;