import AsyncStorage from '@react-native-async-storage/async-storage';
import CheckBox from '@react-native-community/checkbox';
import React, {useEffect, useState, useRef} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Alert,
  SafeAreaView,
  ScrollView,
  Animated,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useDispatch, useSelector} from 'react-redux';
import {setTaskID, setTasks} from '../../redux/actions';
import GlobalStyle from '../../utils/GlobalStyle';
import List from '../../navigation/List';
import SearchBar from './SearchBar';
import {Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SliderBox} from 'react-native-image-slider-box';
import HotSales from './HotSales';
import AdSlider from './AdSlider';
import Category from './Category';
import Phone from './Phone';
import {Block} from 'react-native-block';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import axios from 'axios';

export default function Home({navigation}) {
  const [searchPhrase, setSearchPhrase] = useState('');
  const [clicked, setClicked] = useState(false);
  const [fakeData, setFakeData] = useState();
  const [heightScroll, setHeightScroll] = useState(0);

  const ScrollY = new Animated.Value(0);
  //const diffCamp = Animated.diffClamp(ScrollY, 0, 0);
  const translateY = ScrollY.interpolate({
    inputRange: [0, 0],
    outputRange: [0, 0],
  });
  // get data from the fake api endpoint
  useEffect(() => {
    const getData = async () => {
      const apiResponse = await fetch(
        'https://my-json-server.typicode.com/kevintomas1995/logRocket_searchBar/languages',
      );
      const data = await apiResponse.json();
      setFakeData(data);
    };
    getData();
  }, []);
  const images = [
    'https://source.unsplash.com/1024x768/?nature',
    'https://source.unsplash.com/1024x768/?water',
    'https://source.unsplash.com/1024x768/?girl',
    'https://source.unsplash.com/1024x768/?tree', // Network image
    // require('./assets/images/girl.jpg'), // Local image
  ];
  const {width: W, height: H} = Dimensions.get('window');

  const HeaderSroll = () => {
    console.log('heightScroll', heightScroll);
    return (
      <Animated.View
        style={{
          transform: [{translateY: translateY}],
          elevation: 4,
          backgroundColor: '#192f6a',
          // zIndex: 100,
        }}>
        <Block row>
          <Block style={{width: '30%'}}>
            <Text style={{textAlign: 'center', color: '#fff', fontSize: 20}}>GoTechVN</Text>
          </Block>
          <Block style={{width: '70%'}}>
            <SearchBar
              searchPhrase={searchPhrase}
              setSearchPhrase={setSearchPhrase}
              clicked={clicked}
              setClicked={setClicked}
            />
          </Block>
        </Block>
      </Animated.View>
    );
  };

  const handeleScroll = (e) => {
    // console.log(parseInt(e.nativeEvent.contentOffset.y, 10));
    setHeightScroll(parseInt(e.nativeEvent.contentOffset.y, 10));
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}}>
        {heightScroll > 300 && <HeaderSroll />}
        <ScrollView onScroll={handeleScroll}>
          <LinearGradient
            colors={['#192f6a', '#192f6a']}
            style={{
              height: H * 0.315,
              width: W,
              backgroundColor: 'red',
              top: -50,
              borderBottomLeftRadius: 60,
              borderBottomRightRadius: 60,
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
            }}>
            <View style={styles.textlogoandcart}>
              <Text style={styles.textlogo}>GoTechVN</Text>
              <Icon
                name="shopping-cart"
                size={30}
                color="blue"
                style={styles.cart}></Icon>
            </View>
            <SearchBar
              style={styles.SearchBar}
              searchPhrase={searchPhrase}
              setSearchPhrase={setSearchPhrase}
              clicked={clicked}
              setClicked={setClicked}
            />
          </LinearGradient>

          <AdSlider></AdSlider>
          <HotSales></HotSales>
          <Category></Category>
          <Phone></Phone>
          <Text>hmu</Text>
          <Text>hmu</Text>
          <Text>hmu</Text>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>

    /* {heightScroll === 0 && <Block></Block>}

      */
  );
}
const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
    //top: 5,
    //flex: 2,
  },
  title: {
    width: '100%',
    marginTop: 20,
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: '10%',
  },
  textlogoandcart: {
    alignSelf: 'flex-start',
    width: '100%',
    left: 10,
  },
  textlogo: {
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontSize: 25,
    fontStyle: 'italic',
  },
  cart: {
    position: 'absolute',
    right: 20,
    backgroundColor: '#4c669fee',
    padding: 8,
    borderRadius: 10,
    top: -10,
  },
});
