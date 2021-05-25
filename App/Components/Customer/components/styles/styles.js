import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    // backgroundColor: 'black',
    // position: 'absolute',
  },
  background_image: {
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
  detail_main_view: {
    padding: 10,
  },
  detail_main_card: {
    margin: 5,
    borderRadius: 10,
  },
  detail_bottom_view: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 18,
    backgroundColor: '#e6eef7',
    height: '100%',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  detail_info: {
    // backgroundColor: 'white',
    height: '100%',
    width: '78%',
    marginLeft: -5,
  },
  detail_phone: {paddingBottom: 1, paddingTop: 2},
  action_main_view: {
    // backgroundColor: 'grey',
    // flex: 1,
    flexDirection: 'row',
    height: '100%',
    width: '25%',
    justifyContent: 'center',
    paddingLeft: 0,
  },
  fab_view: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    bottom: 30,
    right: 10,
    alignItems: 'flex-end',
  },
  Fab_display: {
    position: 'absolute',
    margin: 50,
    backgroundColor: 'white',
  },
});

export default styles;
