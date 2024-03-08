import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import MovieCard from './MovieCard'

const { width, height } = Dimensions.get('window')
const MovieItem = ({ movie }) => {
    return (
        <View style={{ top: 20 }}>
            <Carousel key={movie}
            data={movie}
            renderItem={(item) => <MovieCard item={item}/>}
            horizontal
            showsHorizontalScrollIndicator={false}
            bounce={false}
            windowSize={width}
            sliderWidth={width}
            itemWidth={width * 0.7}
            slideStyle={{ display: 'flex', alignItems: 'center' }} loop />
        </View>
    )
}

export default MovieItem