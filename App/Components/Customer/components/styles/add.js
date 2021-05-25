import {StyleSheet} from 'react-native';

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

  model_styles: {marginTop: '50%'},
  action_styles: {flexDirection: 'row', display: 'flex'},
  add_button_opacity: {marginLeft: '10%'},
  error_msg: {
    color: 'red',
    margin: 5,
    marginTop: -5,
    marginLeft: '-11%',
  },
});
export default styles;
