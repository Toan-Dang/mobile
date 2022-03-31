import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import React from 'react';
import Logo from '../../../assets/275939484_3114955498770911_5262670797489653472_n.png';
const CustomLogoLogin = () => {
  const {width: W, height: H} = Dimensions.get('window');
  return (
    <View style={{height: H * 0.21}}>
      <Image source={Logo} style={{height: H * 0.21}} resizeMode="contain" />
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 45,
    marginTop: 10,
    color: '#023E8A',
  },
});
export default CustomLogoLogin;
