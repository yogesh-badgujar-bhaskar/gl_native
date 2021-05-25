import {StyleSheet} from 'react-native';

var styles = StyleSheet.create({
  feed: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 30,
    alignItems: 'center',
    backgroundColor: 'red',
    justifyContent: 'center',
  },
  card: {
    alignItems: 'center',
    backgroundColor: 'white',
    height: 150,
    width: 150,
    alignSelf: 'center',
    // aspectRatio: 1,
    // marginBottom: 16,
    borderWidth: 2,
    borderColor: '#3d64a6',
    justifyContent: 'center',
    // marginBottom: '10%',
    // marginLeft: '0%',
  },
  child_view: {
    height: '95%',
    width: '95%',
    //backgroundColor: 'grey',
    alignSelf: 'center',
    // flex: 1,
    // flexDirection: 'column',
  },
  child_view_icon: {
    height: '80%',
    width: '100%',
    backgroundColor: 'white',
    //borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image_icon: {
    marginTop: '6%',
    height: 92.8,
    width: 108,
  },
  content: {
    marginTop: '0%',
    alignSelf: 'center',
  },
});
export default styles;
