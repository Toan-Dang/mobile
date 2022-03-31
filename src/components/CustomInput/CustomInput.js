import {View, Text, TextInput, StyleSheet, Image} from 'react-native';
import React from 'react';

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <View style={styles.sectionStyle}>
        <Image
          source={{
            uri:
              'https://raw.githubusercontent.com/AboutReact/sampleresource/master/input_username.png',
          }}
          style={styles.imageStyle}
        />
        <TextInput
          placeholder={placeholder}
          style={styles.input}
          value={value}
          onChangeText={setValue}
          secureTextEntry={secureTextEntry}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: '100%',
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
   sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 40,
    borderRadius: 5,
    margin: 10,
  },
  imageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  input: {},
});
export default CustomInput;
