import React from 'react';
import {StyleSheet, Text, View, FlatList, Image, TouchableWithoutFeedback} from 'react-native';


export default function MainPage({route}) {
    console.log(route.params)
  if(route.params.length){
  return (
    <View>
        <FlatList 
            data={route.params}
            keyExtractor={ (item, index) => index.toString() }
            renderItem={({ item }) => (    
            <TouchableWithoutFeedback>
                <View style={styles.card}>
                    <View style={styles.bg}>
                        <Image style={styles.height} source={{uri: item.urlToImage}} />
                    </View>
                    <View style={styles.title}>
                        <Text style={styles.h1}>{item.title}</Text>
                    </View>
                </View>    
            </TouchableWithoutFeedback>
            )}
        />
    </View>
  )} 
  return(
      <View>
          <Text>К сожалению, новостей новостей</Text>
      </View>
  )
}

const styles = StyleSheet.create({
    card: {
        marginHorizontal: 30,
        marginVertical: 20,
        borderWidth: 1
    },
    title: {
        padding: 10,
        backgroundColor: '#D0D0D0',
        maxHeight: 200
    },
    h1: {
        fontSize: 18,
    },
    height: {
        height: 200
    },
    bg: {
        backgroundColor: 'gray'
    }
});
