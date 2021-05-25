import React, {Component} from 'react';
import {Platform, StyleSheet, View, Image} from 'react-native';
// import ad_design from './Public/LodingScreen/ad_design.png';
export default class LogoLoading extends Component {
  async componentDidMount() {
    // You can load api data or any other thing here if you want
    const data = await this.navigateToHome();
    if (data !== null) {
      this.props.navigation.navigate('Home');
    }
  }

  navigateToHome = async () => {
    // Splash screen will remain visible for 2 seconds
    const wait = time => new Promise(resolve => setTimeout(resolve, time));
    return wait(1000).then(() => this.props.navigation.navigate('Home'));
  };

  render() {
    return (
      <View>
        {/* <Text style={{fontStyle:'italic', fontWeight:'bold' , fontSize:20, color:'red'}} >Guidlines</Text>  */}

        <Image
          source={require('./assets/ad_design.png')}
          style={{width: '100%', height: '100%'}}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },

  SplashScreen_RootView: {
    justifyContent: 'center',
    flex: 1,
    margin: 10,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },

  SplashScreen_ChildView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
