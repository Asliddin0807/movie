import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import React from 'react'
import { image342 } from '../api/apiRequest'

export const TopRatedMovie = ({ rated }) => {
  
  return (
    <View style={{ top: 30 }}>
        {/* <Text style={style.headerTitle}>{title}</Text> */}
        <ScrollView horizontal showsVerticalScrollIndicator={false} key={rated}
        scrollEnabled contentContainerStyle={{padding: 20}}>
          {rated.map((item, index) => (
            <View style={style.content} key={index}>
              <Image source={{ uri: image342(item.poster_path) }} style={style.image}/>
              <Text style={style.title}>{item.title.length > 18 ? item.title.slice(1, 12) + '...' : item.title}</Text>
              {/* <Text>{item.id}</Text> */}
            </View>
          ))}
        </ScrollView>
    </View>
  )
}

const style = StyleSheet.create({
  image: { 
    width: 250, 
    height: 300,
    borderRadius: 20,
  },

  content: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerTitle: {
    fontSize: 20,
    color: 'white',
    left: 18,
    top: 10,
  },

  title: {
    marginTop: 10,
    fontFamily: 'monospace',
    color: 'white'
  }

})