import React, {Component} from 'react';
import {
  Image,
  ScrollView,
  Text,
  View,
  FlatList,
  SafeAreaView,
} from 'react-native';
import {connect} from 'react-redux';
import {Card, Divider, FAB, Paragraph} from 'react-native-paper';
import get from 'lodash/get';
const _ = {get};
import styles1 from './styles/styles';
import Antd_icon from 'react-native-vector-icons/AntDesign';
import MaterialCommunity_icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  requestCustomerList,
  requestCustomerDelete,
  requestCustomerUpdate,
} from '../actions/customer';
import UpdateCustomer from './updateCustomer';
import DeleteCustomer from './deleteCustomer';
import AddCustomer from './AddCustomer';
import {
  ADDCUSTOMERMESSAGE,
  ADDRESS,
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
import FilterCustomer from './filterCustomer';

class Customer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      firstName: '',
      FIRSTNAME_ERROR: '',
      lastName: '',
      LASTNAME_ERROR: '',
      email: '',
      EMAIL_ERROR: '',
      phone_no: '',
      PHONE_ERROR: '',
      address: '',
      ADDRESS_ERROR: '',
      data: [],
      deleteId: '',
      isError: false,
      errMsg: false,
      isVisible: false,
      isVisibleUpdate: false,
      background_image: require('../../../assets/MainHome/homeBackground.jpg'),
      filter: '',
    };
  }

  componentDidMount() {
    let a = this.props.onGetAllCustomer();
    //console.log('componentdidmount from customer.js', a);
  }

  // ********** Delete Data ******* //
  showDialogue = id => {
    this.setState({deleteId: id});
    this.setState({visible: true});
  };

  hideDialogue = () => {
    this.setState({visible: false});
  };

  componentDidUpdate() {
    console.log('update');
  }

  deleteCustomer = () => {
    let a = this.props.onDeleteCustomer(this.state.deleteId);
    // console.log('delete customer from line no 50', a);
    this.setState({visible: false});
  };

  // ******************************//

  showAddForm = () => {
    this.setState({visible: true});
  };

  _UpdatedisplayModal(show) {
    this.setState({isVisibleUpdate: show});
  }

  _UpdateCustmgt = item => {
    this.setState({
      id: item.id,
      firstName: item.firstName,
      lastName: item.lastName,
      phone_no: item.phone_no,
      email: item.email,
      address: item.address,
    });
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
    console.log(
      'firstName, lastName, email, address, phone_no',
      firstName,
      lastName,
      email,
      address,
      phone_no,
    );
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

  updateCustomer = () => {
    const {firstName, lastName, email, address, phone_no} = this.state;
    if (this.mainValidation()) {
      alert(UPDATECUSTOMERMESSAGE);
      this.props.onUpdateCustomer({
        firstName: firstName,
        lastName: lastName,
        email: email,
        address: address,
        phone_no: phone_no,
      });
      this.props.onUpdateCustomer(this.state);
      this._UpdatedisplayModal(false);
    } else {
      this.setState({isVisible: true});
      alert(
        'Please Fill All Fields than we add new Customer or Click On Cancle Button to Cancle',
      );
    }
  };

  phone_Validator = () => {
    const {phone_no} = this.state;
    if (phone_no == '') {
      this.setState({PHONE_ERROR: PHONE_ERROR});
    } else {
      this.setState({PHONE_ERROR: ''});
    }
  };

  firstName_Validator = () => {
    const {firstName} = this.state;
    if (firstName == '') {
      this.setState({FIRSTNAME_ERROR: FIRSTNAME_ERROR});
    } else {
      this.setState({FIRSTNAME_ERROR: ''});
    }
  };

  lastName_Validator = () => {
    const {lastName} = this.state;
    if (lastName == '') {
      this.setState({LASTNAME_ERROR: LASTNAME_ERROR});
    } else {
      this.setState({LASTNAME_ERROR: ''});
    }
  };

  email_Validator = () => {
    const {email} = this.state;
    if (email == '') {
      this.setState({EMAIL_ERROR: EMAIL_ERROR});
    } else {
      this.setState({EMAIL_ERROR: ''});
    }
  };

  address_Validator = () => {
    const {address} = this.state;
    if (address == '') {
      this.setState({ADDRESS_ERROR: ADDRESS_ERROR});
    } else {
      this.setState({ADDRESS_ERROR: ''});
    }
  };

  model1 = () => {};

  render() {
    const {background_image} = this.state;
    return (
      <SafeAreaView>
        <View>
          <View style={styles1.container}>
            <Image style={styles1.background_image} source={background_image} />

            {/***********************UPDATE CUSTOMER************************/}
            <UpdateCustomer
              modelVisible={this.state.isVisibleUpdate}
              mobileOnChange={phoneno => this.setState({phone_no: phoneno})}
              mobileValue={this.state.phone_no}
              phone_onBlur={() => this.phone_Validator()}
              PHONE_ERROR={this.state.PHONE_ERROR}
              firstNameOnChange={fname => this.setState({firstName: fname})}
              firstNameValue={this.state.firstName}
              firstName_onBlur={() => this.firstName_Validator()}
              FIRSTNAME_ERROR={this.state.FIRSTNAME_ERROR}
              lastNameOnChange={lname => this.setState({lastName: lname})}
              lastNameValue={this.state.lastName}
              lastName_onBlur={() => this.lastName_Validator()}
              LASTNAME_ERROR={this.state.LASTNAME_ERROR}
              emailOnChange={email_ => this.setState({email: email_})}
              emailValue={this.state.email}
              email_onBlur={() => this.email_Validator()}
              EMAIL_ERROR={this.state.EMAIL_ERROR}
              addressOnChange={address_ => this.setState({address: address_})}
              addressValue={this.state.address}
              address_onBlur={() => this.address_Validator()}
              ADDRESS_ERROR={this.state.ADDRESS_ERROR}
              cancle_onpress={() => {
                this._UpdatedisplayModal(!this.state.isVisibleUpdate);
              }}
              update_onpress={() => {
                this.updateCustomer();
              }}
            />
            {/**************************************************************/}

            <FilterCustomer data={this.props.CustomerData} />
            <FlatList
              data={this.props.CustomerData}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <>
                  <View style={styles1.detail_main_view}>
                    <ScrollView>
                      <Card style={styles1.detail_main_card}>
                        <Card.Title
                          title={item.firstName}
                          subtitle={item.email}
                        />
                        <View style={styles1.detail_bottom_view}>
                          <View style={styles1.detail_info}>
                            <Text style={styles1.detail_phone}>
                              {item.phone_no}
                            </Text>
                            {/* <Card.Content> */}
                            <Paragraph>
                              <Text>{item.address}</Text>
                            </Paragraph>
                            {/* </Card.Content> */}
                          </View>
                          <View style={styles1.action_main_view}>
                            <TouchableOpacity
                              onPress={() => {
                                this._UpdatedisplayModal(true);
                                this._UpdateCustmgt(item);
                              }}>
                              <Antd_icon
                                name="edit"
                                size={27}
                                style={{paddingTop: 17}}
                                color="green"
                              />
                            </TouchableOpacity>
                            <TouchableOpacity>
                              <MaterialCommunity_icon
                                style={{paddingTop: 17, paddingLeft: 7}}
                                name="delete"
                                size={27}
                                color="#9c1a1a"
                                onPress={() => this.showDialogue(item.id)}
                              />
                            </TouchableOpacity>
                          </View>
                        </View>
                      </Card>
                    </ScrollView>
                  </View>
                </>
              )}
            />
            <AddCustomer />

            {/*************************Delete Customer By ID****************/}
            <DeleteCustomer
              visible={this.state.visible}
              onDismiss={this.hideDialogue}
              cancleButton_onpress={this.hideDialogue}
              yesButton_onpress={this.deleteCustomer}
            />
            {/***********************************************************/}
          </View>
        </View>
      </SafeAreaView>
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
    onGetAllCustomer: payload => dispatch(requestCustomerList(payload)),
    onDeleteCustomer: id => dispatch(requestCustomerDelete(id)),
    onUpdateCustomer: (payload, loginUserId = null) =>
      dispatch(requestCustomerUpdate(payload, loginUserId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Customer);
