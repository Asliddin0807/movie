import React from 'react'
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'
import { image185 } from '../api/apiRequest'

export const Cast = ({credits}) => {
    
  return (
    <View>
        <Text style={style.header_text}>Actors</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 20}}>
            {credits.map((item, index) => (
                <TouchableOpacity key={index}>
                    <View style={style.actors_solid}>
                        <Image source={{uri: image185(item.profile_path)}} style={{borderRadius: 50, borderWidth: 1, borderColor: 'gray', width: 100, height: 100}}/>
                        <Text style={style.profile_name}>
                            { item.character.length > 7 ? item.character.slice(0, 5) : item.character}...
                        </Text>
                        <Text style={style.profile_name}>
                            { item.original_name.length > 7 ? item.original_name.slice(0, 5) : item.original_name}...
                        </Text>
                    </View>
                </TouchableOpacity>
            ))}
        </ScrollView>
    </View>
  )
}


const style = StyleSheet.create({
    header_text: {
        color: 'white',
        marginLeft: 20,
        fontSize: 22,
        fontWeight: 'bold',

    },

    actors_solid: {
        marginTop: 10,
        marginBottom: 15,
        marginLeft: 6
    },

    profile_name: {
        color: 'white',
        textAlign: 'center'
    }
})