import React from 'react'
import { Text, View, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { image500 } from '../api/apiRequest'
import { useNavigation } from '@react-navigation/native'

const MovieCard = ({ item }) => {
  const navigator = useNavigation()
    return (
        <TouchableWithoutFeedback
        onPress={() => navigator.navigate('Movie', item.item.id) }>
              <Image source={{ uri: image500(item.item.poster_path) }} style={style.image} key={item.id}/>
        </TouchableWithoutFeedback>
        

    )
}

const style = StyleSheet.create({
  image: { 
    width: 250, 
    height: 450,
    borderRadius: 20,
  },
})

export default MovieCard