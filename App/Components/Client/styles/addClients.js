import {StyleSheet} from 'react-native';

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

export default styles;
