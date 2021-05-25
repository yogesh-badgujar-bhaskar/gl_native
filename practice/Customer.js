import React, {Component} from 'react';
import {
  Image,
  ScrollView,
  Text,
  View,
  FlatList,
  SafeAreaView,
  Modal,
  StyleSheet,
  TextInput,
} from 'react-native';
import {connect} from 'react-redux';
import {
  Card,
  FAB,
  Paragraph,
  Provider,
  Portal,
  Dialog,
  Button,
} from 'react-native-paper';
import get from 'lodash/get';
const _ = {get};
import styles1 from './styles';
import Antd_icon from 'react-native-vector-icons/AntDesign';
import MaterialCommunity_icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  requestCustomerList,
  requestCustomerDelete,
  requestCustomerCreate,
  requestCustomerUpdate,
} from '../actions/customer';
import Add from './Add';

class Customer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      firstName: '',
      firstName_error: '',
      lastName: '',
      email: '',
      phone_no: '',
      phone_error: '',
      address: '',
      data: [],
      deleteId: '',
      isVisible: false,
      isVisibleUpdate: false,
      background_image: require('../../../assets/MainHome/homeBackground.jpg'),
    };
  }

  componentDidMount() {
    let a = this.props.onGetAllCustomer();
    console.log('componentdidmount from customer.js', a);
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
    console.log('delete customer from line no 50', a);
    this.setState({visible: false});
  };
  // ******************************//
  displayModal(show) {
    this.setState({isVisible: show});
    // alert('welcome');
  }

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

  addCustomer = () => {
    const {firstName, lastName, email, address, phone_no} = this.state;
    this.props.onCreateCustomer({
      firstName: firstName,
      lastName: lastName,
      email: email,
      address: address,
      phone_no: phone_no,
    });
    // console.log("add data home" , AddData)
  };

  phone_Validator = () => {
    const {phone_no} = this.state;
    if (phone_no == '') {
      this.setState({phone_error: 'Please Fill the Mobile Number'});
    } else {
      this.setState({phone_error: ''});
    }
  };

  firstName_Validator = () => {
    const {firstName} = this.state;
    if (firstName == '') {
      this.setState({firstName_error: 'Please fill the First name Field'});
    } else {
      this.setState({firstName_error: ''});
    }
  };

  render() {
    const {background_image} = this.state;
    return (
      <SafeAreaView>
        <View>
          <View style={styles1.container}>
            <Image style={styles1.background_image} source={background_image} />

            {/*************************Add CUSTOMER*************************/}
            <Add
              modelvisible={this.state.isVisible}
              phone_onChange={phoneno => this.setState({phone_no: phoneno})}
              phone_onBlur={() => this.phone_Validator()}
              phone_error={this.state.phone_error}
              phone_value={this.state.phone_no}
              firstName_onChange={fname => this.setState({firstName: fname})}
              firstName_Value={this.state.firstName}
              firstName_onBlur={() => this.firstName_Validator()}
              firstName_error={this.state.firstName_error}
              lastName_onChange={lname => this.setState({lastName: lname})}
              lastName_value={this.state.lastName}
              email_onChange={email_ => this.setState({email: email_})}
              email_value={this.state.email}
              address_onChange={address_ => this.setState({address: address_})}
              address_valu={this.state.address}
              cancle_onpress={() => {
                this.displayModal(!this.state.isVisible);
              }}
              add_onpress={() => {
                this.addCustomer();
                this.displayModal(false);
                alert('New Customer Addedd Successfully..');
              }}
            />
            {/**************************************************************/}

            {/***********************UPDATE CUSTOMER************************/}
            <Modal
              style={{marginTop: '30%'}}
              animationType={'slide'}
              transparent={false}
              visible={this.state.isVisibleUpdate}
              onRequestClose={() => {
                Alert.alert('Modal has now been closed.');
              }}>
              <View style={styles.viewWrapper}>
                <View style={styles.modalView}>
                  <TextInput
                    placeholder="Mobile Number"
                    style={styles.textInput}
                    onChangeText={phoneno => this.setState({phone_no: phoneno})}
                    value={this.state.phone_no}
                    keyboardType="numeric"
                  />

                  <TextInput
                    placeholder="FirstName"
                    style={styles.textInput}
                    onChangeText={fname => this.setState({firstName: fname})}
                    value={this.state.firstName}
                  />

                  <TextInput
                    placeholder="LastName"
                    style={styles.textInput}
                    onChangeText={lname => this.setState({lastName: lname})}
                    value={this.state.lastName}
                  />
                  <TextInput
                    placeholder="Email"
                    style={styles.textInput}
                    onChangeText={email_ => this.setState({email: email_})}
                    value={this.state.email}
                  />
                  <TextInput
                    placeholder="Address"
                    style={styles.textInput}
                    onChangeText={address_ =>
                      this.setState({address: address_})
                    }
                    value={this.state.address}
                  />

                  <View style={{flexDirection: 'row', display: 'flex'}}>
                    <TouchableOpacity>
                      <Text
                        style={styles.closeText}
                        onPress={() => {
                          this._UpdatedisplayModal(!this.state.isVisibleUpdate);
                        }}>
                        Cancel
                      </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{marginLeft: '10%'}}>
                      <Text
                        onPress={() => {
                          this.props.onUpdateCustomer(this.state);
                          this._UpdatedisplayModal(false);
                          alert('Update Customer Successfully..');
                        }}
                        style={styles.closeText}>
                        Update
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>
            {/**************************************************************/}

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
            <View style={styles.container}>
              <FAB
                icon="plus"
                color="black"
                style={styles.Fab}
                onPress={() => this.displayModal(true)}
              />
            </View>

            {/*************************Delete Customer By ID****************/}
            <Provider>
              <Portal>
                <Dialog
                  visible={this.state.visible}
                  onDismiss={this.hideDialogue}>
                  <Dialog.Title>Alert</Dialog.Title>
                  <Dialog.Content>
                    <Paragraph>Are you sure to delete this user</Paragraph>
                  </Dialog.Content>
                  <Dialog.Actions>
                    <Button onPress={this.hideDialogue}>Cancel</Button>
                    <Button onPress={this.deleteCustomer}>yes</Button>
                  </Dialog.Actions>
                </Dialog>
              </Portal>
            </Provider>
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
    onCreateCustomer: payload => dispatch(requestCustomerCreate(payload)),
    onUpdateCustomer: (payload, loginUserId = null) =>
      dispatch(requestCustomerUpdate(payload, loginUserId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Customer);

const styles = StyleSheet.create({
  textInput: {
    width: '80%',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderWidth: 1,
    marginBottom: 8,
  },
  modalView: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '10%',
    elevation: 5,
    height: '80%',
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 7,
  },
  viewWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  closeText: {
    fontSize: 24,
    textAlign: 'center',
  },
  fab: {
    alignSelf: 'center',
    // position: 'absolute',
    // marginTop: '10%',
    backgroundColor: 'white',
  },
  container: {
    position: 'absolute',
    //backgroundColor: 'black',
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    bottom: 30,
    right: 10,
    alignItems: 'flex-end',
  },
  Fab: {
    position: 'absolute',
    margin: 50,
    backgroundColor: 'white',
  },
});
