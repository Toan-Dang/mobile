import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Block} from 'react-native-block';
const Phone = () => {
  const {width: W, height: H} = Dimensions.get('window');

  const onPress = () => {};
  const Phone = [
    {
      image:
        'https://raw.githubusercontent.com/AboutReact/sampleresource/master/input_username.png',
      text: 'hmu',
    },
    {image: '', text: ''},
    {image: '', text: ''},
    {image: '', text: ''},
    {image: '', text: ''},
    {image: '', text: ''},
    {image: '', text: ''},
    {image: '', text: ''},
    {image: '', text: ''},
    {image: '', text: ''},
  ];

  const Laptop = [
    {
      image:
        'https://raw.githubusercontent.com/AboutReact/sampleresource/master/input_username.png',
      text: '',
    },
    {image: '', text: ''},
    {image: '', text: ''},
    {image: '', text: ''},
    {image: '', text: ''},
    {image: '', text: ''},
    {image: '', text: ''},
    {image: '', text: ''},
    {image: '', text: ''},
    {image: '', text: ''},
  ];
  return (
    <View style={styles.container}>
      <View>
        <Block row>
          <Block style={styles.blockLeft}>
            <Text style={styles.text}>Điện thoại nổi bật</Text>
          </Block>
          <Block>
            <TouchableOpacity style={styles.button} onPress={onPress}>
              <Text style={styles.text}>Xem thêm</Text>
            </TouchableOpacity>
          </Block>
        </Block>

        <ScrollView
          horizontal
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          // contentContainerStyle={{paddingVertical: 20}}
        >
          <FlatList
            scrollEnabled={false}
            contentContainerStyle={{alignSelf: 'flex-start'}}
            numColumns={Math.ceil(Phone.length / 2)}
            keyExtractor={(item, index) => index.toString()}
            data={Phone}
            renderItem={({item}) => (
              <View style={[styles.list, {width: W * 0.4, height: H * 0.39}]}>
                <Image
                  source={{
                    uri: item.image,
                  }}
                  style={[styles.image, {width: W * 0.22, height: H * 0.2}]}
                />
                <Text style={styles.text_name}>{item.text}</Text>
              </View>
            )}
          />
        </ScrollView>
      </View>


      <View>
        <Block row>
          <Block style={styles.blockLeft}>
            <Text style={styles.text}>Laptop nổi bật</Text>
          </Block>
          <Block>
            <TouchableOpacity style={styles.button} onPress={onPress}>
              <Text style={styles.text}>Xem thêm</Text>
            </TouchableOpacity>
          </Block>
        </Block>

        <ScrollView
          horizontal
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          // contentContainerStyle={{paddingVertical: 20}}
        >
          <FlatList
            scrollEnabled={false}
            contentContainerStyle={{alignSelf: 'flex-start'}}
            numColumns={Math.ceil(Laptop.length / 2)}
            keyExtractor={(item, index) => index.toString()}
            data={Laptop}
            renderItem={({item}) => (
              <View style={[styles.list, {width: W * 0.4, height: H * 0.39}]}>
                <Image
                  source={{
                    uri: item.image,
                  }}
                  style={[styles.image, {width: W * 0.22, height: H * 0.2}]}
                />
                <Text style={styles.text_name}>{item.text}</Text>
              </View>
            )}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default Phone;

const styles = StyleSheet.create({
  container: {},
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {},
  list: {
    backgroundColor: 'red',
    margin: 5,
    borderRadius: 15,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  image: {
    top: -20,
  },
  text_name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  blockLeft: {
    width: '75%',
  },
});
