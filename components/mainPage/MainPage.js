import React, {useState} from 'react';
import { Button, StyleSheet, Text, View, Switch} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import axios from 'axios';


export default function MainPage({navigation}) {


    const [news, setNews] = useState()
    const [value, setValue] = useState('');
    const apiKey = '5205778383d44f128dba9905d4942acd';
    const apiUrl = 'https://news-api-v2.herokuapp.com';
  
    async function getNews(){
      try{
        await axios.get(`${apiUrl}/everything?&language=ru&q=${value}&apiKey=${apiKey}`)
        .then ((el) => {
          setNews(el.data.articles);
          console.log(value)
          navigation.navigate('news', el.data.articles)
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
                onChangeText={setValue}
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
