import { StyleSheet } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize';
const styles = StyleSheet.create({
    container: {
    
        flex: 1 ,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#3ce3b',
        padding: '1%',
      },
    titulo: {
        fontSize:RFValue(26),
        fontWeight: "bold",
        color: '#107c0f',
        marginBottom: '3%',
      },
      descricao: {
       
        color: '#b2b2b2',
        textAlign: "center",
        width: '93.92%',
        marginBottom: '7%',
     
       
    
      },

    video:{
        width:200,
        height:200,
        alignSelf: 'stretch'
    }
      

     
    

})

export default styles;