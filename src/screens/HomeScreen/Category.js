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

const Category = () => {
  const Phone = [
    {
      image:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAXVBMVEX///8ODg4AAAAKCgrX19d9fX3h4eH7+/sqKiqsrKx0dHS8vLzu7u5OTk62trbIyMhhYWGGhoaTk5MzMzNDQ0MeHh5mZmajo6Nubm6dnZ05OTlJSUlYWFhTU1MYGBgojUx6AAAD40lEQVR4nO3c25aiMBAFUClAQZCLtxYv/f+fOYBoC0N69QzHlSJ99jMPOZKkQogsFkREREREREREREREREREREREREREREREv0wQh6HtNrxRvpZaZLsZb5NEIr7n+Z+2G/ImwU7Ea8jOdlPeo+zy1Qk3ttvyDunuka9O6OJMs5SvgJ582G4O3rKZYL4SBrbbA5f2Avpiuz140UsXdXIYhr2ADnbSYBDQvRXNbpAwsd0gtGQQ0L0FTeT6KMwHAd2bSNf9SuHeNLMYFPvUdnvgeqXCl6Xt9uDFrytuFwPWT4UvY9C9Llorno+9Ds6irWu3cSF75+pg5yp+s7t2zW035G1O8rkPMycHoIuCrCrDcJt9M+CWcbg51J32XJTZzCpH+rGRL0W2Grkmafe7xa/dLwvnMzjzJt7r0kXkOGh9UIr0FnD3y6qxn0KdfCf954d7efCr5/yyinfDeM+Q+ncWV8VIvq71l7gebGlyFMMl7VWR8gGZmxvf3Mg78xXtRbHtEN+pRjvfP5LSdgyz8Pvb8+OIapesoIB1xK3tKOMqVMA6osrSmOAC1tONwsKYIiaZR0CVJWMD7KNH22HGAPuo0mqB66NKJ9IP2C1Uegdxt1ButqOMg41CX2OZaNxgqxmVpb6phaiAhe0oBjEsodZduCMooZxsJzFBzaRqXwgvQbfQP9hOYoKqFUpXMwvcg6HWUjF8Nz8hodJqD3tw8j3bQYwOmKlULraDGIGKhc4H3xYq4dp2ECPnVzSwhIp7KSjh3nYQI9A4VHzg20ctvNVW/LPzq7ar8ytv1DsnvadNYS+d1B5WhO0lat0Nhj3jK55NcQm1vt9GlQu9I7HEJVQ6nSJfHursp7BdfU/tP0pB+xj3iCrPROEGYhOxsh1nRI5MqHM7A3jUxNN52uQEvYmeSKltdYPtpm1GbY9S2G7qKdwfhs6mbcLMdqQB3PPFI6G2gbi4gOcafRUDefjS0/nC+xM518jZdpwRsCMnbUKV3yEAFgylZxaAN1FdqejARqLWJ33grqLa7X1QTVT88S/Qwkbrhltji4io7qmiJ5oeUe00cwfop5r7aGPyoX2V+1A9E498Kz6u8LCatHibxRdrgik3UW+tfzVhfar2FenAf7/Xl6vtpv+U8ex++/kE4/GbGcwyT8VIxPbbEIfLbRPJX99TmF3AkYPRdajT8+seaftNjOEVWv8vYxAPvoyxH25LZOdeRtFf6YeWt64rNr0zHFuJBaeuuzZXFMrXaqOCsP1OxGFt3FVaJeG5uWRTzTFfa5XOYIlCREREREREREREREREREREREREREREREREREREv8wfYtwnsICuGUcAAAAASUVORK5CYII=',
    },
    {image: 'https://rubicmarketing.com/wp-content/uploads/2021/11/y-nghia-logo-cua-samsung.jpg'},
    {image: ''},
    {image: ''},
    {image: ''},
    {image: ''},
    {image: ''},
    {image: ''},
    {image: ''},
    {image: ''},
    {image: ''},
  ];

  const Laptop = [
    {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSSiIdK34nYo6fd7ZCl9fPn8naIJZG5Y7uNg&usqp=CAU',
    },
    {image: ''},
    {image: ''},
    {image: ''},
    {image: ''},
    {image: ''},
    {image: ''},
    {image: ''},
    {image: ''},
    {image: ''},
    {image: ''},
  ];

  const {width: W, height: H} = Dimensions.get('window');
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Danh mục sản phẩm</Text>
      <Text style={styles.textphone}>Điện thoại</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        horizontal
        keyExtractor={(item, index) => index.toString()}
        data={Phone}
        renderItem={({item}) => (
          <Image
            source={{
              uri: item.image,
            }}
            style={styles.image}
          />
        )}
      />
      <Text style={styles.textphone}>Lap top</Text>

      <FlatList
        horizontal
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        data={Laptop}
        renderItem={({item}) => (
          <Image
            source={{
              uri: item.image,
            }}
            style={styles.image}
          />
        )}
      />
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  textphone: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  image: {
    backgroundColor: 'red',
    height: 50,
    width: 50,
    marginHorizontal: 10,
  },
});
