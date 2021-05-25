import React, {Component} from 'react';
import {View, Text, Modal, TextInput, TouchableOpacity} from 'react-native';
import {FAB, HelperText} from 'react-native-paper';
import {connect} from 'react-redux';
import styles1 from './styles/styles';
import styles from './styles/add';
import {
  MOBILENUMBER_PLACEHOLDER,
  FIRSTNAME_PLACEHOLDER,
  LASTNAME_PLACEHOLDER,
  EMAIL_PLACEHOLDER,
  ADDRESS_PLACEHOLDER,
} from '../../../../common/customerFieldName';
import {requestCustomerCreate} from '../actions/customer';

import {
  ADDCUSTOMERMESSAGE,
  ADDRESS_ERROR,
  EMAIL,
  EMAIL_ERROR,
  FIRSTNAME_ERROR,
  LASTNAME_ERROR,
  PHONE_ERROR,
  STRING_CHARACTER,
  UPDATECUSTOMERMESSAGE,
  VALID_MOBILE,
} from '../../../../common/CommonMsg';
import get from 'lodash/get';
import Customer from './hhhhhhh';
const _ = {get};

class AddCustomer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      phone_no: '',
      Phone_error: '',
      firstName: '',
      firstNameError: '',
      lastName: '',
      lastNameError: '',
      email: '',
      emailError: '',
      address: '',
      addressError: '',
      errMsg: false,
      isError: false,
    };
  }

  displayModal(show) {
    this.setState({isVisible: show});
    // alert('welcome');
  }

  phone_Validator = () => {
    if (this.state.phone_no == '') {
      this.setState({Phone_error: PHONE_ERROR});
    } else {
      this.setState({Phone_error: ''});
    }
  };

  firstName_Validator = () => {
    if (this.state.firstName == '') {
      this.setState({firstNameError: FIRSTNAME_ERROR});
    } else {
      this.setState({firstNameError: ''});
    }
  };

  lastName_Validator = () => {
    if (this.state.lastName == '') {
      this.setState({lastNameError: LASTNAME_ERROR});
    } else {
      this.setState({lastNameError: ''});
    }
  };

  email_Validator = () => {
    if (this.state.email == '') {
      this.setState({emailError: EMAIL_ERROR});
    } else {
      this.setState({emailError: ''});
    }
  };

  address_Validator = () => {
    if (this.props.address == '') {
      this.setState({addressError: ADDRESS_ERROR});
    } else {
      this.setState({addressError: ''});
    }
  };

  mainValidation = () => {
    const {phone_no, firstName, lastName, email, address} = this.state;
    if (phone_no == '') {
      this.setState({isError: true, errMsg: VALID_MOBILE});
      return false;
    } else if (firstName == '') {
      this.setState({
        isError: true,
        errMsg: STRING_CHARACTER,
      });
      return false;
    } else if (lastName == '') {
      this.setState({
        isError: true,
        errMsg: STRING_CHARACTER,
      });
      return false;
    } else if (email == '') {
      this.setState({isError: true, errMsg: EMAIL});
      return false;
    } else if (address == '') {
      this.setState({isError: true, errMsg: ADDRESS});
      return false;
    } else {
      this.setState({isError: false, errMsg: false});
      return true;
    }
  };

  addCustomer = () => {
    const {firstName, lastName, email, address, phone_no} = this.state;
    if (this.mainValidation()) {
      alert(ADDCUSTOMERMESSAGE);
      this.props.onCreateCustomer({
        firstName: firstName,
        lastName: lastName,
        email: email,
        address: address,
        phone_no: phone_no,
      });
      this.setState({isVisible: false});
    } else {
      this.setState({isVisible: true});
      // alert(
      //   'Please Fill All Fields than we add new Customer or Click On Cancle Button to Cancle',
      // );
    }
  };

  render() {
    return (
      <>
        <Modal
          style={styles.model_styles}
          animationType={'slide'}
          transparent={false}
          visible={this.state.isVisible}
          onRequestClose={() => {
            Alert.alert('Modal has now been closed.');
          }}>
          <View style={styles.viewWrapper}>
            <View style={styles.modalView}>
              {/* mobile numbmer input field */}
              <TextInput
                placeholder={MOBILENUMBER_PLACEHOLDER}
                style={styles.textInput}
                onChangeText={phoneno => this.setState({phone_no: phoneno})}
                value={this.state.phone_no}
                keyboardType="numeric"
                maxLength={10}
                onBlur={() => this.phone_Validator()}
              />

              <Text style={styles.error_msg}>{this.state.Phone_error} </Text>

              {/* First name input fields */}
              <TextInput
                placeholder={FIRSTNAME_PLACEHOLDER}
                style={styles.textInput}
                onChangeText={fname => this.setState({firstName: fname})}
                value={this.state.firstName}
                onBlur={() => this.firstName_Validator()}
              />

              <Text style={styles.error_msg}>{this.state.firstNameError}</Text>

              <TextInput
                placeholder={LASTNAME_PLACEHOLDER}
                style={styles.textInput}
                onChangeText={lname => this.setState({lastName: lname})}
                value={this.state.lastName}
                onBlur={() => this.lastName_Validator()}
              />

              <Text style={styles.error_msg}>{this.state.lastNameError}</Text>

              <TextInput
                placeholder={EMAIL_PLACEHOLDER}
                style={styles.textInput}
                onChangeText={email_ => this.setState({email: email_})}
                value={this.state.email}
                onBlur={() => this.email_Validator()}
              />

              <Text style={styles.error_msg}>{this.state.emailError}</Text>

              <TextInput
                placeholder={ADDRESS_PLACEHOLDER}
                style={styles.textInput}
                onChangeText={address_ => this.setState({address: address_})}
                value={this.state.address}
                onBlur={() => this.address_Validator()}
              />

              <Text style={styles.error_msg}>{this.state.addressError}</Text>

              {
                // here we describe if email include condition and password condition validation
                (this.state.isError = true && (
                  <HelperText type="error" visible={this.state.isError}>
                    {this.state.errMsg}
                  </HelperText>
                ))
              }

              <View style={styles.action_styles}>
                <TouchableOpacity>
                  <Text
                    style={styles.closeText}
                    onPress={() => {
                      this.displayModal(!this.state.isVisible);
                    }}>
                    Cancel
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.add_button_opacity}>
                  <Text
                    onPress={() => {
                      this.addCustomer();
                      //  this.displayModal(false);
                    }}
                    style={styles.closeText}>
                    Add
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        <View style={styles1.fab_view}>
          <FAB
            icon="plus"
            color="black"
            style={styles1.Fab_display}
            onPress={() => this.displayModal(true)}
          />
        </View>
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    CustomerData: _.get(state, 'customer.CustomerData', []),
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onCreateCustomer: payload => dispatch(requestCustomerCreate(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCustomer);
