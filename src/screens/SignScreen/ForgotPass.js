import React, {useContext, useState} from 'react';
import {
  Button,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  Pressable,
} from 'react-native';
import {Block} from 'react-native-block';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {AuthContext} from '../../context/AuthContext';

const ForgotPass = ({navigation}) => {
  const [email, setEmail] = useState(null);
  const {isLoading, register} = useContext(AuthContext);
  return (
    <View style={styles.root}>
      <Spinner visible={isLoading}></Spinner>
      <Block style={styles.block}>
        <View style={styles.sectionStyle}>
          <Icon name="sms" size={25} style={{margin: 10}} />
          <Text>|</Text>
          <TextInput
            style={{flex: 1}}
            placeholder="Nhập email"
            underlineColorAndroid="transparent"
            onChangeText={(email) => {
              setEmail(email);
            }}
          />
        </View>
        <View>
          <Pressable style={styles.sendEmailButton}>
            <Text style={styles.mailtext}>Gui email </Text>
          </Pressable>
        </View>
      </Block>
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#023d8a1a',
    flex: 1,
  },

  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000',
    height: 55,
    borderRadius: 10,
    margin: 5,
  },
  imageStyle: {
    padding: 10,
    margin: 10,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  block: {
    justifyContent: 'center',
    alignItems: 'center',

    flex: 1,
  },
  sendEmailButton: {
    padding: 12,
    marginTop: 10,
    borderRadius: 10,
    width: '75%',
    backgroundColor: '#023E8A',
    alignItems: 'center',
  },
  mailtext: {
    color: '#fff',
  },
});
export default ForgotPass;
