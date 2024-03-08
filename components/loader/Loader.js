import React from 'react'
import {StyleSheet } from 'react-native'
import AnimatedLoader from 'react-native-animated-loader'

export const Loader = () => {
  return (
    <AnimatedLoader 
    visible={true}
    overlayColor="rgba(2,6,23, .5)"
    source={require("../../assets/loader/app.json")}
    animationStyle={styles.lottie}
    speed={1}>
    </AnimatedLoader>
  )
}

const styles = StyleSheet.create({
    lottie: {
      width: 100,
      height: 100
    }
});

