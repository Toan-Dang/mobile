import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TextInput,
  Pressable,
} from 'react-native';
import Logo from '../../../assets/067nhl7x7fljb28rulvkfzs-1-1569470817-fit-lim-size-768x432-600x315-removebg-preview.png';
import React, {useContext, useState} from 'react';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomLogoLogin from './CustomLogoLogin';
import Icon from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';
import {AuthContext} from '../../context/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import {Block} from 'react-native-block';
const SignIn = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [hidePass, setHidePass] = useState(true);

  const windowHeight = Dimensions.get('window').height;
  const {isLoading, login} = useContext(AuthContext);

  const onSignInPressed = async () => {
    await login(username, password);

    //navigation.navigate('home');
  };
  const onSignUp = () => {
    navigation.navigate('register');
  };
  const onForgotPasswordPressed = () => {
    navigation.navigate('forgot');
  };
  const onSignInFacebook = () => {
    console.warn('onSignInFacebookPressed');
  };
  const onSignInGoogle = () => {
    console.warn('onSignInGooglekPressed');
  };

  return (
    <View style={styles.root}>
      <Spinner visible={isLoading}></Spinner>
      <CustomLogoLogin></CustomLogoLogin>
      <View style={styles.sectionStyle}>
        <Icon name="user" size={25} style={{margin: 10}} />
        <Text>|</Text>
        <TextInput
          style={{flex: 1}}
          placeholder="Nhập username"
          underlineColorAndroid="transparent"
          onChangeText={(username) => {
            setUsername(username);
          }}
        />
      </View>
      <View style={styles.sectionStyle}>
        <Icon name="key" size={25} style={{margin: 10}} />
        <Text>|</Text>
        <TextInput
          style={{flex: 1}}
          placeholder="Nhập mật khẩu"
          underlineColorAndroid="transparent"
          autoCompleteType="password"
          keyboardType="default"
          onChangeText={(pass) => {
            setPassword(pass);
          }}
          secureTextEntry={hidePass ? true : false}></TextInput>
        <Text>|</Text>
        <Icon
          name={hidePass ? 'eye-slash' : 'eye'}
          size={15}
          color="black"
          onPress={() => setHidePass(!hidePass)}
          style={{margin: 10}}
        />
      </View>

      <Pressable onPress={onSignInPressed} style={styles.signinbutton}>
        <Text style={styles.signintext}>Đăng nhập</Text>
      </Pressable>

      <Pressable
        onPress={onForgotPasswordPressed}
        style={styles.container_TERTIARY}>
        <Text style={styles.text_TERTIARY}>Quên mật khẩu ?</Text>
      </Pressable>

      {/* <View style={styles.contrainer_ThirdLogin}>
        <View style = {styles.facebook}>
          <Pressable onPress={onSignInFacebook}>
            <Icon name="facebook" size={30} style={{margin: 10}} color="blue" />
          </Pressable>
        </View>
        <View style = {styles.google}>
          <Pressable onPress={onSignInGoogle}>
            <Icon name="google" size={25} style={{margin: 10}} color="orange" />
          </Pressable>
        </View>
      </View> */}
      <Block row>
        <Block style={styles.facebook} center>
          <Pressable onPress={onSignInFacebook}>
            <Icon name="facebook" size={30} style={{margin: 10}} color="blue" />
          </Pressable>
        </Block>
        <Block style={{width: '10%', backgroundColor: null}}></Block>
        <Block style={styles.facebook} center>
          <Pressable onPress={onSignInGoogle}>
            <Icon name="google" size={25} style={{margin: 10}} color="orange" />
          </Pressable>
        </Block>
      </Block>
      <Block row style={{marginTop: 10}}>
        <Block center>
          <Text style={styles.question}>Chưa có tài khoản?</Text>
        </Block>
        <Block center>
          <Pressable onPress={onSignUp} style={styles.contrainer_Signup}>
            <Text style={[styles.signuptext, {color: '#023E8A'}]}>Đăng ký</Text>
          </Pressable>
        </Block>
      </Block>

      <Image
        source={Logo}
        style={[styles.logo, {height: windowHeight * 0.3}]}
        resizeMode="contain"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#023d8a15',
    flex: 1,
  },
  logo: {
    width: '100%',
    maxWidth: 500,
    maxHeight: 300,
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
  Showpass: {
    resizeMode: 'stretch',
    alignItems: 'flex-end',
  },
  signinbutton: {
    padding: 12,
    marginTop: 10,
    borderRadius: 10,
    width: '75%',
    backgroundColor: '#023E8A',
    alignItems: 'center',
  },
  signintext: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  signuptext: {
    fontSize: 18,
    textDecorationLine: 'underline',
    top: -2,
    left: -8,
  },
  question: {
    color: '#000',
    fontSize: 18,
    bottom: -15,
  },
  container_TERTIARY: {
    marginBottom: 10,
    borderRadius: 10,
    alignSelf: 'flex-end',
    padding: 5,
    top: -1,
  },
  text_TERTIARY: {
    fontSize: 18,
    color: 'hsla(214, 97%, 27%, 0.603)',
    textDecorationLine: 'underline',
  },
  contrainer_ThirdLogin: {
    marginVertical: 5,
    width: '100%',
    padding: 10,

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#fff',
    height: 50,
    borderRadius: 15,
    margin: 10,
  },
  facebook: {
    width: '45%',

    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#fff',
    height: 48,
    borderRadius: 10,
  },

  text_ThirdLogin: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontSize: 15,
  },

  contrainer_Signup: {
    width: '100%',
    alignItems: 'center',
    padding: 12,
    marginTop: 5,
    borderRadius: 10,
  },
});
export default SignIn;
