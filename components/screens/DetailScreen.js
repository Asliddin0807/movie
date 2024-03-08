import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, Image, Dimensions } from 'react-native'
import Ionicon from 'react-native-vector-icons/Ionicons'
import { useNavigation, useRoute } from '@react-navigation/native'
import { fetchMovieDetail, fetchMovieSimilar, fetchMovieCredits, image500 } from '../api/apiRequest'
import {Loader} from '../loader/Loader';
import { LinearGradient } from 'expo-linear-gradient'
import { Cast } from '../Items/Cast'
import { Similar } from '../Items/Similar'
const { width, height } = Dimensions.get('window')


export const DetailScreen = () => {
    const navigate = useNavigation()
    const [ isFavourite, setIsFavourite ] = useState(false)
    const [movie, setMovie] = useState({})
    const [credits, setCredits] = useState([])
    const [similar, setSimilar] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const onFavourite = () => {
      setIsFavourite(prev => prev = !prev)
    }

    const { params: id } = useRoute()
    
    useEffect(() => {
      fetchCredits()
      fetchDetail()
      fectSimilar()
    }, [id])

    const fetchDetail = async() => {
      await fetchMovieDetail(id).then(res => {
        setMovie(res)
        setIsLoading(false)
      }).catch((err) => {
        console.log('ser', err)
      })
    }

    const fetchCredits = async() => {
      await fetchMovieCredits(id).then(res => {
        if(res.length > 0){
        }
        setCredits(res.cast)
        
      }).catch((err) => {
        console.log('ker', err)
      })
    }

    const fectSimilar = async() => {
      return fetchMovieSimilar(id).then(res => {
        setSimilar(res.results)
        console.log(res)
      }).catch((err) => {
        console.log('er', err)
      }) 
    }
    console.log(credits)
    return (
      <ScrollView style={style.content}>
          <View>
            <SafeAreaView style={style.header}>
                  <TouchableOpacity style={style.back} onPress={() => navigate.goBack()}>
                      <Ionicon name="arrow-back-outline" size={34} color="white"/>
                  </TouchableOpacity>
                  <TouchableOpacity style={style.heart} onPress={onFavourite}>
                      <Ionicon name={isFavourite ? 'heart' : 'heart-outline'} size={34} color={isFavourite ? 'red' : 'white'}/>
                  </TouchableOpacity>
            </SafeAreaView>
              { isLoading ? <Loader /> 
              : (<View>
                <Image source={{ uri: image500(movie.poster_path) }} 
                style={{ width, height: height * 0.6}}/>
                <LinearGradient colors={
                  [
                    'transparent', 
                    'rgba(23, 23, 23, 0.8)', 
                    'rgba(23, 23, 23, 1)'
                    ]} 
                    style={{ width, height: height * 0.2, position: 'absolute', bottom: 0 }}
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 0.5, y: 1 }}/>
              </View> )}
          </View>
              <View style={style.info}>
                <Text style={style.info_text}>{ movie.title }</Text>
                {movie?.id ? (
                  <Text style={style.detail}>
                      {movie?.status} ◕ {movie.release_date.split('-')[0]} ◕ {movie.runtime} min
                  </Text>
                  ): null}
                  
              </View>
              <View style={style.genres}>
                  {movie?.genres?.map((item, idx) => (
                    <Text key={idx} style={style.genre}>
                      {item.name}
                    </Text>
                  ))}
              </View>
              <View style={style.overview}>
                <Text style={style.overview_text}>{movie?.overview}</Text>
              </View>
              <View>
              {/* <Cast cast={credits}/> */}
              {/* <Cast cast={credits}/> */}
                { movie?.id && credits.length > 0 && <Cast credits={credits} /> }
              </View>
              <View>
                {movie?.id && similar.length > 0 && <Similar similar={similar}/>}
              </View>
      </ScrollView>
    )
}

const style = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: 'background-color: rgb(17 24 39)'
    
  },

  back: {
    top: 15,
    color: 'white',
    left: 13,
  },

  heart: {
    top: 15,
    right: 13,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 20,
    top: 40,
  },

  info: {
    marginTop: -30,
  },

  info_text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
    justifyContent: 'center',
    fontWeight: 'bold'
  },

  detail: {
    fontSize: 20,
    color: 'gray',
    textAlign: 'center'
  },

  genre: {
    color: 'gray',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  genres: {
    width: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 10,
    textAlign: 'center',
  },

  overview: {
    margin: 20
  },

  overview_text: {
    color: 'white',
    fontSize: 15,
  }
})