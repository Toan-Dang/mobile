import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';

const CustomButton = ({onPress, text, type = 'PRIMARY', fgColor}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        styles[`contrainer_${type}`],
       
      ]}>
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          fgColor ? {color: fgColor} : {},
        ]}>
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    marginVertical: 5,
    borderRadius: 10,
  },
  contrainer_PRIMARY: {
    width: '75%',
    backgroundColor: '#023E8A',
    alignItems: 'center',
  },

  contrainer_TERTIARY: {
    alignSelf: 'flex-end',
    padding: 5,
  },
  contrainer_ThirdLogin: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#0000001e',
    padding: 10,
    backgroundColor: '#FFFFFF'
  },

  contrainer_Signup: {
    width: '100%',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontSize: 15
  },
  text_PRIMARY: {},
  text_TERTIARY: {
    color: '#023E8A',
    textDecorationLine: 'underline'
  },
  text_ThirdLogin: {
    textAlign: 'center',
  },
});
export default CustomButton;
