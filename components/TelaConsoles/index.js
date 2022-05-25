import React from 'react';
import { View, Image, Text, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native';
import styles from './styles';


import XboxSeriesS from '../../assets/XboxSeriesS.png'
import XboxSeriesX from '../../assets/XboxSeriesX.png'


export default function TelaConsole() {
  return (
   
      <SafeAreaView style={styles.container}>
        
          <Image source={XboxSeriesS} style={styles.xboxImage}
          />
          <Text style={styles.titulo}>
            XBOX SERIES S
          </Text>

          <Text style={styles.subtitulo}>
            Desempenho de última geração no menor Xbox de todos os tempos.
          </Text>

          <Text style={styles.descricao}>
          O Series S é pra quem busca jogos de nova geração gastando pouco. é o console mais barato da nova geração. Ele é o equilibrio entre gráfico e performance.
          </Text>

          <Image source={XboxSeriesX} style={styles.xboxImage}
          />

          <Text style={styles.titulo}>
            XBOX SERIES X
          </Text>

          <Text style={styles.subtitulo}>
            O Xbox mais rápido e poderoso de todos os tempos.
          </Text>

          <Text style={styles.descricao}>
            O Series X é pra quem quer poder absoluto. O console mais poderoso do mercado, excelência em gráficos e performance.
          </Text>
        
      </SafeAreaView>
        
    
  )
}