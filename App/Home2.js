import React, {Component} from 'react';
import {
  ScrollView,
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {
  Card,
  Title,
  Paragraph,
  Searchbar,
  Button,
  Menu,
  Divider,
  Provider,
} from 'react-native-paper';
import {black} from 'react-native-paper/lib/typescript/styles/colors';
// import {Button} from 'react-native-paper';
// import SwipeToDelete from 'react-swipe-to-delete-component';
// import Icon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Ionicons';
// import SearchBar from 'react-native-searchbar';
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetching_from_server: false,
      // timer : -1,
      // page : 0,
      firstQuery: '',
      visible: false,
      visible1: true,
      CustomerData: [
        {
          id: '1',
          name: 'Komal Suthar',
          mobileNumber: '9724475425',
          address:
            'W:304 News Avenue Appt. B/H Sneh Sankul Wadi Adajan , Surat',
        },
        {
          id: '2',
          name: 'Komal Suthar',
          mobileNumber: '9724475425',
          address:
            'W:304 News Avenue Appt. B/H Sneh Sankul Wadi Adajan , Surat',
        },
        {
          id: '3',
          name: 'Komal Suthar',
          mobileNumber: '9724475425',
          address:
            'W:304 News Avenue Appt. B/H Sneh Sankul Wadi Adajan , Surat',
        },
        {
          id: '4',
          name: 'Komal Suthar',
          mobileNumber: '9724475425',
          address:
            'W:304 News Avenue Appt. B/H Sneh Sankul Wadi Adajan , Surat',
        },
        {
          id: '5',
          name: 'Komal Suthar',
          mobileNumber: '9724475425',
          address:
            'W:304 News Avenue Appt. B/H Sneh Sankul Wadi Adajan , Surat',
        },
        {
          id: '6',
          name: 'Komal Suthar',
          mobileNumber: '9724475425',
          address:
            'W:304 News Avenue Appt. B/H Sneh Sankul Wadi Adajan , Surat',
        },
        {
          id: '7',
          name: 'Komal Suthar',
          mobileNumber: '9724475425',
          address:
            'W:304 News Avenue Appt. B/H Sneh Sankul Wadi Adajan , Surat',
        },
        {
          id: '8',
          name: 'Komal Suthar',
          mobileNumber: '9724475425',
          address:
            'W:304 News Avenue Appt. B/H Sneh Sankul Wadi Adajan , Surat',
        },
      ],
    };
    this.timer = -1;

    this.page = 0;
  }
  _handleResults(results) {
    this.setState({results});
  }
  _openMenu = () => this.setState({visible: true});

  _closeMenu = () => this.setState({visible: false});
  render() {
    const {firstQuery} = this.state;

    return (
      <View>
        <View style={{marginTop: 3, alignContent: 'center'}}>
          <View
            style={{flexDirection: 'row', marginLeft: 4, position: 'relative'}}>
            <Searchbar
              style={{width: '90%'}}
              placeholder="Search"
              onChangeText={query => {
                this.setState({firstQuery: query});
              }}
              value={firstQuery}
            />
            {/* <TouchableOpacity style={{borderWidth:0.5}}>
                <Icon name="md-filter" color="black" size={35} style={{ marginLeft: 5 }}/>
                </TouchableOpacity> */}
            <Provider>
              <View
                style={{
                  position: 'absolute',
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <Menu
                  style={{position: 'absolute'}}
                  visible={this.state.visible}
                  onDismiss={this._closeMenu}
                  anchor={
                    // <Button onPress={this._openMenu}>Show menu</Button>
                    <TouchableOpacity
                      style={{borderWidth: 0.5}}
                      onPress={this._openMenu}>
                      <Icon
                        name="md-filter"
                        color="black"
                        size={35}
                        style={{marginLeft: 5}}
                      />
                    </TouchableOpacity>
                  }>
                  <Menu.Item onPress={() => {}} title="Item 1" />
                  <Menu.Item onPress={() => {}} title="Item 2" />
                  <Divider />
                  <Menu.Item onPress={() => {}} title="Item 3" />
                </Menu>
              </View>
            </Provider>
          </View>
        </View>
        <FlatList
          data={this.state.CustomerData}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View
              style={{
                alignContent: 'center',
                alignItems: 'center',
                position: 'relative',
              }}>
              <Card style={{marginTop: 20, width: '95%'}}>
                <Card.Content>
                  <Title>{item.name}</Title>
                  <Paragraph>{item.mobileNumber}</Paragraph>
                  <Paragraph>{item.address}</Paragraph>
                </Card.Content>
              </Card>
            </View>
          )}
        />

        {/* <View> */}
        {/* <TouchableOpacity>  */}
        {/* <ImageBackground source={require('../assets/LoginBGImage.png')}  */}
        {/* style={styles.addButton}> */}
        {/* <Text style={styles.plus}> + </Text> */}
        {/* </ImageBackground> */}
        {/* <Icon name="plus" color="black" size={25}/> */}
        {/* </TouchableOpacity> */}
        {/* </View> */}

        <View>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.plus}> + </Text>

            {/* <Icon name="plus" color="black" size={25}/> */}
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  addButton: {
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 85,
    right: 10,
    backgroundColor: 'skyblue',
    borderRadius: 90,
    overflow: 'hidden',
    width: 55,
    height: 55,
  },
  plus: {
    fontSize: 35,
    // marginLeft : 10,
    alignSelf: 'center',
    color: 'black',
  },
});
