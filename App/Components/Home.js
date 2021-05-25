import React, {Component} from 'react';
import {
  Image,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {Text} from 'react-native-paper';
import styles from './styles';

const dataList = [
  // {
  //   key: 'Dashboard',
  //   Icon: require('../assets/MainHome/dashboard.png'),
  //   link: 'Dashboard',
  // },

  // {key: 'Setting', Icon: require('../assets/MainHome/setting.png')},

  {
    key: 'Customers',
    Icon: require('../assets/MainHome/customers.png'),
    link: 'Customer',
  },
  {
    key: 'Create Customer',
    Icon: require('../assets/MainHome/createUser.png'),
    link: 'CreateCustomer',
  },

  // {key: 'User', Icon: require('../assets/MainHome/user.png'), link: 'User'},
  // {key:'Create Customer',Icon: require('../assets/MainHome/createUser.png') },

  {key: 'Provider', Icon: require('../assets/MainHome/provider.png')},
  {key: 'Create Provider', Icon: require('../assets/MainHome/createUser.png')},

  {
    key: 'Client',
    Icon: require('../assets/MainHome/client.png'),
    link: 'Client',
  },
  {
    key: 'Create Client',
    Icon: require('../assets/MainHome/clientAdd.png'),
    link: 'CreateClient',
  },
];
const numColumns = 2;

export default class Home extends Component {
  formatData = (dataList, numColumns) => {
    const totalRows = Math.floor(dataList.length / numColumns);
    let totalLastRow = dataList.length - totalRows * numColumns;

    while (totalLastRow !== 0 && totalLastRow == numColumns) {
      dataList.push({key: 'blank', empty: true});
      totalLastRow++;
    }
    return dataList;
  };
  _renderItem = ({item, index}) => {
    let {itemStyle, itemInvisible} = styles;
    if (item.empty) {
      return <View style={[itemStyle, itemInvisible]} />;
    }
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate(item.link)}>
        <View
          style={{
            // height: 189,
            width: '113%',
            // alignItems : 'center',
            justifyContent: 'center',
            justifyContent: 'space-between',
            padding: 10,
          }}>
          <View style={styles.card}>
            <View style={styles.child_view}>
              <View style={styles.child_view_icon}>
                <Image style={styles.image_icon} source={item.Icon} />
              </View>
              <Text style={styles.content}>{item.key}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <SafeAreaView>
        <View
          style={{
            height: '100%',
            width: '100%',
            // backgroundColor: 'black',
          }}>
          <Image
            style={{
              height: '100%',
              width: '100%',
              position: 'absolute',
            }}
            source={require('../assets/MainHome/homeBackground.jpg')}
          />
          <FlatList
            data={this.formatData(dataList, numColumns)}
            renderItem={this._renderItem}
            keyExtractor={(item, index) => index.toString()}
            numColumns={numColumns}></FlatList>
        </View>
      </SafeAreaView>
    );
  }
}
