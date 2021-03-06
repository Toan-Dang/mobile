import React, {useEffect} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import PushNotification from 'react-native-push-notification';
import GlobalStyle from '../utils/GlobalStyle';

export default function Splash({navigation}) {
  useEffect(() => {
    createChannels();
    setTimeout(() => {
      navigation.replace('Login');
    }, 500);
  }, []);

  const createChannels = () => {
    PushNotification.createChannel({
      channelId: 'task-channel',
      channelName: 'Task Channel',
    });
  };

  return (
    <View style={styles.body}>
      <Image
        style={styles.logo}
        source={require('../../assets/GoTech.vn.png')}
      />
      <Text style={[GlobalStyle.CustomFontBig, styles.text]}>Zerone</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  logo: {
    width: 150,
    height: 150,
    margin: 20,
  },
  text: {
    fontSize: 40,
    color: '#ffffff',
  },
});
