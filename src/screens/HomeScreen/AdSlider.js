import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {SliderBox} from 'react-native-image-slider-box';
const AdSlider = () => {
  const images = [
    'https://source.unsplash.com/1024x768/?nature',
    'https://source.unsplash.com/1024x768/?water',
    'https://source.unsplash.com/1024x768/?girl',
    'https://source.unsplash.com/1024x768/?tree', // Network image
    // require('./assets/images/girl.jpg'), // Local image
  ];
  return (
    <View style={{top: -110}}>
      <SliderBox
        images={images}
        sliderBoxHeight={160}
        dotColor="#000"
        inactiveDotColor="#90A4AE"
        autoplay
        circleLoop
        ImageComponentStyle={{borderRadius: 15, width: '92%'}}
        paginationBoxStyle={{
          position: 'absolute',
          bottom: -25,
          padding: 0,
          alignItems: 'center',
          alignSelf: 'center',
          justifyContent: 'center',
          paddingVertical: 5,
        }}
        dotStyle={{
          width: 12,
          height: 12,
          borderRadius: 25,
          marginHorizontal: -5,
          padding: 0,
          margin: 0,
        }}
      />
    </View>
  );
};

export default AdSlider;
