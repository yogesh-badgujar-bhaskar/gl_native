import React , {Component} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import {requestProjectList} from '../actions/project';
import get from 'lodash/get';
import find from 'lodash/find';
import isEmpty from 'lodash/isEmpty';
import remove from 'lodash/remove';
import isUndefined from 'lodash/isUndefined';

const _ = {get, remove, isEmpty, isUndefined, find};

class project extends Component {
    componentDidMount() {
        let a = this.props.onGetAllProjects();
      }
    
    render(){
        return(
            <View> 
            <Text>{console.log("Success" , this.props.ProjectData)}</Text>
            </View>
        )
    }
}
const mapStateToProps = state => {
    return {
      ProjectData: _.get(state, 'project.ProjectData', []),
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      onGetAllProjects: payload => dispatch(requestProjectList(payload)),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(project);
  
