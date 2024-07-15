import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Feather} from '@expo/vector-icons'
import { TextInput } from 'react-native-gesture-handler';

const SearchBar = () => {
  return (
    <View style={styles.backgroundStyle}>
        <Feather name="search" size={30}/>
      <TextInput style={styles.inputStyle} placeholder='Search'/>
    </View>
  );
};

const styles = StyleSheet.create({
    backgroundStyle:{
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row'
    },
    inputStyle:{
        borderColor: 'black',
        borderWidth: 1,
        flex: 1
    }
});

export default SearchBar;