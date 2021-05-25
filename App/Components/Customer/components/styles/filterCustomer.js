import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {height: '8.5%', width: '100%', flexDirection: 'row'},
  searchView: {
    width: '85%',
    margin: 2,
  },
  searbaar: {marginTop: '1%', marginLeft: '1%'},
  filterOptionMainView: {width: '25%'},
  filterIcon: {marginTop: '8%', marginLeft: '9%'},
  bottomDrawerMainView: {
    backgroundColor: '#edf2e9',
    width: '100%',
    height: 300,
    borderRadius: 10,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  filterOptionView: {
    height: '95%',
    width: '97%',
    marginTop: '2%',
    alignSelf: 'center',
    borderRadius: 20,
  },
  customerFilterView: {
    height: '15%',
    width: '50%',
    backgroundColor: '#71a3eb',
    marginTop: '-1%',
    alignSelf: 'center',
    borderRadius: 20,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'white',
  },
  customerFilterContent: {
    fontSize: 22,
    alignSelf: 'center',
    color: 'white',
    fontFamily: 'Itim-Regular',
    // marginBottom: '-10%',
  },
  filterAllContentView: {
    height: '70%',
    width: '95%',
    alignSelf: 'center',
    marginTop: '2%',
  },
  commonContentView: {
    width: '100%',
    height: '17%',
    flexDirection: 'row',
  },
  filterContentStyle: {
    fontFamily: 'Ubuntu-Bold',
    fontSize: 16,
    marginTop: '2%',
    color: 'white',
  },
  genderFilterView: {
    height: '32%',
    width: '100%',
    marginLeft: '3%',
  },
  filterByGenderContent: {
    fontFamily: 'Ubuntu-Bold',
    marginTop: '2%',
    alignSelf: 'center',
    color: 'white',
    fontSize: 16,
  },
  genderDivideView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  maleAndfemale: {flexDirection: 'row'},
  maleContent: {
    marginTop: '9%',
    marginLeft: '5%',
    color: 'white',
  },
  femailContent: {marginTop: '9%', color: 'white'},
  doneView: {
    height: '10%',
    width: '100%',
    justifyContent: 'flex-end',
  },
  doneContent: {
    alignSelf: 'flex-end',
    fontSize: 20,
    color: 'white',
  },
});
export default styles;
