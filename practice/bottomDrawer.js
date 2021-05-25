import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {BottomSheet} from 'react-native-btr';
import {SocialIcon} from 'react-native-elements';
import {Button} from 'react-native-elements/dist/buttons/Button';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }
  toggleBottomNavigationView = () => {
    this.setState({visible: true});
  };

  can = () => {
    this.setState({visible: false});
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Text
            style={{
              fontSize: 20,
              marginBottom: 20,
              textAlign: 'center',
            }}>
            Example of Bottom Sheet in React Native
          </Text>
          <Button
            onPress={() => this.toggleBottomNavigationView()}
            title="Show Bottom Sheet"
          />
          <BottomSheet
            visible={this.state.visible}
            onBackButtonPress={() => this.can()}
            onBackdropPress={() => this.can()}>
            <View style={styles.bottomNavigationView}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    padding: 20,
                    fontSize: 20,
                  }}>
                  Filter Customer
                </Text>
              </View>
            </View>
          </BottomSheet>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0F7FA',
  },
  bottomNavigationView: {
    backgroundColor: '#fff',
    width: '100%',
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
