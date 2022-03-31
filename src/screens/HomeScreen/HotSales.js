import Icon from 'react-native-vector-icons/FontAwesome5';

import React, {useState, useRef} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  FlatList,
  RefreshControl,
} from 'react-native';

const HotSales = () => {
  const {width: W, height: H} = Dimensions.get('window');

  const [Items, setItems] = useState([
    {
      name: 'Item 1',
      image:
        'https://raw.githubusercontent.com/AboutReact/sampleresource/master/input_username.png',
      detail: 'detail',
      hot: 'hot',
    },
    {name: 'Item 2', image: '', detail: '', hot: ''},
    {name: 'Item 3', image: '', detail: '', hot: ''},
    {name: 'Item 4', image: '', detail: '', hot: ''},
    {name: 'Item 5', image: '', detail: '', hot: ''},
    {name: 'Item 6', image: '', detail: '', hot: ''},
    {name: 'Item 7', image: '', detail: '', hot: ''},
    {name: 'Item 8', image: '', detail: '', hot: ''},
    {name: 'Item 9', image: '', detail: '', hot: ''},
    {name: 'Item 27', image: '', detail: '', hot: ''},
    {name: 'Item 78', image: '', detail: '', hot: ''},
  ]);

  return (
    <View style={[styles.container, {width: W * 0.92, height: H * 0.37}]}>
      <Text style={styles.text}>HOTSALE</Text>
      <Icon name="bolt" size={50} color="#fbff00" style={styles.icon}></Icon>
      <Text style={styles.textsecond}>Cuối tuần</Text>
      <View style={[styles.list, {width: W * 0.85, height: H * 0.24}]}>
        <FlatList
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          horizontal
          keyExtractor={(item, index) => index.toString()}
          data={Items}
          renderItem={({item}) => (
            <View style={[styles.item, {width: W * 0.35}]}>
              <Image
                source={{
                  uri: item.image,
                }}
                style={styles.imagepro}
              />
              <Text style={styles.namepro}>{item.name}</Text>
              <Text>{item.detail}</Text>
              <Text>{item.hot}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default HotSales;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    marginTop: -80,
    borderRadius: 15,
    alignItems: 'center',
    alignSelf: 'center',
    flex: 2,
  },
  text: {
    alignSelf: 'flex-start',
    color: '#fbff00',
    fontSize: 25,
    margin: 10,
  },
  textsecond: {
    alignSelf: 'flex-start',
    color: '#fff',
    fontSize: 20,
    margin: 5,
    top: -70,
    right: -50,
  },
  icon: {
    top: -45,
    right: 10,
  },
  item: {
    // margin: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    borderRadius: 15,
  },
  list: {
    // backgroundColor: '#000',
    top: -55,
  },
  imagepro: {
    backgroundColor: 'red',
    height: 80,
    width: 65,
    top: -10,
  },
});
