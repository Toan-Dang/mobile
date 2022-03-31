import React from 'react';
import {StyleSheet, TextInput, View, Keyboard, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
const SearchBar = ({clicked, searchPhrase, setSearchPhrase, setClicked}) => {
  return (
    <View style={styles.container}>
      <View
        style={
          clicked ? styles.searchBar__clicked : styles.searchBar__unclicked
        }>  
        {/* search Icon */}
        <Icon name="search" size={20} color="black" style={{marginLeft: 1}} />
        {/* Input field */}
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          onFocus={() => {
            setClicked(true);
          }}
        />
        {/* cross Icon, depending on whether the search bar is clicked or not */}
        {clicked && (
          <Icon
            style={{right: 20}}
            name="backspace"
            size={25}
            color="black"
            onPress={() => {
              setSearchPhrase('');
            }}
          />
        )}
      </View>
      {/* cancel button, depending on whether the search bar is clicked or not */}
      {clicked && (
        <View >
          <Button
            style={styles.cancel}
            title="Cancel"
            onPress={() => {
              Keyboard.dismiss();
              setClicked(false);
            }}></Button>
        </View>
      )}
    </View>
  );
};
export default SearchBar;

// styles
const styles = StyleSheet.create({
  container: {
    top: 5,
    margin: 15,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '90%',
    height: 37,
  },
  searchBar__unclicked: {
    // padding: 10,
    flexDirection: 'row',
    width: '95%',
    backgroundColor: '#d9dbda',
    borderRadius: 15,
    alignItems: 'center',
    paddingLeft: 10,
  },
  searchBar__clicked: {
    // padding: 10,
    flexDirection: 'row',
    width: '80%',
    backgroundColor: '#d9dbda',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingLeft: 10,
  },
  input: {
    fontSize: 15,
    width: '90%',
    paddingLeft: 20,
    alignSelf: 'center'
  },
  cancel: {
    color: '#fff',
    width: 10,
    backgroundColor: null,
    borderColor: null,
  },
});
