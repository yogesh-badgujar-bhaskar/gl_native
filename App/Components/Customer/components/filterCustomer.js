import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Checkbox, Divider, Searchbar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {BottomSheet} from 'react-native-btr';
import {RadioButton} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles/filterCustomer';
import {
  CHECK_COLOR,
  DONE,
  FEMALE,
  MALE,
  SEARCH_BYNAME,
  UNCHECKED_COLOR,
} from '../../../../common/customerFieldName';
import {filter_list} from '../../../../common/icons';
import {
  AREAWISE_FILTER,
  ATOZ_FILTER,
  CUSTOMER_FILTER,
  DATE_FORMATE_FILTER,
  GENDERWISE_FILTER,
  ZTOA_FILTER,
} from '../../../../common/CommonMsg';

export default class FilterCustomer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      atozStatus: 'unchecked',
      visible: false,
      ztoaStatus: 'unchecked',
      dateStatus: 'unchecked',
      areaStatus: 'unchecked',
      data: null,
    };
    this.arrayholder = [];
  }

  model1 = () => {
    this.setState({visible: true});
  };

  lowTohigh = () => {
    if (this.state.checkStatus == 'unchecked') {
      this.setState({checkStatus: 'checked'});
    } else {
      this.setState({checkStatus: 'unchecked'});
    }
  };

  can = () => {
    this.setState({visible: false});
  };

  atozStatusHandler = () => {
    if (this.state.atozStatus == 'unchecked') {
      this.setState({atozStatus: 'checked'});
    } else {
      this.setState({atozStatus: 'unchecked'});
    }
  };

  ztoaStatusHandler = () => {
    if (this.state.ztoaStatus == 'unchecked') {
      this.setState({ztoaStatus: 'checked'});
    } else {
      this.setState({ztoaStatus: 'unchecked'});
    }
  };

  dateStatusHandler = () => {
    if (this.state.dateStatus == 'unchecked') {
      this.setState({dateStatus: 'checked'});
    } else {
      this.setState({dateStatus: 'unchecked'});
    }
  };

  areaStatusHandler = () => {
    if (this.state.areaStatus == 'unchecked') {
      this.setState({areaStatus: 'checked'});
    } else {
      this.setState({areaStatus: 'unchecked'});
    }
  };

  componentDidMount() {
    this.setState({data: this.props.data});
    this.arrayholder = this.props.data;
  }

  SearchFilterFunction(text) {
    const newData = this.arrayholder.filter(function (item) {
      const itemData = item.firstName
        ? item.firstName.toUpperCase()
        : ''.toUpperCase();
      const textData = text.toString().toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({data: newData, search: text});
  }

  Done = () => {
    this.setState({visible: false});
  };

  render() {
    return (
      <>
        <View style={styles.mainContainer}>
          <View style={styles.searchView}>
            <Searchbar
              placeholder={SEARCH_BYNAME}
              style={styles.searbaar}
              onChange={text => this.SearchFilterFunction(text)}
            />
          </View>
          <View style={styles.filterOptionMainView}>
            <TouchableOpacity onPress={() => this.model1()}>
              <Icon
                name={filter_list}
                size={40}
                color="white"
                style={styles.filterIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
        <BottomSheet
          visible={this.state.visible}
          onBackButtonPress={() => this.can()}
          onBackdropPress={() => this.can()}>
          <View style={styles.bottomDrawerMainView}>
            <LinearGradient
              colors={['#4c669f', '#3b5998', '#192f6a']}
              style={styles.linearGradient}>
              <View style={styles.filterOptionView}>
                <View style={styles.doneView}>
                  <TouchableOpacity onPress={() => this.Done()}>
                    <Text style={styles.doneContent}>{DONE}</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.customerFilterView}>
                  <Text style={styles.customerFilterContent}>
                    {CUSTOMER_FILTER}
                  </Text>
                </View>
                <View style={styles.filterAllContentView}>
                  <View style={styles.commonContentView}>
                    <Checkbox
                      status={this.state.atozStatus}
                      onPress={() => this.atozStatusHandler()}
                      color={CHECK_COLOR}
                      uncheckedColor={UNCHECKED_COLOR}
                    />
                    <Text style={styles.filterContentStyle}>{ATOZ_FILTER}</Text>
                  </View>
                  <Divider style={{backgroundColor: 'white'}} />
                  <View style={styles.commonContentView}>
                    <Checkbox
                      status={this.state.ztoaStatus}
                      onPress={() => this.ztoaStatusHandler()}
                      color={CHECK_COLOR}
                      uncheckedColor={UNCHECKED_COLOR}
                    />
                    <Text style={styles.filterContentStyle}>{ZTOA_FILTER}</Text>
                  </View>
                  <Divider style={{backgroundColor: 'white'}} />
                  <View style={styles.commonContentView}>
                    <Checkbox
                      status={this.state.dateStatus}
                      onPress={() => this.dateStatusHandler()}
                      color={CHECK_COLOR}
                      uncheckedColor={UNCHECKED_COLOR}
                    />
                    <Text style={styles.filterContentStyle}>
                      {DATE_FORMATE_FILTER}
                    </Text>
                  </View>
                  <Divider style={{backgroundColor: 'white'}} />
                  <View style={styles.commonContentView}>
                    <Checkbox
                      status={this.state.areaStatus}
                      onPress={() => this.areaStatusHandler()}
                      color={CHECK_COLOR}
                      uncheckedColor={UNCHECKED_COLOR}
                    />
                    <Text style={styles.filterContentStyle}>
                      {AREAWISE_FILTER}
                    </Text>
                  </View>
                  <Divider style={{backgroundColor: 'white'}} />
                  <View style={styles.genderFilterView}>
                    <Text style={styles.filterByGenderContent}>
                      {GENDERWISE_FILTER}
                    </Text>
                    <RadioButton.Group value="">
                      <View style={styles.genderDivideView}>
                        <View style={styles.maleAndfemale}>
                          <RadioButton
                            value="Male"
                            uncheckedColor={UNCHECKED_COLOR}
                            color={CHECK_COLOR}
                          />
                          <Text style={styles.maleContent}>{MALE}</Text>
                        </View>
                        <View style={styles.maleAndfemale}>
                          <RadioButton
                            value="Female"
                            color={CHECK_COLOR}
                            uncheckedColor={UNCHECKED_COLOR}
                          />
                          <Text style={styles.femailContent}>{FEMALE}</Text>
                        </View>
                      </View>
                    </RadioButton.Group>
                  </View>
                </View>
              </View>
            </LinearGradient>
          </View>
        </BottomSheet>
      </>
    );
  }
}
