import React, {Component} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import RNRestart from 'react-native-restart';

class login extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    AsyncStorage.clear();
    // this.props.navigation.navigate('SignIn')
    // RNRestart.Restart();
  }

  render() {
    return <>{RNRestart.Restart()}</>;
  }
}
export default login;
