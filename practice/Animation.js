import React, {Component} from 'react';
import {Animated, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default class Animation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ballAnimation: new Animated.Value(1),
    };
  }

  animateBall = () => {
    Animated.timing(this.state.ballAnimation, {
      toValue: -200,
      duration: 700,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(this.state.ballAnimation, {
        toValue: 1,
        duration: 700,
        useNativeDriver: true,
      }).start();
    });
  };

  render() {
    const ballAnimation = {
      transform: [
        {
          translateY: this.state.ballAnimation,
        },
      ],
    };
    return (
      <View
        style={{
          height: '100%',
          width: '100%',
          justifyContent: 'center',
          backgroundColor: 'orange',
        }}>
        <TouchableOpacity onPress={() => this.animateBall()}>
          <Animated.View style={[styles.ball, ballAnimation]}></Animated.View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ball: {
    height: '40%',
    width: '30%',
    backgroundColor: 'white',
    alignSelf: 'center',
  },
});
