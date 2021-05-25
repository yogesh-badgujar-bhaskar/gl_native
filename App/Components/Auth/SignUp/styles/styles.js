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
    // marginTop:'10%'
  },
  forgotpassword: {
    alignSelf: 'flex-end',
    marginRight: '9%',
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
  View_container: {marginTop: -60},
  image_view: {alignItems: 'center'},
  image_style: {width: '100%', height: 350},
  input_common: {width: '85%'},
  action_view: {marginTop: '5%', width: '42%'},
  SignUp_styles: {borderRadius: 20},
  backtologin_styles: {marginTop: 10},
});
export default styles;
