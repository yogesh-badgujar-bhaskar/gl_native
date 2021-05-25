import React, {Component} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Avatar, Button, FAB, TextInput} from 'react-native-paper';
import {
  ADDCUSTOMERMESSAGE,
  CONTACCT_ERROR,
  EMAIL_ERROR,
  FIRSTNAME_ERROR,
  LASTNAME_ERROR,
  PASSWORD_ERROR,
} from '../../../../../../common/CommonMsg';
import {
  CONTACT_PLACEHOLDER,
  CREATE_PLACEHOLDER,
  EMAIL_PLACEHOLDER,
  FIRSTNAME_PLACEHOLDER,
  LASTNAME_PLACEHOLDER,
  PASSWORD_PLACEHOLDER,
} from '../../../../../../common/customerFieldName';
import get from 'lodash/get';
import {requestClientCreate} from '../actions/client';
import {connect} from 'react-redux';

var ImagePicker = require('react-native-image-picker');
const _ = {get};

class Client extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'outlined',
      photo:
        'https://image.freepik.com/free-vector/businessman-profile-cartoon_18591-58479.jpg',
      firstName: '',
      firstNameError: '',
      lastName: '',
      lastNameError: '',
      email: '',
      emailError: '',
      contact: '',
      contactError: '',
      password: '',
      passwordError: '',
      errorblankFirstName: false,
      errorblankLastName: false,
      errorblankEmail: false,
      errorblankContact: false,
      errorblankPassword: false,
    };
  }

  handleProfilePhoto = () => {
    const options = {
      noData: true,
    };
    ImagePicker.launchImageLibrary(options, response => {
      console.log('response', response);
      if (response.uri) {
        this.setState({photo: response});
      }
    });
  };

  firstName_Validator = () => {
    this.setState({firstNameError: ''});
    if (this.state.firstName == '') {
      this.setState({
        errorblankFirstName: true,
      });
    } else {
      this.setState({errorblankFirstName: false});
    }
  };

  lastName_Validator = () => {
    this.setState({firstNameError: '', lastNameError: ''});
    if (this.state.lastName == '') {
      this.setState({errorblankLastName: true});
    } else {
      this.setState({errorblankLastName: false});
    }
  };

  email_Validator = () => {
    this.setState({lastNameError: '', emailError: ''});
    if (this.state.email == '') {
      this.setState({errorblankEmail: true});
    } else {
      this.setState({errorblankEmail: false});
    }
  };

  contact_Validator = () => {
    this.setState({emailError: '', contactError: ''});
    if (this.state.contact == '') {
      this.setState({errorblankContact: true});
    } else {
      this.setState({errorblankContact: false});
    }
  };

  password_Validator = () => {
    this.setState({contactError: '', passwordError: ''});
    if (this.state.password == '') {
      this.setState({errorblankPassword: true});
    } else {
      this.setState({errorblankPassword: false});
    }
  };

  mainValidation = () => {
    const {firstName, lastName, email, contact, password} = this.state;
    if (firstName == '') {
      this.setState({firstNameError: FIRSTNAME_ERROR});
      return false;
    } else if (lastName == '') {
      this.setState({lastNameError: LASTNAME_ERROR, firstNameError: ''});
      return false;
    } else if (email == '') {
      this.setState({emailError: EMAIL_ERROR, lastNameError: ''});
      return false;
    } else if (contact == '') {
      this.setState({contactError: CONTACCT_ERROR, emailError: ''});
      return false;
    } else if (password == '') {
      this.setState({passwordError: PASSWORD_ERROR, contactError: ''});
      return false;
    } else {
      this.setState({
        firstNameError: '',
        lastNameError: '',
        emailError: '',
        contactError: '',
        passwordError: '',
      });
      return true;
    }
  };

  addClient = () => {
    const {firstName, lastName, email, contact, password, photo} = this.state;
    if (this.mainValidation()) {
      alert(ADDCUSTOMERMESSAGE);
      let a = this.props.onCreateClient({
        firstname: firstName,
        lastname: lastName,
        email: email,
        contact: contact,
        password: password,
        image: {
          name: photo.fileName,
          type: photo.type,
          uri:
            Platform.OS === 'android'
              ? photo.uri
              : photo.uri.replace('file://', ''),
        },
      });
      console.log('client component on line 160', a);
    } else {
    }
  };

  render() {
    const {mode} = this.state;
    return (
      <SafeAreaView>
        <ImageBackground
          source={require('../../../../../assets/MainHome/homeBackground.jpg')}
          style={{height: '100%', width: '100%'}}>
          <View style={styles.mainView}>
            <View style={styles.subView}>
              <ScrollView>
                <View style={styles.profileView}>
                  <TouchableOpacity onPress={this.handleProfilePhoto}>
                    <Avatar.Image
                      size={120}
                      source={{uri: this.state.photo.uri}}
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
                    onChangeText={fname => this.setState({firstName: fname})}
                    value={this.state.firstName}
                    onBlur={() => this.firstName_Validator()}
                    error={this.state.errorblankFirstName}
                  />
                  <Text style={styles.inputErrorShow}>
                    {this.state.firstNameError}
                  </Text>
                  <TextInput
                    label={LASTNAME_PLACEHOLDER}
                    mode={mode}
                    style={styles.textInput}
                    onChangeText={lname => this.setState({lastName: lname})}
                    value={this.state.lastName}
                    onBlur={() => this.lastName_Validator()}
                    error={this.state.errorblankLastName}
                  />
                  <Text style={styles.inputErrorShow}>
                    {this.state.lastNameError}
                  </Text>
                  <TextInput
                    label={EMAIL_PLACEHOLDER}
                    mode={mode}
                    style={styles.textInput}
                    onChangeText={email => this.setState({email: email})}
                    value={this.state.email}
                    onBlur={() => this.email_Validator()}
                    error={this.state.errorblankEmail}
                  />
                  <Text style={styles.inputErrorShow}>
                    {this.state.emailError}
                  </Text>
                  <TextInput
                    label={CONTACT_PLACEHOLDER}
                    mode={mode}
                    style={styles.textInput}
                    onChangeText={contact => this.setState({contact: contact})}
                    value={this.state.contact}
                    onBlur={() => this.contact_Validator()}
                    error={this.state.errorblankContact}
                  />
                  <Text style={styles.inputErrorShow}>
                    {this.state.contactError}
                  </Text>
                  <TextInput
                    label={PASSWORD_PLACEHOLDER}
                    mode={mode}
                    style={styles.textInput}
                    secureTextEntry={true}
                    onChangeText={password =>
                      this.setState({password: password})
                    }
                    value={this.state.password}
                    onBlur={() => this.password_Validator()}
                    error={this.state.errorblankPassword}
                  />
                  <Text style={styles.inputErrorShow}>
                    {this.state.passwordError}
                  </Text>
                  <View style={styles.fabView}>
                    <TouchableOpacity
                      onPress={() => {
                        this.addClient();
                      }}>
                      <FAB
                        small
                        label={CREATE_PLACEHOLDER}
                        style={styles.createFab}
                        color="white"
                      />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Button
                        style={{marginBottom: '10%'}}
                        icon="keyboard-backspace"
                        color="grey">
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
const mapStateToProps = state => {
  return {
    ClientData: _.get(state, 'client.ClientData', []),
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onCreateClient: payload => dispatch(requestClientCreate(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Client);

const styles = StyleSheet.create({
  mainView: {
    height: '100%',
    width: '100%',
    // backgroundColor: 'transparent',
    justifyContent: 'center',
  },
  subView: {
    height: '97%',
    width: '93%',
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: 20,
  },
  profileView: {
    height: '25%',
    width: '100%',
    // backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // profileImage: {marginTop: 10},
  textInput: {margin: 0},
  inputView: {height: '73%', margin: 2, marginLeft: '5%', marginRight: '5%'},
  createFab: {width: '40%', alignSelf: 'center', marginTop: 5},
  inputErrorShow: {
    fontSize: 10,
    color: 'red',
    marginTop: 2,
    marginBottom: -2,
  },
});
