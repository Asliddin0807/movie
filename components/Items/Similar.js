import React from 'react'
import { Text, View, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { image342 } from '../api/apiRequest'
import { useNavigation } from '@react-navigation/native'
export const Similar = ({similar}) => {
    const navigator = useNavigation()
    return (
        <View>
            <Text style={style.header_title}>Similar movies</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} 
            contentContainerStyle={{ paddingHorizontal: 20 }}>
                {similar.map((item, index) => (
                    <TouchableOpacity key={index} onPress={() => {
                        navigator.navigate('Movie', item.id)
                    }}>
                        <Image source={{ uri: image342(item.poster_path) }} style={{ width: 250, height: 250, borderRadius: 20, margin: 12 }}/>
                        <Text style={style.title}>{item.title}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    )
}

const style = StyleSheet.create({
    title: {
        color: 'white',
        textAlign: 'center',
        marginBottom: 12
    },

    header_title: {
        color: 'white',
        fontSize: 22,
        marginLeft: 20,
        fontWeight: 'bold'
    }
})
