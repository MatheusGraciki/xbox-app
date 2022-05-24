import React from 'react';
import { View, Image, Text, Pressable } from 'react-native';
import { ImageBackground, SafeAreaView } from 'react-native';
import styles from './styles';
import imageForeground from '../../assets/xcloud-2.png'


export default function TelaNuvem() {
  return (
  
    
        <ImageBackground
          source={require('../../assets/fundo-xcloud.png')}
          style={styles.imageBackground}
        >
          <SafeAreaView style={styles.container}>

            <View>
              <Text style={styles.titulo}>
                Xbox Cloud Gaming
              </Text>
              <Text style={styles.subtitulo}>
                Serviço de streaming de jogos
              </Text>
              <Text  style={styles.descricao}>
                {'Jogue mais de 100 jogos de console de alta qualidade no seu dispositivo favorito.\n\nDesktop, Notebook, console ou até mesmo celular pode se tornar um XBOX.\n\nAtravés de uma assinatura você terá um XBOX virtual sempre que precisar.'}
              </Text>

              <Image style={styles.imageForeground} source={imageForeground}
              />
            </View>

          
          </SafeAreaView>
        </ImageBackground> 
    
   
      
    
  )
}