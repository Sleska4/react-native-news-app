import React, {useState} from 'react';
import { Button, StyleSheet, Text, View, Switch} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import axios from 'axios';


export default function MainPage() {


    const [news, setNews] = useState([])
    const apiKey = '5205778383d44f128dba9905d4942acd';
    const apiUrl = 'https://news-api-v2.herokuapp.com';
    const input = 'test'
  
    async function getNews(){
      try{
        await axios.get(`${apiUrl}/everything?&language=ru&q=${input}&apiKey=${apiKey}`)
        .then ((el) => {
          console.log(el)
        })
      } catch(err){
        console.log(err)
      }
    }

  return (
    <View style={styles.flex}>
        <Text style={styles.h1}>Поиск новостей</Text>
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Введите запрос: "
            />

        </View>
        <View style={styles.btn}>
            <Button
                title="Learn More"
                color="purple"
                onPress={() => getNews()}
            />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    flex: {
        flex: 1,
        justifyContent: 'space-between'
    },
    h1: {
        fontSize: 34,
        textAlign: 'center',
        marginTop: 20,
        fontStyle: 'italic',
    },
    input: {
        borderBottomWidth: 1,
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 50
    },
    container: {
        marginTop: 50,
        flex: 1,
        justifyContent: "flex-start"
    },
    btn: {
        width: '100%',
    }
});
