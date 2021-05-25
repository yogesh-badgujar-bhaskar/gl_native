import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from '../AppStyle';
import Icon from 'react-native-vector-icons/FontAwesome';
import LogoLoading from '../App/LogoLoading';
import Home from '../App/Components/Home';
import SignIn from '../App/Components/Auth/SignIn/components/SignIn';
import SignUp from '../App/Components/Auth/SignUp/SignUp';
import logout from '../App/Components/Auth/SignIn/components/logout';
import Dashboard from '../App/Components/Dashboard/Dashboard';
import User from '../App/Components/User/User';
import Customer from '../App/Components/Customer/components/Customer';
import AsyncStorage from '@react-native-community/async-storage';
import {Avatar} from 'react-native-paper';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator, DrawerItemList} from '@react-navigation/drawer';
import {Container, Content, Header} from 'native-base';
import {StatusBar} from 'react-native';
import Client from '../App/Components/Client/components/Client';
import CreateCustomer from '../App/Components/Customer/components/createCustomer/components/Client';

const NavigationDrawerStructure = props => {
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        {/* <Icon name="bars" color="black" size={25} style={{ marginLeft: 10 }}/> */}
        <Image
          style={styles.menustyle}
          source={require('../App/assets/menu.png')}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

const Stack = createStackNavigator();

const MainStackNavigator = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        // headerShown: false
        headerTitle: props => (
          <Image
            style={styles.logostyle}
            source={require('../App/assets/logo.png')}
            resizeMode="contain"
          />
        ),
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        // headerRight:() => <MenuItem />,
        headerRight: () => (
          <Avatar.Image
            size={40}
            style={styles.headerAvatar}
            source={require('../App/assets/Profile.png')}
          />
        ),
        // Image source={require('./Components/assets/Profile.png')} style={styles.headerAvatar} />,
        headerStyle: {
          height: 50,
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

const DashboardStackNavigator = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: props => (
          <Image
            style={styles.logostyle}
            source={require('../App/assets/logo.png')}
            resizeMode="contain"
          />
        ),
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerRight: () => (
          <Avatar.Image
            size={40}
            style={styles.headerAvatar}
            source={require('../App/assets/Profile.png')}
          />
        ),
        headerStyle: {
          height: 50,
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
};

const UserStackNavigator = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: props => (
          <Image
            style={styles.logostyle}
            source={require('../App/assets/logo.png')}
            resizeMode="contain"
          />
        ),
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerRight: () => (
          <Avatar.Image
            size={40}
            style={styles.headerAvatar}
            source={require('../App/assets/Profile.png')}
          />
        ),
        headerStyle: {
          height: 50,
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen name="User" component={User} />
    </Stack.Navigator>
  );
};

const CustomerStackNavigator = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: props => (
          <Image
            style={styles.logostyle}
            source={require('../App/assets/logo.png')}
            resizeMode="contain"
          />
        ),
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerRight: () => (
          <Avatar.Image
            size={40}
            style={styles.headerAvatar}
            source={require('../App/assets/Profile.png')}
          />
        ),
        headerStyle: {
          height: 50,
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen name="Customer" component={Customer} />
    </Stack.Navigator>
  );
};

const CreateClientStackNavigator = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: props => (
          <Image
            style={styles.logostyle}
            source={require('../App/assets/logo.png')}
            resizeMode="contain"
          />
        ),
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerRight: () => (
          <Avatar.Image
            size={40}
            style={styles.headerAvatar}
            source={require('../App/assets/Profile.png')}
          />
        ),
        headerStyle: {
          height: 50,
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen name="CreateClient" component={Client} />
    </Stack.Navigator>
  );
};

const CreateCustomerStackNavigator = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: props => (
          <Image
            style={styles.logostyle}
            source={require('../App/assets/logo.png')}
            resizeMode="contain"
          />
        ),
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerRight: () => (
          <Avatar.Image
            size={40}
            style={styles.headerAvatar}
            source={require('../App/assets/Profile.png')}
          />
        ),
        headerStyle: {
          height: 50,
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen name="CreateCustomer" component={CreateCustomer} />
    </Stack.Navigator>
  );
};

const Drawer = createDrawerNavigator();

const DrawerImage = (props, navigation) => (
  <Container>
    <Header style={styles.headerMainStyle}>
      <View style={{flexDirection: 'row-reverse'}}>
        <Image
          source={require('../App/assets/Profile.png')}
          style={styles.avatar}
        />
        {/* <TouchableOpacity  onPress={() => navigation.navigate('Profile') } >  */}
        <Text
          style={styles.editIcon}
          onPress={() => props.navigation.navigate('profile')}>
          <Icon name="pencil" size={20} color="white" />
        </Text>
        {/* </TouchableOpacity>  */}
        <Text style={styles.UserName}> Komal Suthar </Text>
      </View>
    </Header>
    <Content style={{marginTop: 5}}>
      <StatusBar backgroundColor="black"></StatusBar>
      <DrawerItemList {...props} />
    </Content>
  </Container>
);

export default MainDrawernavigation = () => {
  const [isLoggedin, setLoggedin] = useState(null);

  useEffect(async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      setLoggedin(true);
    } else {
      setLoggedin(false);
    }
  }, []);

  return (
    <Drawer.Navigator drawerContent={props => DrawerImage(props)}>
      {isLoggedin == null ? (
        <Drawer.Screen name="Logo" component={LogoLoading} />
      ) : isLoggedin == true ? (
        <> 
          <Drawer.Screen name="Home" component={MainStackNavigator} />
          <Drawer.Screen name="Dashboard" component={DashboardStackNavigator} />
          <Drawer.Screen name="Users" component={UserStackNavigator} />
          <Drawer.Screen name="Customer" component={CustomerStackNavigator} />
          <Drawer.Screen
            name="CreateClient"
            component={CreateClientStackNavigator}
          />
          <Drawer.Screen name="Logout" component={logout} />
          <Drawer.Screen
            name="CreateCustomer"
            component={CreateCustomerStackNavigator}
          />
        </>
      ) : (
        <>
          <Drawer.Screen
            name="SignIn"
            component={SignIn}
            options={{swipeEnabled: false}}
          />
          <Drawer.Screen
            name="SignUp"
            component={SignUp}
            options={{swipeEnabled: false}}
          />

          {/* <Drawer.Screen name="Tabs" component={MainTabNavigator}/> */}
        </>
      )}
    </Drawer.Navigator>
  );
};
