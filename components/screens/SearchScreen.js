import React, { useState, useCallback } from 'react'
import { Text, View, Image, StyleSheet, 
    TextInput, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Dimensions } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
// import Ionicons from 'react-native-vector-icons/Ionicons'
import {debounce} from 'lodash'
import { image185, searchMovies } from '../api/apiRequest';
import { Loader } from '../loader/Loader';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window')

export const SearchScreen = () => {
    const [result, setResult] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const navigator = useNavigation()
    

    const handleSearch = (textHanler) => {
        if(textHanler.length > 3){
            setIsLoading(true)
            searchMovies({
                query: textHanler
            }).then(data => {
                setResult(data.results)
                setIsLoading(false)  
            })
        }else{
            setIsLoading(false)
            setResult([])
        }
    }

    const fetchingSearch = useCallback(debounce(handleSearch, 400), [])
    

    return (
       <SafeAreaView style={style.header}>
        <View style={style.content}>
            <TextInput onChangeText={fetchingSearch} placeholder='Spider-man ...' placeholderTextColor={'lightgray'} style={style.input}/>
            <TouchableOpacity style={style.close} onPress={() => {
                navigator.navigate('Home', 200)
            }}>
                <Ionicons name="close-outline" size={50} />
            </TouchableOpacity>
        </View>
        {isLoading ? (
            <Loader />
            // <Text>Application</Text>
        ) : result.length > 0 ? (
            <ScrollView showsVerticalScrollIndicator={false}  
            contentContainerStyle={{ paddingHorizontal: 15 }}>
                <Text style={style.searchText}>Results ({result.length})</Text>
                <View style={style.images}>
                    {result.map((item, idx) => (
                        <TouchableWithoutFeedback key={idx} onPress={() => {
                            navigator.navigate('Movie', item.id)
                        }}>
                            <View style={{ marginBottom: 20 }}>
                                <Image source={{uri: image185(item.poster_path)}} 
                                style={{ width: width * 0.44, height: height * 0.3, 
                                marginTop: 20, marginBottom: 10, borderRadius: 20}}/>
                                <Text style={{ color: 'white', textAlign: 'center', fontSize: 17 }}>{item.title.length > 6 ? 
                                item.title.slice(0, 15) : item.title}...</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    ))}
                </View>
            </ScrollView>
        ) : (
            <View style={style.notfound}>
                <Image source={require('../../assets/no-results.png')}/>
                <Text style={style.notTitle}>Pleace enter movie name</Text>
            </View>
        )}
       </SafeAreaView>
    )
}

const style = StyleSheet.create({
    header: {
        flex: 1,
        backgroundColor: 'background-color: rgb(17 24 39)'
    },

    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: 'white',
        alignItems: 'center',
        borderWidth: 1,
        marginLeft: 19,
        marginRight: 19,
        padding: 5, 
        borderRadius: 30
    },

    input: {
        flex: 1,
        color: 'white',
        // width: 320,
        paddingLeft: 10,
        fontSize: 17,
        // backgroundColor: 'white'
    },

    close: {
        borderRadius: 40,
        backgroundColor: 'white'
    },

    searchText: {
        color: 'white',
        margin: 10,
        fontSize: 17,
        fontWeight: 'bold'

    },

    images: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },

    notfound: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    notTitle: {
        color: 'white',
        fontSize: 23,
        marginTop: 10,
        fontWeight: 'bold'
    }
})