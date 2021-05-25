import React, {Component} from 'react';
import {Modal, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {
  mobileNumber,
  firstName,
  lastName,
  email,
  address,
} from '../../../../common/customerFieldName';
import styles from './styles/add';

export default class updateCustomer extends Component {
  render() {
    return (
      <>
        <Modal
          style={{marginTop: '30%'}}
          animationType={'slide'}
          transparent={false}
          visible={this.props.modelVisible}
          onRequestClose={() => {
            Alert.alert('Modal has now been closed.');
          }}>
          <View style={styles.viewWrapper}>
            <View style={styles.modalView}>
              <TextInput
                placeholder={firstName}
                style={styles.textInput}
                onChangeText={this.props.firstNameOnChange}
                value={this.props.firstNameValue}
                onBlur={this.props.firstName_onBlur}
              />

              <Text style={styles.error_msg}>{this.props.firstName_error}</Text>

              <TextInput
                placeholder={lastName}
                style={styles.textInput}
                onChangeText={this.props.lastNameOnChange}
                value={this.props.lastNameValue}
                onBlur={this.props.lastName_onBlur}
              />

              <Text style={styles.error_msg}>{this.props.lastName_error}</Text>

              <TextInput
                placeholder={mobileNumber}
                style={styles.textInput}
                onChangeText={this.props.mobileOnChange}
                maxLength={10}
                value={this.props.mobileValue}
                keyboardType="numeric"
                onBlur={this.props.phone_onBlur}
              />

              <Text style={styles.error_msg}>{this.props.phone_error} </Text>

              <TextInput
                placeholder={email}
                style={styles.textInput}
                onChangeText={this.props.emailOnChange}
                value={this.props.emailValue}
                onBlur={this.props.email_onBlur}
              />

              <Text style={styles.error_msg}>{this.props.email_error}</Text>

              <TextInput
                placeholder={address}
                style={styles.textInput}
                onChangeText={this.props.addressOnChange}
                value={this.props.addressValue}
                onBlur={this.props.address_onBlur}
              />

              <Text style={styles.error_msg}>{this.props.address_error}</Text>

              <View style={{flexDirection: 'row', display: 'flex'}}>
                <TouchableOpacity>
                  <Text
                    style={styles.closeText}
                    onPress={this.props.cancle_onpress}>
                    Cancel
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginLeft: '10%'}}>
                  <Text
                    onPress={this.props.update_onpress}
                    style={styles.closeText}>
                    Update
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </>
    );
  }
}
