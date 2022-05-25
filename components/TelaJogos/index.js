import React from 'react';
import { View, Text, SafeAreaView, Button, Pressable } from 'react-native'; 
import styles from './styles';
import { Video} from 'expo-av';
import { ScrollView,} from 'react-native-gesture-handler';






export default function TelaJogos() {
  const video = React.useRef(null);
 
  const CyberPunkVideo = require('../../assets/trailers/Cyberpunk.mp4');
  const Forza5Video = require('../../assets/trailers/Forza5.mp4');
  const Halo5Video = require('../../assets/trailers//Halo5.mp4');
  return (
  
  <ScrollView style={styles.container}>
    <SafeAreaView>
      <Text style={ styles.titulo }>Jogos em 4k</Text>
      <Text style={ styles.subtitulo }>Os principais jogos estão aqui. Veja abaixo três exemplos de grande sucesso.</Text>
      
      <View >
        
        <View style={styles.containerVideo}>

        <Text style={ styles.tituloVideo }>
            Cyberpunk 2077
          </Text>
          
          <Video
          
            ref={video}
            source={CyberPunkVideo}
            style={styles.video}
            useNativeControls
            resizeMode='cover'
            
            
             />
        <Text style={ styles.descricao1 }>Cyberpunk 2077 é um jogo eletrônico de RPG de ação desenvolvido e publicado pela CD Projekt Red.
        </Text>

        </View>    
        
        
      <View style={styles.containerVideo}>

          <Text style={ styles.tituloVideo }>
            Forza Horizon 5 
          </Text>

          <Video
          
          ref={video}
          source={Forza5Video}
          style={styles.video}
          useNativeControls
          resizeMode='cover'
        
        
          
          />
          <Text style={ styles.descricao }>
            Forza Horizon 5 é um jogo de corrida. É o quinto jogo da série Forza Horizon e o décimo segundo título principal da franquia Forza. O jogo se passa em uma representação ficcional do México. 
          </Text>
      </View>    
        


     
      <View style={styles.containerVideo}>


          <Text style={ styles.tituloVideo }>
            Halo 5 
          </Text>

          <Video
                    
            ref={video}
            source={Halo5Video}
            style={styles.video}
            useNativeControls
            resizeMode='cover'


          />


       
          <Text style={ styles.descricao }>
            Halo 5 Guardians é um jogo de tiro em primeira pessoa, parte da franquia Halo e sequência de Halo 4.
          </Text>
      </View>  
      


        
      


        
      </View>
    </SafeAreaView>
  </ScrollView>  
  );
}
