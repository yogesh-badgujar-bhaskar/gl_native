import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(10, 10, 10, 0.8)',
    height: '100%',
  },
  container1: {
    backgroundColor: 'rgba( 10, 10, 10, 0.5 )',
    height: '100%',
  },
  textinput: {
    alignItems: 'center',
    borderBottomColor: 'red',
    marginTop: '5%',
  },
  forgotpassword: {
    marginTop: '3%',
  },
  btn: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
  },
  btnInner: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  socialBtnfb: {
    textAlign: 'center',
    padding: 6,
    fontWeight: 'bold',
    marginRight: 10,
    backgroundColor: '#1E90FF',
    borderRadius: 20,
    height: 35,
    width: 35,
  },
  socialBtnGoogle: {
    textAlign: 'center',
    padding: 6,
    fontWeight: 'bold',
    marginRight: 10,
    backgroundColor: '#ff2626',
    borderRadius: 20,
    height: 35,
    width: 35,
  },
  topImage: {
    marginTop: -60,
    height: 450,
    width: '100%',
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  welcome_text: {
    fontSize: 18,
    textAlign: 'center',
    top: 10,
    fontWeight: 'bold',
  },
  textinput_style: {width: '85%', marginTop: '2%'},
  signInButtonView: {marginTop: '5%', width: '30%'},
  signinButton: {borderRadius: 30},
  signin_text: {color: 'white'},
  signupButtonView: {marginTop: '5%', width: '42%'},
  signupButton: {borderRadius: 30},
  forgotPassword: {
    color: '#00025c',
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 10,
  },
});
export default styles;
