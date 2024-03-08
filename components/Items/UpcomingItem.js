import { View, Text, StyleSheet, ScrollView, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { image185 } from '../api/apiRequest'
import { useNavigation } from '@react-navigation/native'

const UpcomingItem = ({upcoming, title}) => {
    const navigation = useNavigation()
    
  return (
    <View style={style.content}>
        <Text style={style.title}>{title}</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 15}}>
            
          {upcoming.map((item, index) => (
            <TouchableWithoutFeedback key={index} 
            onPress={() => {
              navigation.navigate('Movie', item.id)
            }}>
                <View style={style.slider}>
                  <Image source={{ uri: image185(item.poster_path) }} style={style.sliderImage}/>
                  <Text style={style.titleImage}>{item.title.length > 12 ? item.title.slice(0, 20) + '...' : item.title}</Text>
                  {/* <Text>{ item.id }</Text> */}
                </View>
            </TouchableWithoutFeedback>
          ))}
        </ScrollView>
    </View>
  )
}

export default UpcomingItem

const style = StyleSheet.create({
  content: {
    top: 25
  },
  title: {
    color: 'white',
    fontSize: 20,
    margin: 10,
    top: 10,
  }, 
  slider: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },

  sliderImage: {
    borderRadius: 30,
    width: 200, 
    height: 250
  },
  titleImage: {
    fontSize: 16,
    marginTop: 10,
    color: 'white',
    fontWeight: 'bold'
  }
})


