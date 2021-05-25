import React from 'react';
import {View, Text, Image, Button} from 'react-native';
var ImagePicker = require('react-native-image-picker');

const createFormData = (image, body) => {
  const data = new FormData();

  data.append('image', {
    name: image.fileName,
    type: image.type,
    uri:
      Platform.OS === 'android' ? image.uri : image.uri.replace('file://', ''),
  });

  console.log('data is ', data);

  Object.keys(body).forEach(key => {
    data.append(key, body[key]);
  });

  return data;
};
export default class App extends React.Component {
  state = {
    image: null,
  };

  handleChoosePhoto = () => {
    const options = {
      noData: true,
    };
    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        this.setState({image: response});
      }
    });
  };

  handleUploadPhoto = () => {
    fetch(
      'http://192.168.0.110:4005/dip_jyoti/banners/8',
      {
        method: 'PATCH',
        body: createFormData(this.state.image, {id: '15'}),
      },
      console.log('createform data fields'),
    )
      .then(response => response.json())
      .then(response => {
        console.log('upload succes', response);
        alert('Upload success!');
        this.setState({image: null});
      })
      .catch(error => {
        console.log('upload error', error);
        alert('Upload failed!');
      });
  };

  render() {
    const {image} = this.state;

    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        {image && (
          <>
            <Image
              source={{uri: image.uri}}
              style={{width: 300, height: 300}}
            />
            <Button title="Upload" onPress={this.handleUploadPhoto} />
          </>
        )}
        <Button title="Choose Photo" onPress={this.handleChoosePhoto} />
      </View>
    );
  }
}
