import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  ImageBackground,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Card, Paragraph} from 'react-native-paper';

// const dataList =[{key:'Dashboard',Icon: require('../assets/Home/Dashboard.jpg') , link : 'Dashboard'},
//                 {key:'Create User',Icon : require('../assets/Home/add_blank.jpg') ,  link : 'SignUp'},
//                 {key:'User',Icon:require('../assets/Home/user.png') ,  link : 'User'},
//                 {key:'Customers',Icon:require('../assets/Home/customer.png')},
//                 {key:'Create Customer',Icon:require('../assets/Home/add_blank.jpg')},
//                 {key:'Provider',Icon:require('../assets/Home/provider.jpg')},
//                 {key:'Setting',Icon:require('../assets/Home/settings.png')},
//                 {key:'Dashboard',Icon:require('../assets/Home/Dashboard.jpg')},
//                 {key:'Create User',Icon : require('../assets/Home/add_blank.jpg')},
//                 {key:'User',Icon:require('../assets/Home/user.png')},
//             ]

const dataList = [
  {key: 'Dashboard', Icon: 'tv', link: 'Dashboard'},
  {key: 'Setting', Icon: 'gears'},
  {key: 'Create User', Icon: 'plus-square-o', link: 'SignUp'},
  {key: 'User', Icon: 'user-o', link: 'User'},
  {key: 'Customers', Icon: 'users', link: 'Customer'},
  {key: 'Create Customer', Icon: 'plus-square-o'},
  {key: 'Provider', Icon: 'hospital-o'},
  {key: 'Dashboard', Icon: 'tv'},
  {key: 'User', Icon: 'user-o', link: 'User'},
  {key: 'Customers', Icon: 'users', link: 'Customer'},
];

const numColumns = 2;
const WIDTH = Dimensions.get('window').width;
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
    let {itemStyle, itemText, itemInvisible} = styles;
    if (item.empty) {
      return <View style={[itemStyle, itemInvisible]} />;
    }
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate(item.link)}>
        <View
          style={{
            alignContent: 'center',
            alignItems: 'center',
            margin: 7,
            position: 'relative',
          }}>
          <Card style={styles.itemStyle}>
            <Card.Content>
              {/* <Image source={item.Icon} style={{height: 70 , width : 70}}/> */}
              <Icon
                name={item.Icon}
                color="#000080"
                size={85}
                style={{textAlign: 'center'}}
              />
              <Paragraph style={{textAlign: 'center', marginTop: 10}}>
                {item.key}
              </Paragraph>
            </Card.Content>
          </Card>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    let {container, itemText} = styles;
    return (
      <ImageBackground
        source={require('../assets/Home_BGImage.jpg')}
        style={{height: '100%', width: '100%'}}>
        <View style={container}>
          <FlatList
            data={this.formatData(dataList, numColumns)}
            renderItem={this._renderItem}
            keyExtractor={(item, index) => index.toString()}
            numColumns={numColumns}></FlatList>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //paddingTop:0,
    // paddingLeft:0
    alignItems: 'center',
    margin: 15,
  },

  itemStyle: {
    //backgroundColor:'white',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    // height:150,
    width: 154,
    flex: 1,
    margin: '3%',
    borderWidth: 1,
    borderColor: '#000080',
    backgroundColor: 'white',
    // borderColor:'#d6d7da',
    //height:WIDTH / numColumns,

    borderRadius: 5,
  },
  itemText: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
});
