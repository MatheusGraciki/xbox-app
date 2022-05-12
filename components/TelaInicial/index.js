import React from 'react';
import { View, Image, Text, Pressable } from 'react-native';

import imgFundo from '../../assets/logo.png';
import imgConsole from '../../assets/console-1.png';
import imgJogo from '../../assets/jogo-1.png';
import imgXcloud from '../../assets/xcloud-1.png';
import styles from './styles';
import { StatusBar } from 'expo-status-bar';

export default function TelaInicial (props) {
  return (
   
    <View style={ styles.container }>
       <StatusBar hidden={true}/>
      <Image source={ imgFundo } style={ styles.img } />
      <Text style={ styles.titulo }>Xbox</Text>
      <Text style={ styles.descricao }>Xbox é uma marca de consoles criada pela Microsoft. Toque nos cards para conhecer.</Text>

      <Pressable
        onPress={ () => { props.navigation.navigate("Consoles") } }
        style={styles.card}
      >
        <Image source={ imgConsole } style={ styles.cardImg } />
        <Text style={ styles.cardTexto}>Conheça os consoles</Text>
      </Pressable>

      <Pressable
        onPress={ () => { props.navigation.navigate("Jogos") } }
        style={styles.card}
      >
        <Image source={ imgJogo } style={ styles.cardImg } />
        <Text style={ styles.cardTexto}>Conheça os jogos</Text>
      </Pressable>

      <Pressable
        onPress={ () => { props.navigation.navigate("Nuvem") } }
        style={styles.card}
      >
        <Image source={ imgXcloud } style={ styles.cardImg } />
        <Text style={ styles.cardTexto}>Conheça o xCloud</Text>
      </Pressable>
    </View>
  )
}