import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

export const SearchScreen = () => {

    return (
        <View style={style.header}>
            <Ionicons name="search" size={30}/>
            <Text>Search Screen</Text>
        </View>
    )
}

const style = StyleSheet.create({
    header: {
        flex: 1,
        backgroundColor: 'background-color: rgb(17 24 39)'
    }
})