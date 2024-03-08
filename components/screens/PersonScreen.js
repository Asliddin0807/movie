import { useRoute } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, Dimensions, ScrollView } from 'react-native'
import { fetchPerson, fetchPersonMovies, image342, image500 } from '../api/apiRequest'
import { Loader } from '../loader/Loader'
import UpcomingItem from '../Items/UpcomingItem'

const { width, height } = Dimensions.get('window')


export const PersonScreen = () => {
    const [cast, setCast] = useState([])
    const [personMovies, setPersonMovies] = useState([])
    const { params: id } = useRoute()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fectchCast(),
        getCastMovies()
    }, [id])

    const fectchCast = async() => {
        let data = await fetchPerson(id)
        setCast(data)
        setIsLoading(false)
    }

    const getCastMovies = async() => {
        let data = await fetchPersonMovies(id)
        setPersonMovies(data)
    }
    
    return (
        <ScrollView style={style.content}>
            <View>
                {isLoading ? (<Loader /> )
                : (<View>
                    <View style={style.header}>
                        <View style={style.profile}>
                            <Image source={{ uri: image342(cast?.profile_path) }} 
                            style={{ width: 200, 
                            height: 200, 
                            borderRadius: 100 
                            }}/>
                        </View>
                    </View>
                    <View>
                        <Text style={style.name}>{cast.name}</Text>
                        <Text style={style.birthday}>{cast.place_of_birth}</Text>
                    </View>

                    <View style={style.info}>
                        <View style={{ borderRightWidth: 1, borderRightColor: 'white', paddingRight: 20 }}>
                            <Text style={{ color: 'gray', fontSize: 17, }}>Gender</Text>
                            <Text style={{color: 'white', fontSize: 15, textAlign: 'center'}}>{ cast.gender == 1 ? "famale" : "male" }</Text>
                        </View>
                        <View style={{ borderRightWidth: 1, borderRightColor: 'white', paddingRight: 20 }}>
                            <Text style={{ color: 'gray', fontSize: 17, textAlign: 'center' }}>Birth day</Text>
                            <Text style={{  color: 'white', fontSize: 15, textAlign: 'center' }}>{ cast.birthday}</Text>
                        </View>
                        <View>
                            <Text style={{ color: 'gray', fontSize: 17, }}>Popularity</Text>
                            <Text style={{  color: 'white', fontSize: 15, textAlign: 'center' }}>{ cast.popularity}</Text>
                        </View>
                    </View>

                    <View style={style.bio}>
                        <Text style={style.title}>Biography</Text>
                        <Text style={style.biography}>{cast.biography}</Text>
                    </View>
                    <View style={{ marginBottom: 30,}}>
                        <Text 
                        style={{ 
                            color: 'white', 
                            fontSize: 20, 
                            marginLeft: 13, 
                            fontWeight: 'bold',
                            top: 10,
                            }}>Similar films</Text>
                        { personMovies.cast && 
                        personMovies.cast.length > 0 && 
                        <UpcomingItem upcoming={personMovies.cast}/> }
                    </View>
                </View>)}
            </View>
        </ScrollView>
    )
}


const style = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: 'rgb(17 24 39)'
    },

    header: {
        flexDirection: 'row',
        borderRadius: 40,
        justifyContent: 'center',
        shadowColor: 'gray',
        shadowRadius: 40,
        top: 25
    },

    profile: {
        alignItems: 'center',
        borderRadius: 90,
        width: 230,
        height: 230,
        shadowOffset: { width: 1, height: 5 },
        shadowOpacity: 1,
        shadowColor: "#fff",
        shadowOffset: {
            width: 0,
            height: 14,
        },
        shadowOpacity: 1,
        shadowRadius: 16.19,

        elevation: 27,
    },

    name: {
        color: 'white',
        fontSize: 23,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    birthday: {
        color: 'gray',
        fontSize: 20,
        textAlign: 'center',
    },

    info: {
        flexDirection: 'row',
        height: 60,
        marginLeft: 30,
        marginRight: 30,
        marginTop: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#1F4172',
        borderRadius: 40,
        paddingLeft: 20,
        paddingRight: 20
    },

    bio: {
        // justifyContent: 'space-between',
        // alignItems: 'center',
        textAlign: 'center',
        pading: 15,
        margin: 15,
        marginBottom: 20,
    },

    title: {        
        textAlign: 'center',
        color: 'white',
        fontSize: 23,
        fontWeight: 'bold',
        marginTop: 10,
    },

    biography: {
        top: 10,
        color: 'gray',
        fontSize: 18,
        
    }
})