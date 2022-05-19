import { StyleSheet, PixelRatio } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  container: {
    
    flex: 1 ,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#2c2e2d',
    padding: '1%',
    
  },
  img: {
    width: '23%',
    height: '11%',
    borderRadius: 50,
    marginBottom: '5%',
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

  card: {
    width: '75%',
    alignItems: "center",
    backgroundColor: '#107c0f',
    flexDirection: "row",
    borderRadius: 15,
    paddingVertical: '9%',
    paddingHorizontal: '4%',
    marginBottom: '5%',
  },
  
  cardImg: {
    width: '26%',
    height: '140%',
    borderRadius: 25,
    marginTop: '10%',
    marginBottom: '10%',
    marginRight: '5%',
  },
  cardTexto: {
    fontSize:RFValue(17),
    color: '#fff',
    textAlign: "left",
    width: '59%',
  },
});

export default styles;