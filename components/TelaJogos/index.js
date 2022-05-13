import React from 'react';
import { View, Text, SafeAreaView,Button } from 'react-native'; 


import { Video, AVPlaybackStatus } from 'expo-av';
import styles from './styles';






export default function TelaJogos() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const CyberPunkVideo = require('../../assets/Cyberpunk.mp4');
  return (

    <View>
      <Video
        ref={video}
        source={CyberPunkVideo}
        style={styles.video}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />

      
    

 <View style={styles.buttons}>
        <Button
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
        />
      </View>
    </View>
  );
}
