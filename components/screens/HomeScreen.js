import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, Image, Button, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StatusBar } from 'expo-status-bar';
import { fetchTopRated, fetchTradingMovie, fetchUpComingMovie } from '../api/apiRequest'; 
import MovieItem from '../Items/MovieItem';
import UpcomingItem from '../Items/UpcomingItem';
import { TopRatedMovie } from '../Items/TopRatedItem';
import {Loader} from '../loader/Loader';

export const HomeScreen = () => {
    const [movie, setMovie] = useState([])
    const [upcoming, setUpcoming] = useState([])
    const [top, setTop] = useState([])
    const [isLoading, setIsloading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            fetchMovie()
            fetchUpcoming()
            topRated()
        }, 200)
    }, [])
    
    const fetchMovie = async() => {
        let data = await fetchTradingMovie().then(res => {
            setIsloading(false)
            setMovie(res.results)
        })
        
    }

    const fetchUpcoming = async() => {
        await fetchUpComingMovie().then(res => {
            setUpcoming(res.results)
        }) 
    }

    const topRated = async() => {
        await fetchTopRated().then(res => {
            setTop(res.results)
        })
    }
   
    return (
        <View style={style.header}>
            <SafeAreaView>
                <StatusBar style="light"/>
                <View style={style.container}>
                    <View style={style.content}>
                        <Image source={require('../../assets/social-media.png')}/>
                        <Text style={style.title}>Movie app</Text>
                    </View>
                    <View style={style.icon}>
                        <Ionicons name="search-outline" size={30} color="white"/>
                    </View>
                </View>
            </SafeAreaView>
            { isLoading ? (
                <Loader />
            ) : (
                <ScrollView showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 20}}>
                    
                    { movie.length > 0 && <MovieItem movie={movie} key={movie}/> }
                    { upcoming.length > 0 && <UpcomingItem upcoming={upcoming} /> }
                    { top.length > 0 && <TopRatedMovie rated={top} /> }
                </ScrollView>
            )} 
        </View>
    )
}

const style = StyleSheet.create({
    header: {
        flex: 1,
        backgroundColor: 'background-color: rgb(17 24 39)',
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    content: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
    },

    title: {
        color: 'white',
        fontSize: 27,
        left: 13,
    },

    icon: {
        marginRight: 12,
    }

})