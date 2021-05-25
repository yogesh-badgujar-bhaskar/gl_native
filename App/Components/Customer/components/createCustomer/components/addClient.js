import React, {Component} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Avatar, Button, FAB, TextInput} from 'react-native-paper';
import {
  CONTACT_PLACEHOLDER,
  CREATE_PLACEHOLDER,
  EMAIL_PLACEHOLDER,
  FIRSTNAME_PLACEHOLDER,
  LASTNAME_PLACEHOLDER,
  PASSWORD_PLACEHOLDER,
} from '../../../../common/customerFieldName';
import styles from '../styles/addClients';

var ImagePicker = require('react-native-image-picker');

export default class Client extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'outlined',
      photo:
        'https://image.freepik.com/free-vector/businessman-profile-cartoon_18591-58479.jpg',
    };
  }

  handleProfilePhoto = () => {
    const options = {
      noData: true,
    };
    ImagePicker.launchImageLibrary(options, response => {
      console.log('response', response.uri);
      if (response.uri) {
        this.setState({photo: response.uri});
      }
    });
  };

  render() {
    const {mode} = this.state;
    return (
      <SafeAreaView>
        <ImageBackground
          source={require('../../../assets/MainHome/homeBackground.jpg')}
          style={{height: '100%', width: '100%'}}>
          <View style={styles.backgroundImage}>
            <View style={styles.mainView}>
              <ScrollView>
                <View style={styles.profileView}>
                  <TouchableOpacity onPress={this.handleProfilePhoto}>
                    <Avatar.Image
                      size={120}
                      source={{uri: this.state.photo}}
                      style={styles.profileImage}
                    />
                  </TouchableOpacity>
                  <Text style={styles.profileContent}>
                    Tap on profile to upload your image
                  </Text>
                </View>
                <View style={styles.inputView}>
                  <TextInput
                    label={FIRSTNAME_PLACEHOLDER}
                    mode={mode}
                    style={styles.textInput}
                  />
                  <TextInput
                    label={LASTNAME_PLACEHOLDER}
                    mode={mode}
                    style={styles.textInput}
                  />
                  <TextInput
                    label={EMAIL_PLACEHOLDER}
                    mode={mode}
                    style={styles.textInput}
                  />
                  <TextInput
                    label={CONTACT_PLACEHOLDER}
                    mode={mode}
                    style={styles.textInput}
                  />
                  <TextInput
                    label={PASSWORD_PLACEHOLDER}
                    mode={mode}
                    style={styles.textInput}
                  />
                  <View style={styles.fabView}>
                    <TouchableOpacity>
                      <FAB
                        small
                        label={CREATE_PLACEHOLDER}
                        style={styles.createFab}
                        color="white"
                      />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Button icon="keyboard-backspace" color="grey">
                        Back
                      </Button>
                    </TouchableOpacity>
                  </View>
                </View>
              </ScrollView>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}
